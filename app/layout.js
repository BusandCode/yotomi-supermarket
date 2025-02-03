import { Poppins } from 'next/font/google';
import "./globals.css";
import React from 'react'
import Link from 'next/link';
import { FaRegCopyright } from "react-icons/fa";
// import NavBar from './NavBar';
// import NavBar from '@/components/NavBar';
// import Footer from '@/components/Footer';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {/* <NavBar /> */}
        {/* <NavBar /> */}
        {children}
        
        {/* <Footer /> */}
        
        <div className='max-w-[450px] w-full mx-auto'>
    <div className='text-[16px] bg-[#60D669] bg-opacity-25  h-[136px]  flex justify-between items-center  mt-32  rounded-tl-[30px] rounded-tr-[30px] p-5 text-[#062C0C]'>
        <p  className='flex items-center justify-center gap-1'><FaRegCopyright size={17}/> 2025, Yotomi</p>
        <div className='flex gap-5 items-center'>
        <Link href="/pages/contact">Contact Us</Link>
        <Link href="/pages/about">About Us</Link>
    </div>
    </div>
    </div>

      </body>
    </html>
  );
}
