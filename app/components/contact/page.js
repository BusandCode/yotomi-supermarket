"use client"
import {React,useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const page = () => {

    const [showMenu,setShowMenu] = useState(false);
    const [changeIcon,setChangeIcon] = useState(true);


  return (
    <div className='text-[#60D669] max-w-[450px] relative mx-auto h-full flex flex-col gap-5 
    justify-center items-start'>

<div className='max-w-[450px] w-full flex justify-between items-center bg-[#DAF6DC] px-5 py-3'>
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


      <Link className='py-5 px-3 max-w-fit' href="/">
            <BiArrowBack className='text-[#000000] bg-[#60D669] bg-opacity-40 p-2 rounded-full w-[36px] h-[36px]' size={25}/>
          </Link>

      <div className='flex max-w-[400px] mt-20  mx-auto justify-center items-center gap-8 w-full flex-col shadow-[#0000001a] shadow-lg  bg-[white] h-[300px] rounded-[10px] p-5'>
          <h1 className='font-bold text-[18px]' >Contact Us</h1>
        <a href="tel:0702-696-8188" className='flex flex-col justify-center gap-5 items-center'>
            <img src="/phone.png" alt="Phone" width={30} height={30}/>
        <span>0702 - 696 - 8188</span>
        </a>

        <a href="https://wa.me/2348038701309" className='flex flex-col justify-center gap-5 items-center mb-5'>
                  <img src="/whatsapp.png" alt="WhatsApp" width={45} height={45}/>
        <span>0803 - 870 - 1309</span>
        </a>
      </div>

    </div>
  )
}

export default page