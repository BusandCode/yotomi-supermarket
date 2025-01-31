import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    <div className='text-[16px] bg-[#60D669] bg-opacity-25 max-w-[450px] mx-auto w-full h-[136px]  flex justify-between items-center  mt-32  rounded-tl-[30px] rounded-tr-[30px] p-5 text-[#062C0C]'>
        <p  className='flex items-center justify-center gap-1'><FaRegCopyright size={17}/> 2025, Yotomi</p>
        <div className='flex gap-5 items-center'>
        <a href="">Contact Us</a>
        <a href="">About Us</a>
    </div>
    </div>
    </div>
  )
}

export default Footer