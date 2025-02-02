import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link'

const page = () => {
  return (
    <div className='text-[#60D669] max-w-[450px] p-3 relative mx-auto h-full flex flex-col gap-5 
    justify-center items-start mt-20'>
      <Link className='py-5 px-3 max-w-fit' href="/">
            <BiArrowBack className='text-[#000000] bg-[#60D669] bg-opacity-40 p-2 rounded-full w-[36px] h-[36px]' size={25}/>
          </Link>

      <div className='flex max-w-[400px] mx-auto justify-center items-center gap-8 w-full flex-col shadow-[#0000001a] shadow-lg  bg-[white] h-[300px] rounded-[10px] p-5'>
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