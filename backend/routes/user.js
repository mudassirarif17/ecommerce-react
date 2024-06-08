import express from "express";
const router = express.Router();
import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import "dotenv/config.js";
import fetchUser from "../middleware/fetchUser.js";


// Multer image upload code 
const storage = multer.diskStorage({
  destination : function(req , file , cb){
    cb(null , "../src/images");
  },
  filename : function(req , file , cb){
    const uniqueSuffix = Date.now();
    cb(null , uniqueSuffix + file.originalname)
  }
})

const upload = multer({storage : storage});

//Route 1 : Create a new user
router.post('/signup', upload.single("image") ,  async (req, res) => {
  const {name , email , password} = req.body;
  const imageName = req.file.filename;

   try {
    if(!name || !email || !password){
        return res.status(400).json({error : "All Fields are required"})
    }

    // Email Validation
    if(!email.includes('@')){
        return res.status(400).json({error : "Please Enter a valid Email"})
    }

    // Unique email validation
    const user = await User.findOne({email});
    if(user){
        res.status(400).json({error : "User already exist"})
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPass = await bcrypt.hash(password , salt);

    // save Data into database
    const newUser = await User({
        image : imageName,
        name,
        email,
        password : hashedPass
    }) 

    await newUser.save();
    console.log(newUser);
    res.status(200).json({success : "SignUp Successfully"})
   } catch (error) {
    console.log(error);
    res.status(500).send({error : "Internal Server Error"})
   }
});

// Route 2 : login
router.post("/login" , async (req,res)=>{
  const {email , password} = req.body;

  try {
      if(!email || !password){
          return res.status(400).json({error : "All fields are required"})
      }

      if(!email.includes("@")){
          return res.status(400).json({error : "Please Enter a valid Email"})
      }

      const user = await User.findOne({email});
      console.log(user);

      if(!user){
          res.status.send({error : "User Not Found"});
      }

      const dotMatch = await bcrypt.compare(password , user.password);
      console.log(dotMatch);

      if(dotMatch){
          const token = jwt.sign({userId : user.id} , process.env.JWT_SECRET , {
              expiresIn : "7d"
          }) ;

          res.status(201).json({token})
      }
      else{
          res.status(404).json({error : "Email And Password Not Found"})
      }
  } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error")
  }
})


// Route 3 : Get User End point
router.get('/getuser' , fetchUser ,async (req , res)=>{
  try {
      const userId = req.userId;
      console.log(userId);
      const user = await User.findById(userId).select("-password");
      res.send(user);
  } catch (error) {
      console.log(error);
      res.status(500).json({error : "Internal Server Error"});
  }
})


// Route 4 : update profile end point 
router.post('/updateuser/:id' , upload.single("image") , async (req , res)=>{
  const {name , email } = req.body;
  const {id} = req.params;
  const imageName = req.file.filename;

  try {
      const user =  await User.findById({_id : id});

      if(!user){
          return res.status(404).send("Not Found")
      }


      console.log(user);

      const users = await User.findByIdAndUpdate({_id : id} ,{ 
          $set : {
              image : imageName,
              name ,
              email ,
          }
  } , {new : true});

  res.json({users , success : "User Profile Updated"})

  } catch (error) {
      console.log(error);
      res.status(500).json({error : "Internal Server Error"});
  }
})

// Get a single user by ID
router.get('/getallusers', async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});


// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router
