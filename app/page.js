'use client'
import React, { useState } from 'react'
// import { FaUser } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

import Link from 'next/link';
import Draggable from './Draggable';

const page = () => {

  return (
    <main className=' max-w-[450px] relative mx-auto flex flex-col  gap-5 h-full'>
      <section className=' flex flex-col gap-10'>

    {/* Hero */}
    <div className='flex items-start justify-start px-5'>
        <h1 className='text-[#062C0C] text-[36px] font-semibold max-w-[300px] '>What are you<i className='text-[#1FAF38]'> ordering </i>from us today?</h1>
      </div>
      </section>

      <Draggable />

      {/* Items-List */}
    <div className='flex flex-col items-center gap-3 p-3'>
      <Link href="/food/egusi" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Egusi</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <Link href="/food/efo" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Efo</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <Link href="/food/stew" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669]'>
        <button className='text-[17px] font-medium text-[#062C0C]'>Red Stew</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
      <Link href="/food/gbegiri-ewedu" className='flex items-center justify-between transform hover:translate-x-1 cursor-pointer bg-[#DAF6DC] rounded-[8px] h-[60px] w-full p-8 hover:bg-[#60D669] '>
        <button className='text-[17px] font-medium text-[#062C0C]'>Gbegiri & Ewedu</button>
        <MdNavigateNext className='bg-[#E2F8E3] text-[#14AE5C] w-[24px] h-[24px] rounded-full' size={200}/>
      </Link>
    </div>
    </main>
  )
}

export default page

// #60D669