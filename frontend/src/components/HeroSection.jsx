import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="relative">
        {/* Outer green glow border */}
        <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 rounded-3xl blur-sm opacity-75 pulse-glow" />
        
        {/* Inner border */}
        <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-1.5">
          {/* Content container */}
          <div className="bg-gradient-to-br from-pink-900 via-purple-900 to-pink-800 rounded-2xl p-8 relative overflow-hidden">
            {/* Sparkle effects */}
            <div className="absolute top-4 left-8 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
            <div className="absolute top-12 right-12 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-12 left-12 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-8 right-16 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            
            {/* Floating coins */}
            <div className="absolute top-8 right-20 float-animation">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full transform rotate-45" />
            </div>
            <div className="absolute bottom-16 left-16 float-animation" style={{ animationDelay: '0.5s' }}>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full transform -rotate-12" />
            </div>
            <div className="absolute top-1/2 right-12 float-animation" style={{ animationDelay: '1s' }}>
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full" />
            </div>
            
            {/* Main content */}
            <div className="relative z-10 text-center">
              <div className="mb-4">
                <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-300 to-pink-300 mb-2 tracking-wide">
                  LUCK ZEUZ
                </h2>
                <p className="text-3xl font-bold text-white tracking-wider mb-1">
                  SITUS SLOT ONLINE
                </p>
                <p className="text-2xl font-semibold text-yellow-400">
                  SLOT ONLINE GAMPANG WIN
                </p>
              </div>
              
              {/* Feature badges */}
              <div className="flex justify-center gap-4 mt-6">
                <div className="bg-black/40 px-4 py-1.5 rounded-full border border-yellow-500/50">
                  <p className="text-xs text-yellow-400 font-semibold">LIVE CHAT 24/7</p>
                </div>
                <div className="bg-black/40 px-4 py-1.5 rounded-full border border-yellow-500/50">
                  <p className="text-xs text-yellow-400 font-semibold">DEPOSIT MIN 10K</p>
                </div>
                <div className="bg-black/40 px-4 py-1.5 rounded-full border border-yellow-500/50">
                  <p className="text-xs text-yellow-400 font-semibold">WD MAX 50K</p>
                </div>
              </div>
            </div>
            
            {/* Decorative corner element */}
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-yellow-500 rounded-br-2xl opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;