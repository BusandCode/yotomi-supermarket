import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link';

const page = () => {
  return (
    <div className='max-w-[450px] p-3 relative mx-auto h-full flex flex-col gap-5 justify-center items-start mt-20'>

        <Link className='py-5 px-3 max-w-fit' href="/">
            <BiArrowBack className='text-[#000000] bg-[#60D669] bg-opacity-40 p-2 rounded-full w-[36px] h-[36px]' size={25}/>
          </Link>
          <div className='shadow-[#0000001a] shadow-lg  bg-[white] h-[250px] rounded-[10px] p-5'>
        <h1 className='text-[#60D669] text-center  bg-white mb-10 font-bold text-[18px]'>About Us</h1>
        <p>Yotomi is an order based SOUP only restaurant, covering FUTA and environs.</p>
        <p>Deliveries are made on Sundays and Wednesdays only.</p>
        </div>
    </div>
  )
}

export default page