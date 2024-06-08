import mongoose , {model} from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image : {
    type : String,
    //required : true
    default : 0
},
status : {
    type : Boolean,
    default : 0
},
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});

export default model('User', userSchema);
