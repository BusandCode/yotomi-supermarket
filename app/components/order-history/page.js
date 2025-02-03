'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const router = useRouter();

  useEffect(() => {
    initializeOrderHistory();
  }, []);

  const initializeOrderHistory = () => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
  };

  const getStatusDisplay = (status) => {
    const statusConfig = {
      pending: {
        text: 'Payment Pending',
        className: 'bg-yellow-100 text-yellow-800'
      },
      payment_confirmed: {
        text: 'Processing Order',
        className: 'bg-blue-100 text-blue-800'
      },
      successful: {
        text: 'Order Delivered',
        className: 'bg-green-100 text-green-800'
      },
      payment_failed: {
        text: 'Payment Failed',
        className: 'bg-red-100 text-red-800'
      }
    };

    return statusConfig[status] || {
      text: 'Unknown Status',
      className: 'bg-gray-100 text-gray-800'
    };
  };

  const handleReorder = (order) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    order.items.forEach(item => {
      currentCart.push({
        name: item.name,
        details: item.details,
        price: item.price,
        quantity: item.quantity
      });
    });

    localStorage.setItem('cart', JSON.stringify(currentCart));
    router.push('/cart');
  };

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="text-xl mb-4">No orders yet</div>
        <button
          onClick={() => router.push('/')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Start Ordering
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {orders.map(order => {
        const status = getStatusDisplay(order.status);
        return (
          <div key={order.id} className="mb-4 border rounded-lg overflow-hidden">
            <div
              className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer"
              onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
            >
              <div>
                <span className="text-gray-600">
                  {new Date(order.timestamp).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
                <span className={`ml-4 px-3 py-1 rounded-full text-sm ${status.className}`}>
                  {status.text}
                </span>
              </div>
              <span className="font-medium">₦{order.total.toLocaleString()}</span>
            </div>

            {selectedOrder === order.id && (
              <div className="p-4 border-t">
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.name} × {item.quantity}</span>
                      <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                
                {order.status === 'successful' && (
                  <button
                    onClick={() => handleReorder(order)}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                  >
                    Reorder
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OrderHistory;