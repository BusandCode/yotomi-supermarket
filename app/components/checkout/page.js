"use client"
import React, { useEffect, useState } from 'react';
import { AlertTriangle, Eye, EyeOff, X } from 'lucide-react';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (savedCart.length === 0) {
      window.location.href = '/components/cart';
      return;
    }
    setCart(savedCart);
  }, []);

  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, '');
    if (!numbers.startsWith('234')) {
      numbers = '234' + numbers;
    }
    if (numbers.length > 13) {
      numbers = numbers.slice(0, 13);
    }
    return '+' + numbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const validateForm = () => {
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 13) {
      setError('Please enter a valid phone number (13 digits)');
      return false;
    }

    if (!address || address.trim().length < 10) {
      setError('Please enter a valid delivery address (minimum 10 characters)');
      return false;
    }

    if (error) {
      setTimeout(() => setError(''), 3000);
    }

    return true;
  };

  const processOrder = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const phoneDigits = phone.replace(/\D/g, '');
    // const pin = phoneDigits.slice(-5);

    // const order = {
    //   id: Date.now().toString(),
    //   items: cart,
    //   phone,
    //   address,
    //   pin,
    //   status: 'pending',
    //   timestamp: new Date().toISOString(),
    //   total: `₦${subtotal.toLocaleString()}`,
    //   // paymentStatus: 'pending',
    //   deliveryStatus: 'pending'
    // };
    
    // Save order to localStorage
    // const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    // orders.push(order);
    // localStorage.setItem('orders', JSON.stringify(orders));
    // localStorage.setItem('currentOrder', JSON.stringify(order));

    // Simulate processing delay
    // setTimeout(() => {
    //   window.location.href = '/components/payment';
    // }, 1000);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348038701309', '_blank');
  };

  const goBack = () => {
    window.history.back();
  };

  // if (loading) {
  //   return (
  //     <div className="fixed inset-0 bg-white/90 flex flex-col items-center justify-center gap-4 z-50">
  //       <div className="w-10 h-10 border-4 border-[#E8F5E9] border-t-[#60D669] rounded-full animate-spin" />
  //       <p className="text-[#062C0C] text-base">Processing your order...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-[450px] capitalize mx-auto min-h-screen bg-white text-[#062C0C]">
      <header className="p-5 border-b border-[#E8F5E9] bg-white">
        <div className="flex items-center gap-4">
          <button onClick={goBack} className="bg-transparent border-0 text-2xl cursor-pointer text-[#062C0C]">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-semibold">Checkout</h1>
        </div>
      </header>

      <main className="p-5 max-w-2xl mx-auto">
        <div className="bg-[#60D669] rounded-xl p-5 flex items-start gap-4 text-white mb-8">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#60D669] font-bold">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg mb-1">Fill in delivery details</h2>
            <p className="text-sm opacity-90">This helps ensure that your order is given to the right person</p>
          </div>
        </div>

        <form onSubmit={processOrder} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-base">Delivery Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Input Your Address"
              className="w-full p-4 bg-[#E8F5E9] border-0 rounded-lg text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-base">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+234 000 000 0000"
              className="w-full p-4 bg-[#E8F5E9] border-0 rounded-lg text-base"
              required
            />
          </div>

          {/* <div className="space-y-2">
            <label className="block text-base">Your Order Pin is Your Phone-Number Last 5 Digits</label>
            <div className="flex items-center gap-3">
              <div className="flex-1 flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <input
                    key={i}
                    type={showPin ? "text" : "password"}
                    value={phone.replace(/\D/g, '').slice(-5)[i] || ''}
                    className="flex-1 w-12 h-12 bg-[#E8F5E9] border-0 rounded-lg text-xl text-center"
                    readOnly
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowPin(!showPin)}
                className="p-2 bg-transparent border-0 cursor-pointer"
              >
                {showPin ? <EyeOff className="w-6 h-6 opacity-70" /> : <Eye className="w-6 h-6 opacity-70" />}
              </button>
            </div>
          </div> */}

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <div className="mt-8 pt-4 border-t border-[#E8F5E9]">
            <div className="space-y-4">
              <div className="flex justify-between text-base">
                <span>Sub total</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base">
                <span>Delivery fee</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between text-lg font-semibold pt-4 border-t border-[#E8F5E9]">
                <span>Total</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            {/* <button
              type="button"
              
              className="w-12 h-12 border-2 border-[#60D669] bg-transparent rounded-lg flex items-center justify-center"
            >
              <Phone className="w-6 h-6" />
            </button> */}
            <button
              onClick={openWhatsApp}
              className="flex-1 h-12 bg-[#60D669] text-white border-0 rounded-lg text-base font-semibold"
            >
              CONFIRM ORDER
            </button>

          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;