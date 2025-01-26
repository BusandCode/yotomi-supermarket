import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import Link from 'next/link';


const page = () => {
  return (
    <main className='max-w-[450px]  mx-auto flex flex-col  gap-5 h-full'>
      <section className=' py-5 px-3 bg-[#DAF6DC] flex flex-col gap-10 rounded-br-[160px] rounded-tl-[50px] '>
      {/* Header */}
    <div className='flex justify-between items-center'>
      <h1 className='text-[30px] font-bold'><i>Yoto<span className='text-[#60D669]'>mi</span></i></h1>
      <div className='flex items-center gap-5 text-[#60D669]'>
        <HiOutlineShoppingCart className='cursor-pointer' size={25}/>
        <FaUser  className='bg-[#60D669] cursor-pointer bg-opacity-40 w-[36px] h-[36px] p-2 rounded-full' size={25}/>
      </div>
    </div>

    {/* Hero */}
    <div className='flex items-start justify-start '>
        <h1 className='text-[#062C0C] text-[36px] font-semibold max-w-[300px] '>What are you<i className='text-[#1FAF38]'> ordering </i>from us today?</h1>
      </div>
      </section>

      {/* Items-List */}
    <div className='flex flex-col items-center gap-3 p-3'>
      <Link href="/food/egusi" className='flex items-center justify-between cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Egusi</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <Link href="/food/efo" className='flex items-center justify-between cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Efo</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <div className='flex items-center justify-between cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Red Stew</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </div>
      <div className='flex items-center justify-between cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669] '>
        <button className='text-[17px] font-medium text-[#062C0C]'>Gbegiri & Ewedu</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </div>
    </div>

    {/* Footer */}
    {/* Footer */}
    <div className='text-[13px] bg-[#60D669] bg-opacity-25 max-w-[450px] w-full h-[136px]  flex justify-between items-center  mt-12  rounded-tl-[30px] rounded-tr-[30px] p-5 text-[#062C0C]'>
        <p>&copy; 2025, Yotomi</p>
        <div className='flex gap-5 items-center'>
          <a href="">Contact Us</a>
          <a href="">About Us</a>
        </div>
    </div>
    </main>
  )
}

export default page

// #60D669