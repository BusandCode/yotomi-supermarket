import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { BiArrowBack } from "react-icons/bi";

const page = () => {
  return (
    <main className='max-w-[450px]  mx-auto flex flex-col  gap-5 h-full'>
        <div className='flex justify-between items-center py-5 px-3'>
            <h1 className='text-[25px] font-bold'><i>Yoto<span className='text-[#60D669]'>mi</span></i></h1>
            <div className='flex items-center gap-5 text-[#60D669]'>
              <HiOutlineShoppingCart className='cursor-pointer' size={25}/>
              <FaUser  className='bg-[#60D669] cursor-pointer bg-opacity-40 w-[36px] h-[36px] p-2 rounded-full' size={25}/>
            </div>
          </div>
          <div className='py-5 px-3'>
            <BiArrowBack className='text-[#000000]'/>
          </div>


          <div className='flex items-center justify-between'>
            {/* Description */}
            <div className='flex flex-col items-start gap-3 py-5 px-3'>
              <h1 className='text-[#000000] font-semibold text-[15px]'>Egusi Soup</h1>
              <p className='text-[11px]'>1 Pack + 2 Meat Pieces</p>
              <div className='flex items-center gap-3'>
                <h2 className='text-[#1FAF38] text-[15px]'>N2000</h2>
                <button className='bg-[#60D669] text-[#FFFFFF] px-[8px] text-[10px] py-[4px] rounded-[4px]'>Add to cart</button>
              </div>
            </div>

            {/* Image */}
            <div>
            <img src="/egusi.jpg" alt="Egusi" width={200} height={200} className='w-[132px] h-[142px] bg-no-repeat rounded-[8px]'/>
            </div>
          </div>
    </main>
  )
}

export default page