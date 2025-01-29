'use client'
import React,{useState} from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
// import { FaUser } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { BiArrowBack } from "react-icons/bi";
import Link from 'next/link';
import { FaCircleExclamation } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";



const page = () => {

  const [showMenu,setShowMenu] = useState(false);
  const [changeIcon,setChangeIcon] = useState(true);
  const [displayFirst,setDisplayFirst] = useState(true);
  const [displaySecond,setDisplaySecond] = useState(true);
  const [displayThird,setDisplayThird] = useState(true);
  let [firstCart,setFirstCart] = useState(0);
  let [secondCart,setSecondCart] = useState(0);
  let [thirdCart,setThirdCart] = useState(0);
  // const [cartMessage,setCartMessage] = useState("Add to cart");

  const cartMessage = "Add to cart";
  const handleFirstCart = () =>{
    setDisplayFirst(false);
    
  };
  const handleSecondCart = () =>{
    setDisplaySecond(false);
  };

  const handleThirdCart = () =>{
    setDisplayThird(false);
  };
  const incrementFirstCart = () =>{
    setFirstCart(firstCart++)
  };
  const decrementFirstCart = () =>{
    setFirstCart(firstCart--)
  };
  const incrementSecondCart = () =>{
    setSecondCart(secondCart++)
  };
  const decrementSecondCart = () =>{
    setSecondCart(secondCart--)
  };
  const incrementThirdCart = () =>{
    setThirdCart(thirdCart++)
  };
  const decrementThirdCart = () =>{
    setThirdCart(thirdCart--)
  };
  return (
    <main className='max-w-[450px] relative mx-auto flex flex-col  gap-5 h-full'>
      {/* Header */}
    <div className='flex justify-between items-center bg-[#DAF6DC] px-5 py-3'>
      <h1 className='text-[30px] font-bold'><i>Yoto<span className='text-[#60D669]'>mi</span></i></h1>
      <div className='flex items-center gap-5 text-[#60D669]'>
        <Link href="/food/cart">
        <HiOutlineShoppingCart className='cursor-pointer' size={25}/>
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
        
      
        {/* <FaUser  className='bg-[#60D669] cursor-pointer bg-opacity-40 w-[36px] h-[36px] p-2 rounded-full' size={25}/> */}
      </div>
    </div>
    {/* Menu */}
    {showMenu && 
     <nav
    className='bg-[#DAF6DC] flex flex-col items-start gap-2 w-3/4 min-h-screen transform translate-x-0 rounded-sm absolute z-[999] right-0 top-[70px]'>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Order History</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
     }}
     className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Track Order</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>FAQ</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>Contact Us</Link>
     <Link href="/" onClick={()=>{
      setShowMenu(false);
      setChangeIcon(true);
      }}
      className='hover:bg-[#60D669] w-full p-3 hover:text-white'>About Us</Link>
   </nav>
    }
      
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

                {/* button */}
                <div onClick={handleFirstCart}>
                  {displayFirst ? <div className='bg-[#60D669] text-[#FFFFFF] px-[8px] text-[13px] cursor-pointer py-[8px] rounded-[4px]'>{cartMessage}</div>
                  :
                  <div className='flex items-center gap-2 bg-[white]'>
                  <button onClick={decrementFirstCart} className='bg-[#60D669] w-[30px]  px-2 py-[2px] text-white rounded-[4px]'>-</button>
                  {firstCart}
                  <button onClick={incrementFirstCart} className='bg-[#60D669] w-[30px] px-2 py-[2px] text-white rounded-[4px]'>+</button>
                  </div>}
                  </div>

              </div>
            </div>

            {/* Image */}
            <div>
            <img src="/stew.jpg" alt="Red Stew" width={200} height={200} className='w-[132px] h-[142px] bg-no-repeat rounded-[8px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between py-5 px-3'>
            {/* Description */}
            <div className='flex flex-col items-start gap-5 '>
              <h1 className='text-[#000000] font-semibold text-[17px]'>Red Stew Soup</h1>
              <p className='text-[13px] font-normal'>2 Packs + 2 Meat</p>
              <div className='flex items-center gap-3'>
                <h2 className='text-[#1FAF38] text-[17px] font-normal'>N7000</h2>

                {/* button */}
                <div onClick={handleSecondCart}>
                  {displaySecond ? <div className='bg-[#60D669] text-[#FFFFFF] px-[8px] text-[13px] cursor-pointer py-[8px] rounded-[4px]'>{cartMessage}</div>
                  :
                  <div className='flex items-center gap-2 bg-[white]'>
                  <button onClick={decrementSecondCart} className='bg-[#60D669] w-[30px]  px-2 py-[2px] text-white rounded-[4px]'>-</button>
                  {secondCart}
                  <button onClick={incrementSecondCart} className='bg-[#60D669] w-[30px] px-2 py-[2px] text-white rounded-[4px]'>+</button>
                  </div>}
                  </div>

              </div>
            </div>

            {/* Image */}
            <div>
            <img src="/stew.jpg" alt="Red Stew" width={200} height={200} className='w-[132px] h-[142px] bg-no-repeat rounded-[8px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between py-5 px-3'>
            {/* Description */}
            <div className='flex flex-col items-start gap-5 '>
              <h1 className='text-[#000000] font-semibold text-[17px]'>Red Stew Soup</h1>
              <p className='text-[13px] font-normal'>3 Packs + 5 Meats + 1 Table Water</p>
              <div className='flex items-center gap-3'>
                <h2 className='text-[#1FAF38] text-[17px] font-normal'>N10,000</h2>
                
                {/* button */}
                <div onClick={handleThirdCart}>
                  {displayThird ? <div className='bg-[#60D669] text-[#FFFFFF] px-[8px] text-[13px] cursor-pointer py-[8px] rounded-[4px]'>{cartMessage}</div>
                  :
                  <div className='flex items-center gap-2 bg-[white]'>
                  <button onClick={decrementThirdCart} className='bg-[#60D669] w-[30px]  px-2 py-[2px] text-white rounded-[4px]'>-</button>
                  {thirdCart}
                  <button onClick={incrementThirdCart} className='bg-[#60D669] w-[30px] px-2 py-[2px] text-white rounded-[4px]'>+</button>
                  </div>}
                  </div>

              </div>
            </div>

            {/* Image */}
            <div>
            <img src="/stew.jpg" alt="Red Stew" width={200} height={200} className='w-[132px] h-[142px] bg-no-repeat rounded-[8px]'/>
            </div>
          </div>
          </section>

          <section className='py-5 px-3'>
          <div className='bg-[#60D669] flex justify-start gap-5 items-center px-5 bg-opacity-25 py-4 rounded-[4px]'>
            <FaCircleExclamation className='text-[#60D669]' size={25}/>
            <p className='text-[13px]'>Delivery runs from 6:00PM-7:00PM</p>
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