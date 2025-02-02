"use client"

import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Search, MessageCircle } from 'lucide-react';

// Wrapper component to provide Router context
const FAQWrapper = () => (
  <Router>
    <FAQ />
  </Router>
);

// Main FAQ component
const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const faqSections = [
    {
      title: "Ordering",
      items: [
        {
          question: "How do I place an order?",
          answer: "You can place an order by selecting items from our menu and adding them to your cart. Once you're ready, proceed to checkout and follow the payment instructions."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, PayPal, and mobile payment solutions."
        }
      ]
    },
    {
      title: "Delivery",
      items: [
        {
          question: "What are your delivery hours?",
          answer: "We deliver 7 days a week from 10 AM to 10 PM."
        },
        {
          question: "How long does delivery take?",
          answer: "Typical delivery time is 30-45 minutes depending on your location and current order volume."
        }
      ]
    }
  ];

  const toggleAnswer = (sectionIndex, itemIndex) => {
    const newActiveItem = activeItem === `${sectionIndex}-${itemIndex}` 
      ? null 
      : `${sectionIndex}-${itemIndex}`;
    setActiveItem(newActiveItem);
  };

  const filterFaqItems = (section) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return section.items.some(item =>
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
    );
  };

  const filterFaqItem = (item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return item.question.toLowerCase().includes(query) ||
           item.answer.toLowerCase().includes(query);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348038701309', '_blank');
  };

  return (
    <div className="max-w-[450px] mx-auto flex flex-col  gap-5 h-full">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-semibold ml-4">Frequently Asked Questions</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-6">
          {faqSections.map((section, sectionIndex) => (
            filterFaqItems(section) && (
              <div key={sectionIndex} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <h2 className="px-6 py-4 text-lg font-semibold bg-gray-50 border-b">
                  {section.title}
                </h2>
                {section.items.map((item, itemIndex) => (
                  filterFaqItem(item) && (
                    <div key={itemIndex} className="border-b last:border-b-0">
                      <button
                        onClick={() => toggleAnswer(sectionIndex, itemIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">{item.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transform transition-transform ${
                            activeItem === `${sectionIndex}-${itemIndex}` ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div 
                        className={`px-6 overflow-hidden transition-all duration-200 ${
                          activeItem === `${sectionIndex}-${itemIndex}` 
                            ? 'max-h-48 py-4' 
                            : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            )
          ))}
        </div>

        <button
          onClick={openWhatsApp}
          className="fixed bottom-6 right-0 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat with us</span>
        </button>
      </div>
    </div>
  );
};

export default FAQWrapper;