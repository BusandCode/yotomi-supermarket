'use client'
import React, { useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { MdNavigateNext } from "react-icons/md";

import Link from 'next/link';
import Draggable from './Draggable';

const page = () => {

  const [showMenu,setShowMenu] = useState(false);
  const [changeIcon,setChangeIcon] = useState(true);

  return (
    <main className=' max-w-[450px] relative mx-auto flex flex-col  gap-5 h-full'>
      <section className=' flex flex-col gap-10'>
        {/* Header */}
        <div className='flex justify-between items-center bg-[#DAF6DC] px-5 py-3'>
      <h1 className='text-[30px] font-bold'><i>Yoto<span className='text-[#60D669]'>mi</span></i></h1>
      <div className='flex items-center gap-5 text-[#60D669]'>
        <Link href="/components/cart" onClick={() => window.location.href = '/components/cart'} className='relative'>
        <HiOutlineShoppingCart className='cursor-pointer' size={45} />
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
  
      </div>
    </div>

    {/* Menu */}

    {showMenu && 
     <nav
    className='bg-[#DAF6DC] flex flex-col items-start gap-2 w-3/4 min-h-screen transform translate-x-0 rounded-sm absolute z-[999] right-0 top-[70px]'>
     <Link href="/components/order-history" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Order History</Link>
     <Link href="/components/FAQ" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>FAQ</Link>
     <Link href="/components/contact" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Contact Us</Link>
     <Link href="/components/about" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>About Us</Link>
   </nav>
    }

    {/* Hero */}
    <div className='flex items-start justify-start px-5'>
        <h1 className='text-[#062C0C] text-[36px] font-semibold max-w-[300px] '>What are you<i className='text-[#1FAF38]'> ordering </i>from us today?</h1>
      </div>
      </section>

      <Draggable />

      {/* Items-List */}
    <div className='flex flex-col items-center gap-3 p-3'>
      <Link href="/components/egusi" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Egusi Soup</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <Link href="/components/efo" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Efo Soup</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <Link href="/components/stew" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Red Stew Soup</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <Link href="/components/gbegiri-ewedu" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669] '>
        <button className='text-[17px] font-medium text-[#062C0C]'>Gbegiri & Ewedu Soup</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
    </div>
    </main>
  )
}

export default page

// #60D669