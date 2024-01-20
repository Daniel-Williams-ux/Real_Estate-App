// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black py-4 w-1px  object-cover ">
      <div className="container mx-auto flex flex-col items-center ">
        {/* <div className="flex items-center mb-4">
          <img src="/logo.jpg" alt="alcasa" className="w-36 mr-2" />
          <span className="text-lg font-semibold"></span>
        </div> */}
    
        <p className="flex item-center text-gray-400 text-sm sm:text-base items-center ml-8 mb-2 font-bold">
          © 2024 Alcasa contemporary. All rights reserved.
        </p>
    
        

        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-black text-sm sm:text-base">
            Terms
          </a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-400 hover:text-black text-sm sm:text-base">
            Privacy
          </a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-400 hover:text-black text-sm sm:text-base">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
