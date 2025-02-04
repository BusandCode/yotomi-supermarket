"use client"
import React, { useEffect, useState } from 'react';
import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';

const page = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    updateCartNotification();
  };

  const updateQuantity = (index, change) => {
    const newCart = [...cart];
    if (change === -1 && newCart[index].quantity === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].quantity += change;
    }
    updateCart(newCart);
  };

  const duplicateItem = (index) => {
    const newCart = [...cart];
    const itemToDuplicate = { ...newCart[index] };
    newCart.push(itemToDuplicate);
    updateCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    updateCart(newCart);
  };

  const updateCartNotification = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    // This would be handled by your app's global state management in a real application
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
      let notification = cartBtn.querySelector('.cart-notification');
      if (totalItems > 0) {
        if (!notification) {
          notification = document.createElement('span');
          notification.className = 'cart-notification';
          cartBtn.appendChild(notification);
        }
        notification.textContent = totalItems;
      } else if (notification) {
        notification.remove();
      }
    }
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    window.location.href = '/components/checkout?type=delivery';
  };

  // const openWhatsApp = () => {
  //   window.open('https://wa.me/2348038701309', '_blank');
  // };

  const goBack = () => {
    window.history.back();
  };

  const startOrdering = () => {
    window.location.href = '/';
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="max-w-[450px] mx-auto flex flex-col bg-white text-[#062C0C]">
      <header className="bg-white p-2 border-b border-[#E8F5E9]">
        <div className="flex items-center gap-4">
          <button onClick={goBack} className="bg-white border-none p-2 cursor-pointer">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-semibold">Cart</h1>
        </div>
      </header>

      <div className="flex-1 p-5 max-w-xl mx-auto w-full">
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <img src="/cart-empty.png" alt="Empty Cart" className="mx-auto mb-6" width={200}/>
            <p className="text-lg text-gray-600 mb-6">Your cart is empty!</p>
            <button
              onClick={startOrdering}
              className="bg-[#60D669] text-white border-none py-4 px-8 rounded-lg text-base font-semibold cursor-pointer"
            >
              Start Ordering
            </button>
          </div>
        ) : (
          <div className='p-5'>
            <h2 className="text-xl font-semibold mb-6">Checkout</h2>
            {cart.map((item, index) => (
              <div key={index} className="bg-white max-w-[450px] mx-auto border border-dashed border-[#062C0C] rounded-[4px] p-4 mb-4">
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-[18px] mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.details}</p>
                  <span className="text-[#60D669] font-semibold">₦{(item.price * item.quantity).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1 justify-start">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="w-8 h-8 bg-[#E8F5E9] border-none rounded-md flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="min-w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="w-8 h-8 bg-[#E8F5E9] border-none rounded-md flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => duplicateItem(index)}
                    className="bg-[#E8F5E9] text-[13px] px-3 border-none py-2 rounded-md"
                  >
                    Duplicate pack
                  </button>
                  <button
                    onClick={() => removeItem(index)}
                    className="bg-transparent border-none p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  </div>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t border-[#E8F5E9]">
              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total:</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex gap-3">
                {/* <button
                  onClick={openWhatsApp}
                  className="w-12 h-12 border-2 border-[#60D669] bg-transparent rounded-lg flex items-center justify-center"
                >
                  <img src="/whatsapp.png" alt="WhatsApp" />
                </button> */}
                <button
                  onClick={proceedToCheckout}
                  className="flex-1 h-12 bg-[#60D669] text-white border-none rounded-lg text-base font-semibold"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;