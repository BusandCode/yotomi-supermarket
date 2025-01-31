'use client'
import { useState } from 'react';
import React from 'react'
import Link from 'next/link';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [showMenu,setShowMenu] = useState(false);
    const [changeIcon,setChangeIcon] = useState(true);
  return (
    <div className='relative max-w-[450px] mx-auto mb-10'>
        <div className='flex justify-between items-center bg-[#DAF6DC] px-5 py-3'>
      <h1 className='text-[30px] font-bold'><i>Yoto<span className='text-[#60D669]'>mi</span></i></h1>
      <div className='flex items-center gap-5 text-[#60D669]'>
        <Link href="/food/cart">
        <HiOutlineShoppingCart className='cursor-pointer' size={25}/>
        
        </Link>

        {changeIcon ? <FaBars className='text-[#062C0C] cursor-pointer' size={25} onClick={()=>{
          setShowMenu(true);
          setChangeIcon(false);
        }}/> : <FaTimes className='text-[#062C0C] cursor-pointer' size={25}
        onClick={()=>{
         setShowMenu(false);
         setChangeIcon(true);
        }}
        /> }
        
      
        {/* <FaUser  className='bg-[#60D669] cursor-pointer bg-opacity-40 w-[36px] h-[36px] p-2 rounded-full' size={25}/> */}
      </div>
    </div>
    {/* Menu */}
    {showMenu && 
     <nav
    className='bg-[#DAF6DC] flex flex-col items-start gap-2 w-3/4 min-h-screen transform translate-x-0 rounded-sm absolute z-[999] right-0 top-[70px]'>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Order History</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
     }}
     className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Track Order</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>FAQ</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Contact Us</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>About Us</Link>
   </nav>
    }
    
    </div>
  )
}

export default NavBar