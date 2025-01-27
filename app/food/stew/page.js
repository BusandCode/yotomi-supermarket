import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa6";
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link';
import { FaCircleExclamation } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";


const page = () => {
  return (
    <main className='max-w-[450px]  mx-auto flex flex-col  gap-5 h-full'>
      {/* Header */}
   <div className='flex justify-between items-center'>
      <h1 className='text-[30px] font-bold'><i>Yoto<span className='text-[#60D669]'>mi</span></i></h1>
      <div className='flex items-center gap-5 text-[#60D669]'>
        <Link href="/food/cart">
        <HiOutlineShoppingCart className='cursor-pointer' size={25}/>
        </Link>
        <FaUser  className='bg-[#60D669] cursor-pointer bg-opacity-40 w-[36px] h-[36px] p-2 rounded-full' size={25}/>
      </div>
    </div>
          <Link className='py-5 px-3 max-w-fit' href="/">
            <BiArrowBack className='text-[#000000] bg-[#60D669] bg-opacity-40 p-2 rounded-full w-[36px] h-[36px]' size={25}/>
          </Link>

          <section>
          <div className='flex items-center justify-between py-5 px-3'>
            {/* Description */}
            <div className='flex flex-col items-start gap-5 '>
              <h1 className='text-[#000000] font-semibold text-[17px]'>Red Stew Soup</h1>
              <p className='text-[13px] font-normal'>1 Pack + 2 Meat Pieces</p>
              <div className='flex items-center gap-3'>
                <h2 className='text-[#1FAF38] text-[17px] font-normal'>N2000</h2>
                <button className='bg-[#60D669] text-[#FFFFFF] px-[8px] text-[12px] py-[4px] rounded-[4px]'>Add to cart</button>
              </div>
            </div>

            {/* Image */}
            <div>
            <img src="/stew.jpg" alt="Stew" width={100} height={100} className='w-[115px] h-[104px] bg-no-repeat rounded-[8px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between py-5 px-3'>
            {/* Description */}
            <div className='flex flex-col items-start gap-5 '>
              <h1 className='text-[#000000] font-semibold text-[17px]'>Red Stew Soup</h1>
              <p className='text-[13px] font-normal'>2 Packs + 2 Meat</p>
              <div className='flex items-center gap-3'>
                <h2 className='text-[#1FAF38] text-[17px] font-normal'>N7000</h2>
                <button className='bg-[#60D669] text-[#FFFFFF] px-[8px] text-[12px] py-[4px] rounded-[4px]'>Add to cart</button>
              </div>
            </div>

            {/* Image */}
            <div>
            <img src="/stew.jpg" alt="Stew" width={100} height={100} className='w-[115px] h-[104px] bg-no-repeat rounded-[8px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between py-5 px-3'>
            {/* Description */}
            <div className='flex flex-col items-start gap-5 '>
              <h1 className='text-[#000000] font-semibold text-[17px]'>Red Stew Soup</h1>
              <p className='text-[13px] font-normal'>3 Packs + 5 Meats + 1 Table Water</p>
              <div className='flex items-center gap-3'>
                <h2 className='text-[#1FAF38] text-[17px] font-normal'>N10,000</h2>
                <button className='bg-[#60D669] text-[#FFFFFF] px-[8px] text-[12px] py-[4px] rounded-[4px]'>Add to cart</button>
              </div>
            </div>

            {/* Image */}
            <div>
            <img src="/stew.jpg" alt="Stew" width={100} height={100} className='w-[115px] h-[104px] bg-no-repeat rounded-[8px]'/>
            </div>
          </div>
          </section>

          <section className='py-5 px-3'>
          <div className='bg-[#60D669] flex justify-start gap-5 items-center px-5 bg-opacity-25 py-4 rounded-[4px]'>
            <FaCircleExclamation className='text-[#60D669]' size={25}/>
            <p className='text-[13px]'>Delivery runs from 6:00PM - 7:00PM</p>
          </div>
          </section>

          {/* Footer */}
          <div className='text-[13px] bg-[#60D669] bg-opacity-25 max-w-[450px] w-full h-[136px]  flex justify-between items-center  mt-12  rounded-tl-[30px] rounded-tr-[30px] p-5 text-[#062C0C]'>
        <p  className='flex items-center justify-center gap-1'><FaRegCopyright size={17}/> 2025, Yotomi</p>
        <div className='flex gap-5 items-center'>
          <a href="">Contact Us</a>
          <a href="">About Us</a>
        </div>
    </div>
    </main>
  )
}

export default page