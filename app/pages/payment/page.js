"use client"
import { useState, useEffect } from 'react';

const Payment = () => {
  const [loading, setLoading] = useState(true);
  const [bankDetails, setBankDetails] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [statusMessage, setStatusMessage] = useState('We will update this screen after your payment');
  const [copyStatus, setCopyStatus] = useState({});

  useEffect(() => {
    initializePayment();
  }, []);

  const initializePayment = async () => {
    const orderData = JSON.parse(localStorage.getItem('currentOrder'));
    if (!orderData) {
      window.location.href = '/cart';
      return;
    }
    setCurrentOrder(orderData);
    await generateDedicatedAccount(orderData);
  };

  const generateDedicatedAccount = async (order) => {
    try {
      const response = await fetch('your_backend_url/generate-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(order.total.replace(/[^0-9.]/g, '')),
          email: order.email || 'customer@example.com',
          reference: order.id
        })
      });

      const data = await response.json();

      if (data.status) {
        localStorage.setItem('paymentReference', data.data.reference);
        setBankDetails(data.data);
        setLoading(false);
        startPaymentStatusCheck(data.data.reference);
      } else {
        throw new Error('Failed to generate account');
      }
    } catch (error) {
      console.error('Error generating account:', error);
      setStatusMessage('Unable to generate bank account. Please try again.');
      setLoading(false);
    }
  };

  const startPaymentStatusCheck = (reference) => {
    const pollInterval = 10000;
    
    const checkStatus = async () => {
      try {
        const response = await fetch(`your_backend_url/verify-payment/${reference}`);
        const data = await response.json();

        if (data.status === 'success') {
          window.location.href = '/payment-status?status=success';
          return;
        } else if (data.status === 'failed') {
          setStatusMessage('Payment failed. Please try again.');
          return;
        }

        setTimeout(checkStatus, pollInterval);
      } catch (error) {
        console.error('Error checking payment status:', error);
      }
    };

    setTimeout(checkStatus, pollInterval);
  };

  const copyToClipboard = async (text, type) => {
    const cleanText = type === 'Amount' ? text.replace(/[^0-9]/g, '') : text;
    try {
      await navigator.clipboard.writeText(cleanText);
      setCopyStatus({ [type]: true });
      setTimeout(() => setCopyStatus({ [type]: false }), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="p-5 bg-white border-b border-green-100">
        <div className="flex items-center gap-4">
          <button onClick={goBack} className="text-2xl text-gray-800 hover:text-gray-600">
            ✕
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Make Payment</h1>
        </div>
      </header>

      <main className="p-5 max-w-2xl mx-auto">
        <h2 className="text-xl text-green-500 text-center mb-8 mt-4">
          Transfer to the following account
        </h2>

        {loading ? (
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Generating bank account...</p>
          </div>
        ) : bankDetails && (
          <div className="space-y-6 mb-10">
            <div>
              <label className="block text-gray-600 mb-2">Bank Name</label>
              <div className="text-xl font-semibold">{bankDetails.bank}</div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Account Number</label>
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div className="text-xl font-semibold">{bankDetails.account_number}</div>
                <button
                  onClick={() => copyToClipboard(bankDetails.account_number, 'Number')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    copyStatus.Number ? 'bg-green-500 text-white' : 'bg-green-100'
                  }`}
                >
                  <span>{copyStatus.Number ? 'Copied!' : 'Copy'}</span>
                  <span className="text-green-500">{!copyStatus.Number && 'Number'}</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Beneficiary Name</label>
              <div className="text-xl font-semibold">{bankDetails.account_name}</div>
            </div>
          </div>
        )}

        {currentOrder && (
          <div className="mt-10 pt-6 border-t border-green-100">
            <h2 className="text-xl text-green-500 text-center mb-6">
              Transfer exact amount to avoid failure
            </h2>
            <div>
              <label className="block text-gray-600 mb-2">Amount to pay</label>
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div className="text-xl font-semibold text-green-500">
                  {currentOrder.total}
                </div>
                <button
                  onClick={() => copyToClipboard(currentOrder.total, 'Amount')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                    copyStatus.Amount ? 'bg-green-500 text-white' : 'bg-green-100'
                  }`}
                >
                  <span>{copyStatus.Amount ? 'Copied!' : 'Copy'}</span>
                  <span className="text-green-500">{!copyStatus.Amount && 'Amount'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center text-green-500 mt-12 text-lg">
          {statusMessage}
        </div>
      </main>
    </div>
  );
};

export default Payment;