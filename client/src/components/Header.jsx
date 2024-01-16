import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' }, 
    visible: { opacity: 1, x: '0%', transition: { staggerChildren: 0.2, duration: 0.1 } },
  };
  
  const menuItemVariants = {
    hidden: { opacity: 0, x: '100%' }, 
    visible: { opacity: 1, x: '0%' },
  };
  

  return (
    <div>
      <header className={` shadow-md ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          {!isMobileMenuOpen && (
            <Link to='/'>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-bold text-sm sm:text-xl flex flex-wrap items-center text-white"
              >
                <img src="/logo.jpg" alt="alcasa logo" className="w-36 mr-2" />
                <span></span>
              </motion.h1>
            </Link>
          )}
          <form className="hidden sm:inline bg-black text-white p-3 rounded-lg flex items-center">
            <input
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              type='text'
              placeholder='Search...'
            />
            <FaSearch className="text-slate-600" />
          </form>
          <div className="hidden md:flex items-center gap-4">
            <Link to='/' className="text-black hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out">Home</Link>
            <Link to='/about' className="text-black hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out">About</Link>
            <Link to='/products' className="text-black hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out">Products</Link>
            <Link to='/services' className="text-black hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out">Services</Link>
            <Link to='/sign-in' className="text-black hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out">Login</Link>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            {isMobileMenuOpen ? (
              <FaTimes
                className="text-black cursor-pointer text-2xl "
                onClick={closeMobileMenu}
              />
            ) : (
              <FaBars
                className="text-black cursor-pointer text-2xl"
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed top-0 right-0 w-full h-full bg-white z-50"
          >
            <div className="flex justify-start p-4">
              <FaTimes
                className="text-black cursor-pointer text-2xl"
                onClick={closeMobileMenu}
              />
            </div>
            <motion.div
              variants={menuVariants}
              className="flex flex-col items-end gap-10 p-8 w-full h-full justify-start"
            >
              <motion.div variants={menuItemVariants}>
                <Link to="/" onClick={closeMobileMenu}>
                  <p className="text-black hover:underline cursor-pointer my-4 text-xl font-semibold ">Home</p>
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link to="/about" onClick={closeMobileMenu}>
                  <p className="text-black hover:underline cursor-pointer my-4 text-xl font-semibold">About</p>
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link to="/products" onClick={closeMobileMenu}>
                  <p className="text-black hover:underline cursor-pointer my-4 text-xl font-semibold">Products</p>
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link to="/services" onClick={closeMobileMenu}>
                  <p className="text-black hover:underline cursor-pointer my-4 text-xl font-semibold">Services</p>
                </Link>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link to="/sign-in" onClick={closeMobileMenu}>
                  <p className="text-black hover:underline cursor-pointer my-4 text-xl font-semibold">Login</p>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
