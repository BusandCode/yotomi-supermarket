import React from 'react'
import Link from 'next/link';
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='max-w-[450px] w-full mx-auto'>
    <div className='text-[16px] bg-[#60D669] bg-opacity-25  h-[136px]  flex justify-between items-center  mt-32  rounded-tl-[30px] rounded-tr-[30px] p-5 text-[#062C0C]'>
        <p  className='flex items-center justify-center gap-1'><FaRegCopyright size={17}/> 2025, Yotomi</p>
        <div className='flex gap-5 items-center'>
        <Link href="/pages/contact">Contact Us</Link>
        <Link href="/pages/about">About Us</Link>
    </div>
    </div>
    </div>
  )
}

export default Footer