import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="footer-top md:h-[50vh] flex">

          <div className="left-sec my-12 md:mt-0 w-[100vw] md:w-[35vw] flex flex-col justify-center items-center md:h-[50vh]">

            <div className="logo cursor-pointer">
              <h1 id='logo-text' className='text-[#5A67BA] flex items-center md:text-lg lg:text-2xl font-semibold mochiy-pop-p-one-regular'><div className='bg-[#5A67BA] flex justify-center items-center w-[40px] h-[40px] rounded-full mx-2'><span className='text-white text-md  mochiy-pop-p-one-regular'>G</span>
              </div>GOODSHOP</h1>
            </div>
            <p className='text-gray-500 my-2 text-center'>Air plant banjo lyft occupy <br />
              retro adaptogen indego</p>

          </div>

          <div className="right-sec w-[65vw] h-[50vh] hidden md:flex flex-col justify-center">

            <div class="grid grid-cols-4 gap-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <div className='my-2'>Home</div>
              <div className='my-2'>Tshirts</div>
              <div className='my-2'>Mugs</div>
              <div className='my-2'>Stickers</div>
            </div>

            <div class="grid grid-cols-4 gap-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <div className='my-2'>Home</div>
              <div className='my-2'>Tshirts</div>
              <div className='my-2'>Mugs</div>
              <div className='my-2'>Stickers</div>
            </div>

            <div class="grid grid-cols-4 gap-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <div className='my-2'>Home</div>
              <div className='my-2'>Tshirts</div>
              <div className='my-2'>Mugs</div>
              <div className='my-2'>Stickers</div>
            </div>

            <div class="grid grid-cols-4 gap-4 text-gray-500 hover:text-gray-700 cursor-pointer">
              <div className='my-2'>Home</div>
              <div className='my-2'>Tshirts</div>
              <div className='my-2'>Mugs</div>
              <div className='my-2'>Stickers</div>
            </div>
          </div>


        </div>
        <div className="footer-bottom h-[9vh] md:h-[12vh] bg-gray-300 flex flex-col md:flex-row justify-around items-center">
            <div className="left ">
              <p>© 2024 GOODSHOP — @fashion</p>
            </div>
            <div className="right flex space-x-3">
              <FaFacebook className='text-2xl cursor-pointer'/>
              <FaInstagram className='text-2xl cursor-pointer'/>
              <FaLinkedin className='text-2xl cursor-pointer'/>
              <FaSquareXTwitter className='text-2xl cursor-pointer'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer