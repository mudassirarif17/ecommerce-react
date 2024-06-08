import React from 'react';
import RightSide from "../assets/rightside.png";
import Frame from "../assets/Frame.png";
import Frame1 from "../assets/Frame1.png";
import Logo from "../assets/logo.png";

const Login = () => {
    return (
        <>
            <div className="login-scr flex">

                <div className='left-side h-[100vh] w-[100vw] md:w-[50vw] flex flex-col justify-center items-center'>
                    <img className='h-[50px]' src={Logo} alt="" />
                    <h1 className='text-center text-3xl font-bold'>LOGIN</h1>
                    <p className='text-center text-gray-700 my-3 font-semibold'>How to i get started lorem ipsum dolor at?</p>
                    <div className='flex md:justify-center items-center bg-[#F0EDFF] w-[80vw] md:w-[28vw] h-[6.6vh] px-1 rounded-lg my-3'>
                        <img className='h-[20px]' src={Frame} alt="" />
                        <input className='w-[28vw] bg-[#F0EDFF] my-2 px-2 py-2 outline-none' type="text" name="name" placeholder='Username' />
                    </div>
                    <div className='flex md:justify-center items-center bg-[#F0EDFF] w-[80vw] md:w-[28vw] h-[6.6vh] px-1 rounded-lg my-3'>
                        <img className='h-[20px]' src={Frame1} alt="" />
                        <input className='w-[50vw] md:w-[28vw] bg-[#F0EDFF] my-2 px-2 py-2 outline-none' type="text" name="name" placeholder='Password' />
                    </div>
                    <div className='my-4'>
                        <button className='px-4 rounded-lg py-2 bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-white font-bold hover:bg[#5038ED]'>Login Now</button>
                    </div>
                    <div>
                        <a className='font-bold hover:underline' href="">Create Account</a>
                    </div>
                </div>

                <div className='hidden md:block right-side h-[100vh] w-[50vw]'>
                        <img className='h-[100vh] w-[50vw]' src={RightSide} alt="Right-side-bg" />
                        <div className='absolute top-0'>
                        <div className='flex'>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login