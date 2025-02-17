import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import logo from "../../public/Images/Main Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="flex justify-between mr-4 ">
        <div className="flex">
          <img
            src={logo}
            alt="Logo"
            className="h-[15vh] w-[30vw] sm:h-[18vh] sm:w-[10vw]"
          />
          <h1 className="mt-8 text-xl sm:text-2xl font-bold cursor-pointer hover:text-red-500 md:mt-12 md:-ml-3">
            Explore
          </h1>
        </div>
        <ul className="hidden md:mt-12 md:flex gap-6 text-lg">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Business</li>
          <li className="hover:text-red-500 cursor-pointer">Blog</li>
          <li>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Sign Up
            </button>
          </li>
          <li>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Log In
            </button>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 bg-white shadow-md py-4">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Business</li>
          <li className="hover:text-red-500 cursor-pointer">Blog</li>
          <li>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
              Sign Up
            </button>
          </li>
          <li>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md">
              Log In
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
