import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block">Authentic</span>
          <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Indian Cuisine
          </span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Experience the rich flavors and aromatic spices of traditional Indian cooking, 
          crafted with passion and served with love.
        </p>
        <a href="#menu">
        <button  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          Explore Our Menu
        </button>
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;