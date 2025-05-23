import React from 'react';

const ContactHero = () => {
  return (
    <div className="relative bg-cyan-900 text-white py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000"
          alt="Contact background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">We're Here to Help</h1>
        <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
          Get in touch with our team of experts for all your gas mixing and compressor needs
        </p>
      </div>
    </div>
  );
};

export default ContactHero;