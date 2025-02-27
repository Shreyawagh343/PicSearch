import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../src/Images/Main Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-20 object-contain" />
        </div>

        <ul className="hidden md:flex items-center gap-10 text-black">
          <li className="hover:text-red-500 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-red-500 cursor-pointer transition-colors">Business</li>
          <li className="hover:text-red-500 cursor-pointer transition-colors">Blog</li>
          <div className='gap-3 flex'>
            <li>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
                Sign Up
              </button>
            </li>
            <li>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
                Log In
              </button>
            </li>
          </div>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full bg-white shadow-md border-t">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:text-red-500 cursor-pointer transition-colors py-2">Home</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors py-2">Business</li>
            <li className="hover:text-red-500 cursor-pointer transition-colors py-2">Blog</li>
            <li className="py-2">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded w-32 transition-colors">
                Sign Up
              </button>
            </li>
            <li className="py-2">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded w-32 transition-colors">
                Log In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
