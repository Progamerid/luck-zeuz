import React from 'react';

const ActionButtons = () => {
  const handleMainClick = () => {
    window.open('https://wa.me/6288980780077', '_blank');
  };

  return (
    <div className="flex justify-center gap-4 px-4 py-6">
      <button 
        onClick={() => alert('Redirecting to Luck Zeuz platform...')}
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 text-lg tracking-wider"
      >
        LUCK ZEUZ
      </button>
      <button 
        onClick={handleMainClick}
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 text-lg tracking-wider"
      >
        MAIN DISINI
      </button>
    </div>
  );
};

export default ActionButtons;