import React from 'react'
import Frame from "../assets/Frame.png";
import Frame1 from "../assets/Frame1.png";
import Logo from "../assets/Logo.png";
import Brand from "../assets/brand.png";

const Signup = () => {
    return (
        <>
            <div className="login-scr flex">

                <div className='left-side h-[100vh] w-[100vw] md:w-[50vw] flex flex-col justify-center items-center'>
                    <img className='h-[50px]' src={ Logo } alt="" />
                    <h1 className='text-center text-3xl font-bold'>SIGNUP</h1>
                    <p className='text-center text-gray-700 my-3 font-semibold'>How to i get started lorem ipsum dolor at?</p>

                    <div className='flex md:justify-center items-center bg-[#F0EDFF] w-[80vw] md:w-[28vw] h-[6.6vh] px-1 rounded-lg my-3'>
                        <img className='h-[20px]' src={ Frame } alt="" />
                        <input className='w-[28vw] bg-[#F0EDFF] my-2 px-2 py-2 outline-none' type="text" name="name" placeholder='Username' />
                    </div>

                    <div className='flex md:justify-center items-center bg-[#F0EDFF] w-[80vw] md:w-[28vw] h-[6.6vh] px-1 rounded-lg my-3'>
                        <img className='h-[20px]' src={ Frame } alt="" />
                        <input className='w-[28vw] bg-[#F0EDFF] my-2 px-2 py-2 outline-none' type="email" name="email" placeholder='Email' />
                    </div>

                    <div className='flex md:justify-center items-center bg-[#F0EDFF] w-[80vw] md:w-[28vw] h-[6.6vh] px-1 rounded-lg my-3'>
                        <img className='h-[20px]' src={ Frame } alt="" />
                        <input className='w-[28vw] bg-[#F0EDFF] my-2 px-2 py-2 outline-none' type="file" name="image" />
                    </div>

                    <div className='flex md:justify-center items-center bg-[#F0EDFF] w-[80vw] md:w-[28vw] h-[6.6vh] px-1 rounded-lg my-3'>
                        <img className='h-[20px]' src={ Frame1 } alt="" />
                        <input className='w-[50vw] md:w-[28vw] bg-[#F0EDFF] my-2 px-2 py-2 outline-none' type="text" name="name" placeholder='Password' />
                    </div>

                    <div className='my-4'>
                        <button className='px-4 rounded-lg py-2 bg-gradient-to-r from-[#9181F4] to-[#5038ED] text-white font-bold hover:bg[#5038ED]'>Signup Now</button>
                    </div>

                    <div>
                        <a className='font-bold hover:underline' href="">Already Have An Account</a>
                    </div>
                </div>

                <div className='custom-before hidden md:flex items-center justify-center right-side h-[100vh] w-[50vw]'>
                    <div className="box z-50 flex w-[22vw] h-[60vh] border border-white rounded-3xl bg-white bg-opacity-30 ">
                        <p className='text-2xl font-semibold px-6 py-6 text-white'>Very good <br />
                            works are <br />
                            waiting for <br />
                            you Login <br />
                            Now!!!</p>
                        <img className='fixed right-[100px] top-[151px] w-[40vw] h-[55vh]' src={ Brand } alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup