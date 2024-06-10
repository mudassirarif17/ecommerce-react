import React , {useState} from 'react'
import { RiUserAddLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { FaFirstOrder } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import Frame from "../assets/Frame.png";
import { RxHamburgerMenu } from "react-icons/rx";
import "../App.css";


const Dashboard = () => {
    const [active , setActive] = useState("dashboard");
    const slideHandler = () => {
        if(document.getElementById("right-side").classList.contains('default-width-right')){
            document.getElementById("right-side").classList.add('add-width-right');
            document.getElementById("left-side").classList.add('add-width-left');
            document.getElementById("right-side").classList.remove('default-width-right');
            document.getElementById("left-side").classList.remove('default-width-left');
            document.getElementById("logo-text").style.display="none";
            document.getElementsByClassName('icon-text')[0].style.display="none";
            document.getElementsByClassName('list_item')[0].classList.remove("ml-[38px]");
            document.getElementsByClassName('list_item')[0].classList.add("flex");
            document.getElementsByClassName('list_item')[0].classList.add("justify-center");
            document.getElementsByClassName('list_item')[0].classList.add("w-12");
            document.getElementsByClassName('list_item')[0].classList.add("mx-auto");
            }
        else{
            document.getElementById("right-side").classList.remove('add-width-right');
            document.getElementById("left-side").classList.remove('add-width-left');
            document.getElementById("right-side").classList.add('default-width-right');
            document.getElementById("left-side").classList.add('default-width-left');
            document.getElementById("logo-text").style.display="block";
            document.getElementsByClassName('icon-text')[0].style.display="block";
            document.getElementsByClassName('list_item')[0].classList.add("ml-[38px]");
            document.getElementsByClassName('list_item')[0].classList.remove("justify-center");
            document.getElementsByClassName('list_item')[0].classList.remove("w-12");
            document.getElementsByClassName('list_item')[0].classList.remove("mx-auto");
            
        }
    }


  return (
    <div>
        <div className="dashboard flex">

            <div id='left-side' className="hidden left-side md:flex flex-col default-width-left bg-[#F1F2F7] h-[100vh] ">

                <div className="logo flex justify-center items-center my-4">
                    <div className='bg-[#5A67BA] flex justify-center items-center w-[50px] h-[50px] rounded-full mx-2'><span className='text-white text-xl font-semibold mochiy-pop-p-one-regular'>G</span></div>
                    <h1 id='logo-text' className='text-[#5A67BA] text-2xl font-semibold mochiy-pop-p-one-regular'>GOODSHOP</h1>
                </div>

                <div className="menu">
                    <ul>
                        <li onClick={()=>setActive("dashboard")} className={`flex list_item ml-[38px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'dashboard' ? 'bg-[#C7CEFF]' : ''} ${active === 'dashboard' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <FaFirstOrder className='text-3xl'/>
                            <h1 className='text-xl pl-4 roboto-light icon-text'>Dashboard</h1>
                        </li>
                        
                        
                        
                        
                    </ul>
                </div>

            </div>

            <div id='right-side' className="right-side w-[100vw] default-width-right h-[100vh]">

                <div className="top w[78vw] h-[6vh] md:h-[10vh] flex items-center justify-evenly">
                <h1 className='text-black text-2xl mochiy-pop-p-one-regular hidden lg:block'>Dashboard</h1>

                <div className='hidden md:flex md:justify-center items-center bg-[#F0EDFF] w-[95vw] md:w-[50vw] h-[4vh] md:h-[6.6vh] px-1 rounded-3xl my-3'>
                        <RxHamburgerMenu onClick={slideHandler} className='text-2xl cursor-pointer mx-2'/>
                        <input className='w-[85vw] md:w-[45vw] bg-[#F0EDFF] my-2 px-4 py-2 outline-none roboto-light h-[3vh] md:h-[6.6vh]' type="text" name="name" placeholder='Search' />
                </div>

                <div className='md:hidden flex md:justify-center items-center bg-[#F0EDFF] w-[95vw] md:w-[50vw] h-[4vh] md:h-[6.6vh] px-1 rounded-3xl my-3'>
                        <RxHamburgerMenu onClick={""} className='text-2xl cursor-pointer mx-2'/>
                        <input className='w-[85vw] md:w-[45vw] bg-[#F0EDFF] my-2 px-4 py-2 outline-none roboto-light h-[3vh] md:h-[6.6vh]' type="text" name="name" placeholder='Search' />
                </div>
                <div className='hidden md:flex md:justify-evenly items-center bg-[#F0EDFF] w-[10vw] h-[6.6vh] px-1 rounded-2xl my-3'>
                        <img className='h-[20px]' src={ Frame } alt="" />
                        <h1>Mudassir</h1>
                        <FaAngleDown/>
                </div>

                </div>

                <hr />
            </div>

        </div>
    </div>
  )
}

export default Dashboard