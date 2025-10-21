import React from 'react';
import { Crown } from 'lucide-react';

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ['TOGEL', 'SLOT', 'BOLA'];

  return (
    <header className="pt-8 pb-4">
      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <Crown className="w-12 h-12 text-yellow-500 mr-3" strokeWidth={1.5} />
        <div>
          <h1 className="text-5xl font-bold text-yellow-500 tracking-wider">
            LUCK ZEUZ
          </h1>
          <p className="text-xs text-yellow-600 text-center tracking-widest mt-1">
            ONLINE GAMING PLATFORM
          </p>
        </div>
      </div>

      {/* Site title */}
      <div className="text-center mb-4">
        <p className="text-white text-sm tracking-wider">SITUS SLOT ONLINE</p>
      </div>

      {/* Navigation tabs */}
      <div className="flex justify-center">
        <div className="bg-red-700 rounded-lg px-4 py-3 flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeTab === tab 
                  ? 'text-white scale-110' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          <span className="text-gray-300">|</span>
        </div>
      </div>
    </header>
  );
};

export default Header;