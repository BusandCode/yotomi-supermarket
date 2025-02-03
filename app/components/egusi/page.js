'use client'
import { useState,useEffect } from 'react';
import React from 'react'
import Link from 'next/link';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { BiArrowBack } from "react-icons/bi";


const MenuEgusi = () => {
  const [cart, setCart] = useState([]);
  const [showMenu,setShowMenu] = useState(false);
  const [changeIcon,setChangeIcon] = useState(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateCartIcon = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    return totalItems > 0 ? (
      <span className="text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center absolute -top-2 right-0">
        {totalItems}
      </span>
    ) : null;
  };

  const addToCart = (item) => {
    const newCart = [...cart];
    const existingItem = newCart.find(
      cartItem => cartItem.name === item.name && cartItem.details === item.details
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      newCart.push({ ...item, quantity: 1 });
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (item, change) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(
      cartItem => cartItem.name === item.name && cartItem.details === item.details
    );

    if (itemIndex > -1) {
      if (newCart[itemIndex].quantity + change <= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        newCart[itemIndex].quantity += change;
      }
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const menuItems = [
    {
      name: "Egusi Soup",
      details: "1 Pack + 2 Meat Pieces",
      price: 2000,
      image: "/egusi.jpg"
    },
    {
      name: "Egusi Soup",
      details: "2 Packs + 2 Meat",
      price: 7000,
      image: "/egusi.jpg"
    },
    {
      name: "Egusi Soup",
      details: "3 Packs + 5 Meats + 1 Table Water",
      price: 10000,
      image: "/egusi.jpg",
      hasWater: true
    }
  ];

  return (
    <div className="max-w-[450px] relative flex flex-col mx-auto text-[#062C0C]"> 
        <div className='flex justify-between items-center bg-[#DAF6DC] px-5 py-3'>
      <h1 className='text-[30px] font-bold'><i>Yoto<span className='text-[#60D669]'>mi</span></i></h1>
      <div className='flex items-center gap-5 text-[#60D669]'>
        <Link href="/components/cart" onClick={() => window.location.href = '/components/cart'} className='relative'>
        <HiOutlineShoppingCart className='cursor-pointer' size={45} />
        {updateCartIcon()}
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

      <main className="">
      <Link className='py-5 px-3 max-w-fit' href="/">
             <BiArrowBack className='text-[#000000] bg-[#60D669] bg-opacity-40 p-2 rounded-full w-[36px] h-[36px]' size={25}/>
     </Link>

        
        {menuItems.map((item, index) => {
          const cartItem = cart.find(
            cartItem => cartItem.name === item.name && cartItem.details === item.details
          );
          
          return (
            <div key={index} className="flex  items-center justify-between py-5 px-3">
              <div className="flex-1">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.details}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-[#60D669] font-semibold">N{item.price}</span>
                  {!cartItem ? (
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-[#60D669] text-[#FFFFFF] px-[8px] text-[13px] cursor-pointer py-[8px] rounded-[4px]"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item, -1)}
                        className="w-8 h-8 bg-[#60D669] text-white rounded flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="min-w-[20px] text-center">{cartItem.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item, 1)}
                        className="w-8 h-8 bg-[#60D669] text-white rounded flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative">
                <img src={item.image} alt={item.name}  width={200} height={200} className='w-[132px] h-[142px] bg-no-repeat rounded-[8px]' />
                {item.hasWater && (
                  <img 
                    src="/water-bottle.png" 
                    alt="Water Bottle" 
                    className="absolute bottom-0 right-0 w-16"
                  />
                )}
              </div>
            </div>
          );
        })}
      </main>
      <div className='p-5'>
      <div className="bg-[#60D669] flex justify-center gap-5 mt-10 items-center px-5 bg-opacity-25 py-4 rounded-[4px]">
        <p className='text-center'>⚠️ Delivery runs from 6:00 - 7:00 PM</p>
      </div>
      </div>
    </div>
  );
};

export default MenuEgusi;