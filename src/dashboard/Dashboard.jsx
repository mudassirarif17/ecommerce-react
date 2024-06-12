import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { FaFirstOrder } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboardCustomize } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../App.css";
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";


const Dashboard = ({children}) => {

    const [active, setActive] = useState("dashboard");

    const slideHandler = () => {
        if (document.getElementById("right-side").classList.contains('default-width-right')) {
            document.getElementById("right-side").classList.add('add-width-right');
            document.getElementById("right-side-child").classList.add('add-width-right');
            document.getElementById("right-side-child-2").classList.add('add-width-right');
            document.getElementById("left-side").classList.add('add-width-left');
            document.getElementById("right-side").classList.remove('default-width-right');
            document.getElementById("right-side-child").classList.remove('default-width-right');
            document.getElementById("right-side-child-2").classList.remove('default-width-right');
            document.getElementById("left-side").classList.remove('default-width-left');
            document.getElementById("logo-text").style.display = "none";
            for (let i = 0; i < 6; i++) {
                document.getElementsByClassName('icon-text')[i].style.display = "none";
                document.getElementsByClassName('list_item')[i].classList.remove("ml-[22px]");
                document.getElementsByClassName('list_item')[i].classList.add("flex");
                document.getElementsByClassName('list_item')[i].classList.add("justify-center");
                document.getElementsByClassName('list_item')[i].classList.add("w-12");
                document.getElementsByClassName('list_item')[i].classList.add("mx-auto");
            }
        }
        else {
            document.getElementById("right-side").classList.remove('add-width-right');
            document.getElementById("right-side-child").classList.remove('add-width-right');
            document.getElementById("right-side-child").classList.remove('add-width-right-2');
            document.getElementById("left-side").classList.remove('add-width-left');
            document.getElementById("right-side").classList.add('default-width-right');
            document.getElementById("right-side-child").classList.add('default-width-right');
            document.getElementById("right-side-child-2").classList.add('default-width-right');
            document.getElementById("left-side").classList.add('default-width-left');
            document.getElementById("logo-text").style.display = "block";
            for (let i = 0; i < 6; i++) {
                document.getElementsByClassName('icon-text')[i].style.display = "block";
                document.getElementsByClassName('list_item')[i].classList.add("ml-[22px]");
                document.getElementsByClassName('list_item')[i].classList.remove("justify-center");
                document.getElementsByClassName('list_item')[i].classList.remove("w-12");
                document.getElementsByClassName('list_item')[i].classList.remove("mx-auto");
            }
        }
    }

    const mobileSlider = () => {
        if (document.getElementById("mobile-slider").classList.contains("mbl-click-remove")) {
            document.getElementById("mobile-slider").classList.remove('mbl-click-remove');
            document.getElementById("mobile-slider").classList.add('mbl-click-add');
        }
        else {
            document.getElementById("mobile-slider").classList.add('mbl-click-remove');
            document.getElementById("mobile-slider").classList.remove('mbl-click-add');
        }
    }



    return (
        <div>
            <div className="dashboard flex ">

                <div id='left-side' className="hidden left-side md:flex flex-col default-width-left bg-[#F1F2F7] h-[100vh] ">

                    <div className="logo flex justify-center items-center my-4 cursor-pointer">
                        <div className='bg-[#5A67BA] flex justify-center items-center md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[50px] rounded-full mx-2'><span className='text-white md:text-md lg:text-xl font-semibold mochiy-pop-p-one-regular'>G</span></div>
                        <h1 id='logo-text' className='text-[#5A67BA] md:text-lg lg:text-2xl font-semibold mochiy-pop-p-one-regular'>GOODSHOP</h1>
                    </div>

                    <div className="menu">
                        <ul>
                            <Link to="/dashboard" onClick={() => setActive("dashboard")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'dashboard' ? 'bg-[#C7CEFF]' : ''} ${active === 'dashboard' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                            >
                                < MdDashboardCustomize className='text-xl md:text-3xl' />
                                <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Dashboard</h1>
                            </Link>

                            <Link to="/all_users" onClick={() => setActive("alluser")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'alluser' ? 'bg-[#C7CEFF]' : ''} ${active === 'alluser' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                            >
                                <FaUserCircle className='text-xl md:text-3xl' />
                                <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>All User</h1>
                            </Link>

                            <Link to="/all_products" onClick={() => setActive("allproduct")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allproduct' ? 'bg-[#C7CEFF]' : ''} ${active === 'allproduct' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                            >
                                <RiProductHuntLine className='text-xl md:text-3xl' />
                                <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>All Products</h1>
                            </Link>

                            <Link to="/add_product" onClick={() => setActive("addproduct")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'addproduct' ? 'bg-[#C7CEFF]' : ''} ${active === 'addproduct' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                            >
                                <MdOutlineProductionQuantityLimits className='text-xl md:text-3xl' />
                                <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Add Product</h1>
                            </Link>

                            <Link to="/all_orders" onClick={() => setActive("allorders")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allorders' ? 'bg-[#C7CEFF]' : ''} ${active === 'allorders' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                            >
                                <FaFirstOrder className='text-xl md:text-3xl' />
                                <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>All Orders</h1>
                            </Link>

                            <Link to="/login" onClick={() => setActive("allorders")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allorders' ? 'bg-[#C7CEFF]' : ''} ${active === 'allorders' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <IoMdLogOut className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Logout</h1>
                        </Link>


                        </ul>
                    </div>

                </div>

                <div id='right-side' className="right-side w-[100vw] default-width-right h-[100vh]">

                    <div id='right-side-child' className="top h-[8vh] md:h-[10vh] default-width-right flex justify-center items-center">
                        
                        <div className='search h-[70%] md:h-[80%] w-[90%] bg-[#F0EDFF] rounded-3xl flex justify-around items-center'>

                            <div className='menu-btn'>
                                <RxHamburgerMenu onClick={slideHandler} className='hidden md:block text-2xl cursor-pointer' />
                            </div>

                            <div className='menu-btn'>
                                <RxHamburgerMenu onClick={mobileSlider} className='block md:hidden text-2xl cursor-pointer' />
                            </div>

                            <div className='search-box'>
                                <input className='w-[50vw] px-4 py-2 bg-[#F0EDFF] outline-none ' type="text" placeholder='Search here' />
                            </div>
                            <div className='profile'>
                                <div className='bg-[#5A67BA] flex justify-center items-center w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full mx-2 cursor-pointer'><span className='text-white text-sm font-semibold md:text-md lg:text-xl md:font-semibold mochiy-pop-p-one-regular'>G</span></div>
                            </div>
                        </div>
                    </div>

                    {/* <AllUser/> */}
                    <div id='right-side-child-2' className='default-width-right flex flex-col justify-center items-center'>
                        {children}
                    </div>
                    
                </div>
            </div>

             {/* Mobile Menu */}
            <div id='mobile-slider' className='overflow-x-hidden block md:hidden mbl-click-remove mbl-menu bg-[#F1F2F7] h-[100vh] w-[88vw]'>

                <div className="logo flex justify-around items-center my-4">
                    <h1 id='logo-text' className='text-[#5A67BA] flex items-center md:text-lg lg:text-2xl font-semibold mochiy-pop-p-one-regular'><div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><span className='text-white text-md  mochiy-pop-p-one-regular'>G</span>
                    </div>GOODSHOP</h1>
                    <div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><IoIosCloseCircleOutline onClick={mobileSlider} className='text-white text-md  mochiy-pop-p-one-regular text-3xl' /></div>
                </div>

                <div className="menu">
                    <ul>
                        <Link to="/dashboard" onClick={() => setActive("dashboard")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'dashboard' ? 'bg-[#C7CEFF]' : ''} ${active === 'dashboard' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            < MdDashboardCustomize className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Dashboard</h1>
                        </Link>

                        <Link to="/all_users" onClick={() => setActive("alluser")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'alluser' ? 'bg-[#C7CEFF]' : ''} ${active === 'alluser' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <FaUserCircle className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>All User</h1>
                        </Link>

                        <Link to="/all_products" onClick={() => setActive("allproduct")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allproduct' ? 'bg-[#C7CEFF]' : ''} ${active === 'allproduct' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <RiProductHuntLine className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>All Products</h1>
                        </Link>

                        <Link to="/add_product" onClick={() => setActive("addproduct")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'addproduct' ? 'bg-[#C7CEFF]' : ''} ${active === 'addproduct' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <MdOutlineProductionQuantityLimits className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Add Product</h1>
                        </Link>

                        <Link to="/all_orders" onClick={() => setActive("allorders")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allorders' ? 'bg-[#C7CEFF]' : ''} ${active === 'allorders' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <FaFirstOrder className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>All Orders</h1>
                        </Link>

                        <Link to="/login" onClick={() => setActive("allorders")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allorders' ? 'bg-[#C7CEFF]' : ''} ${active === 'allorders' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <IoMdLogOut className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Logout</h1>
                        </Link>


                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Dashboard