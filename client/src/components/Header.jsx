import React from 'react'
import { motion } from "framer-motion";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-800 mr-4">alcasa</span>
            {/* <span className="text-blue-800">Contemporary</span> */}
          </motion.h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input className="bg-transparent focus:outline-none w-24 sm:w-64"
          type='text'
          placeholder='Search...'/>
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to='/'>
          <li className="hidden sm:inline text-amber-900 hover:underline cursor-pointer">Home</li>
            </Link>
          <Link to='/about'>
          <li className="hidden sm:inline text-amber-900 hover:underline cursor-pointer">About</li>
          </Link>
          <Link to='/sign-in'>
          <li className="text-amber-800 hover:underline cursor-pointer">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

