import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Link from 'next/link'
import { BiArrowBack } from "react-icons/bi";

import React from 'react'

const page = () => {
  return (
    <div className="max-w-[450px] mx-auto flex flex-col gap-20">
        <Link className='py-5 px-3 max-w-fit flex gap-1 items-center' href="/">
            <BiArrowBack className='text-[#000000] p-2 rounded-full w-[36px] h-[36px]' size={25}/>
            <p className="font-bold text-[15px]">Cart</p>
          </Link>

          <div className="flex flex-col gap-2 items-center">
            <PiShoppingCartSimpleFill
            //   size={30}
              className="text-[#60D669]  p-4 bg-[#EFFBF0] rounded-full w-[200px] mx-auto h-[200px]"/>
              <p className="text-[#062C0C] font-medium text-[15px]">Your cart is empty!</p>
          </div>

          <Link href="/" className='py-5 px-3 cursor-pointer'>
        <div className='bg-[#60D669] flex justify-center gap-5 items-center rounded-[8px] px-5 bg-opacity-25 py-4'>
            <p className='text-[15px] text-[#062C0C]  font-medium'>Start Ordering</p>
        </div>
        </Link>

    </div>
  )
}

export default page