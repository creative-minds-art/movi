import React from 'react';

const VirtuVault = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
        fontFamily: "'SF Pro Display', 'Roboto', sans-serif",
        backgroundColor: '#111111',
        color: '#FFFFFF'
      }}
    >
      <div className="container mx-auto p-6">
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <div 
            className="flex items-center space-x-2 rounded-full px-4 py-2"
            style={{ backgroundColor: '#1C1C1E' }}
          >
            <span 
              className="material-symbols-outlined text-lg"
              style={{ 
                color: '#A050F0',
                fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24"
              }}
            >
              person
            </span>
            <span className="text-sm font-medium">Hi, Cathy</span>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              className="rounded-full p-3"
              style={{ backgroundColor: '#1C1C1E' }}
            >
              <span 
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
              >
                credit_card
              </span>
            </button>
            <button 
              className="rounded-full p-3"
              style={{ backgroundColor: '#1C1C1E' }}
            >
              <span 
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
              >
                group
              </span>
            </button>
            <button 
              className="rounded-full p-3"
              style={{ backgroundColor: '#1C1C1E' }}
            >
              <span 
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
              >
                apps
              </span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="mt-12">
          {/* Total Balance Section */}
          <div className="text-center">
            <p 
              className="text-sm font-medium"
              style={{ color: '#8E8E93' }}
            >
              VirtuVault Total Balance
            </p>
            <div className="flex justify-center items-center mt-3">
              <p className="text-5xl font-bold tracking-tight">$53,987.02</p>
              <span 
                className="text-xs font-semibold ml-3 px-2.5 py-1 rounded-full"
                style={{ 
                  backgroundColor: '#1C1C1E',
                  color: '#8E8E93'
                }}
              >
                USD
              </span>
            </div>
          </div>

          {/* Card Stack Section */}
          <div className="mt-16 relative h-96">
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Background cards */}
              <div 
                className="absolute w-80 h-52 rounded-3xl transform rotate-6 -translate-y-6 opacity-70 blur-sm"
                style={{ backgroundColor: 'rgba(55, 55, 55, 0.6)' }}
              ></div>
              <div 
                className="absolute w-80 h-52 rounded-3xl transform -rotate-6 translate-y-6 opacity-70 blur-sm"
                style={{ backgroundColor: 'rgba(55, 55, 55, 0.6)' }}
              ></div>

              {/* Main card */}
              <div 
                className="absolute z-10 w-80 h-56 rounded-3xl p-6 flex flex-col justify-between shadow-2xl border border-white/10"
                style={{ backgroundColor: '#1C1C1E' }}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span 
                        className="text-sm"
                        style={{ color: '#8E8E93' }}
                      >
                        Balance
                      </span>
                      <span 
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ 
                          backgroundColor: '#374151',
                          color: '#D1D5DB'
                        }}
                      >
                        BTC
                      </span>
                    </div>
                    <button className="text-white text-xs px-4 py-2 rounded-full bg-white/10">
                      Edit
                    </button>
                  </div>
                  <p className="text-3xl font-semibold mt-2">$5,756.32</p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p 
                      className="text-sm"
                      style={{ color: '#8E8E93' }}
                    >
                      Card Number
                    </p>
                    <p className="text-lg font-medium tracking-wider">•••• 3546</p>
                  </div>
                  <div className="flex items-center">
                    <div 
                      className="w-10 h-10 rounded-full border-2 border-transparent"
                      style={{ backgroundColor: '#EB001B' }}
                    ></div>
                    <div 
                      className="w-10 h-10 rounded-full -ml-4 border-2 border-transparent"
                      style={{ backgroundColor: '#F79E1B' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card indicator dots */}
          <div className="text-center -mt-8">
            <div className="flex justify-center items-center space-x-1.5">
              <span className="h-1.5 w-3 rounded-full bg-white"></span>
              <span 
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: '#4B5563' }}
              ></span>
              <span 
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: '#4B5563' }}
              ></span>
            </div>
          </div>

          {/* Add New Card Button */}
          <div className="mt-16 flex justify-center">
            <button 
              className="w-full text-white py-4 rounded-full flex items-center justify-center space-x-2 font-semibold"
              style={{ backgroundColor: '#0A84FF' }}
            >
              <span 
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
              >
                add
              </span>
              <span>Add New Card</span>
            </button>
          </div>
        </main>
      </div>

      {/* Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
    </div>
  );
};

export default VirtuVault;