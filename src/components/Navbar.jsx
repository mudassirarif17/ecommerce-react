import React, { useState } from 'react'
import { FaWindows } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { IoShirt } from "react-icons/io5";
import { GiHoodie } from "react-icons/gi";
import { FaMugSaucer } from "react-icons/fa6";
import { LuSticker } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import "../App.css";


const Navbar = () => {
    const [active, setActive] = useState("home");

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

    const CartSlider = () => {
        if (document.getElementById("cart-slider").classList.contains("cart-click-remove")) {
            document.getElementById("cart-slider").classList.remove('cart-click-remove');
            document.getElementById("cart-slider").classList.add('cart-click-add');
        }
        else {
            document.getElementById("cart-slider").classList.add('cart-click-remove');
            document.getElementById("cart-slider").classList.remove('cart-click-add');
        }
    }

    return (
        <div className='sticky top-0'>
            <div className="bg-white navbar cursor-pointer h-[8vh] md:h-[12vh] w-[100vw] shadow-xl flex justify-evenly items-center">
                <div className="menu-icon block md:hidden">
                    <FaWindows onClick={mobileSlider} className='text-[#5A67BA] text-3xl' />
                </div>

                <div className="logo">
                    <h1 id='logo-text' className='text-[#5A67BA] flex items-center md:text-lg lg:text-2xl font-semibold mochiy-pop-p-one-regular'><div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><span className='text-white text-md  mochiy-pop-p-one-regular'>G</span>
                    </div>GOODSHOP</h1>
                </div>

                <ul className="nav-items md:flex space-x-6 cursor-pointer text-[#5A67BA] font-semibold text-xl hidden">
                    <Link className='hover:border-b border-[#5A67BA]' to="/">Home</Link>
                    <Link className='hover:border-b border-[#5A67BA]' to="/tshirts">Tshirts</Link>
                    <Link className='hover:border-b border-[#5A67BA]' to="/hoodies">Hoodies</Link>
                    <Link className='hover:border-b border-[#5A67BA]' to="/stickers">Sticker</Link>
                    <Link className='hover:border-b border-[#5A67BA]' to="/mugs">Mugs</Link>
                </ul>

                <div className='flex items-center gap-2'>
                    <div className='hidden md:block'>
                        <button className='bg-[#5A67BA] text-white px-4 py-1 rounded-lg font-medium active:bg-[#5A45BA] mr-1'>Signin</button>
                    </div>
                    <div className='relative' onClick={CartSlider}>
                        <FaShoppingCart className='text-[#5A67BA] text-3xl cursor-pointer' />
                        <div className='bg-red-600 w-[20px] h-[20px] text-white rounded-full flex justify-center items-center absolute -top-2 -right-2'>2</div>
                    </div>
                </div>
            </div>

            <div id='mobile-slider' className="block md:hidden mbl-menu h-[100vh] mbl-click-remove w-[88vw] bg-[#F1F2F7]">
                <div className="logo flex justify-around items-center my-4">
                    <h1 id='logo-text' className='text-[#5A67BA] flex items-center md:text-lg lg:text-2xl font-semibold mochiy-pop-p-one-regular'><div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><span className='text-white text-md  mochiy-pop-p-one-regular'>G</span>
                    </div>GOODSHOP</h1>
                    <div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><IoIosCloseCircleOutline onClick={mobileSlider} className='text-white text-md  mochiy-pop-p-one-regular text-3xl' /></div>
                </div>

                <div className="menu">
                    <ul>
                        <Link to="/" onClick={() => setActive("home")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'home' ? 'bg-[#C7CEFF]' : ''} ${active === 'home' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            < FaWindows className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Home</h1>
                        </Link>

                        <Link to="/tshirts" onClick={() => setActive("tshirt")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'tshirt' ? 'bg-[#C7CEFF]' : ''} ${active === 'tshirt' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <IoShirt className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Tshirts</h1>
                        </Link>

                        <Link to="/hoodies" onClick={() => setActive("hoodies")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'hoodies' ? 'bg-[#C7CEFF]' : ''} ${active === 'hoodies' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <GiHoodie className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Hoodies</h1>
                        </Link>

                        <Link to="/mugs" onClick={() => setActive("mugs")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'mugs' ? 'bg-[#C7CEFF]' : ''} ${active === 'mugs' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <FaMugSaucer className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Mugs</h1>
                        </Link>

                        <Link to="/stickers" onClick={() => setActive("stickers")} className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'stickers' ? 'bg-[#C7CEFF]' : ''} ${active === 'stickers' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <LuSticker className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Stickers</h1>
                        </Link>

                        <Link to="/login" className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allorders' ? 'bg-[#C7CEFF]' : ''} ${active === 'allorders' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <IoIosLogOut className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Login</h1>
                        </Link>

                        <Link to="/login" className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allorders' ? 'bg-[#C7CEFF]' : ''} ${active === 'allorders' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <IoIosLogOut className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Register</h1>
                        </Link>

                        <Link to="/login" className={`flex list_item ml-[22px] my-5 hover:bg-[#5A67BA] cursor-pointer hover:text-[#C7CEFF] rounded-lg px-3 py-2 ${active === 'allorders' ? 'bg-[#C7CEFF]' : ''} ${active === 'allorders' ? 'text-[#5A67BA]' : 'text-[#5A67BA]'}`}
                        >
                            <IoIosLogOut className='text-xl md:text-3xl' />
                            <h1 className='md:text-md lg:text-xl pl-4 roboto-light icon-text'>Logout</h1>
                        </Link>


                    </ul>
                </div>
            </div>

            <div id='cart-slider' className="cart cart-click-remove h-[100vh] w-[88vw] md:w-[25vw] bg-[#F1F2F7]">
                <div className="logo flex justify-around items-center my-4">

                    <h1 id='logo-text' className='text-[#5A67BA] flex items-center md:text-lg lg:text-2xl font-semibold mochiy-pop-p-one-regular'><div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><span className='text-white text-md  mochiy-pop-p-one-regular'>G</span>
                    </div>GOODSHOP</h1>
                    <div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><IoIosCloseCircleOutline onClick={CartSlider} className='text-white text-md  mochiy-pop-p-one-regular text-3xl cursor-pointer' /></div>
                </div>

                <ol>
                    <li className='my-1 flex justify-evenly'><span>Item-1 - Rs # 3000</span> <div className='flex'><div className='text-white text-xl font-semibold h-[25px] w-[25px] rounded-full bg-[#5A67BA] mx-2 flex justify-center items-center'>+</div><span className='qty'>2</span><div className='text-white text-xl font-semibold h-[25px] w-[25px] rounded-full bg-[#5A67BA] mx-2 flex justify-center items-center'>-</div></div></li>

                    <li className='my-1 flex justify-evenly'><span>Item-1 - Rs # 3000</span> <div className='flex'><div className='text-white text-xl font-semibold h-[25px] w-[25px] rounded-full bg-[#5A67BA] mx-2 flex justify-center items-center'>+</div><span className='qty'>2</span><div className='text-white text-xl font-semibold h-[25px] w-[25px] rounded-full bg-[#5A67BA] mx-2 flex justify-center items-center'>-</div></div></li>
                    
                </ol>
                <p className='ml-10'>Total Rs 3000</p>
            </div>

        </div>
    )
}

export default Navbar