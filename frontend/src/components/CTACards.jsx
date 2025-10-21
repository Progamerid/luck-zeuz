import React from 'react';
import { LogIn, UserPlus, MessageCircle } from 'lucide-react';

const CTACards = () => {
  const handleLiveChat = () => {
    window.open('https://wa.me/6288980780077', '_blank');
  };

  const cards = [
    {
      title: 'LOGIN',
      action: 'LOGIN',
      icon: LogIn,
      onClick: () => alert('Login functionality will be available soon!')
    },
    {
      title: 'DAFTAR',
      action: 'DAFTAR',
      icon: UserPlus,
      onClick: () => alert('Registration functionality will be available soon!')
    },
    {
      title: 'LIVE CHAT',
      action: 'KLIK DISINI',
      icon: MessageCircle,
      onClick: handleLiveChat
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="bg-gradient-to-r from-gray-800 to-gray-900 border-b-2 border-gray-700 hover:border-yellow-500 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
              <card.icon className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
              <span className="text-white font-semibold tracking-wider text-lg">
                {card.title}
              </span>
            </div>
            <button
              onClick={card.onClick}
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-2.5 px-8 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 tracking-wider"
            >
              {card.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CTACards;