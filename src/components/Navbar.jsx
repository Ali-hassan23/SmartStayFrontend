"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-10 border-b-2 border-b-slate-400">
      <div className="max-w-screen-xl flex md:flex-row items-center justify-between mx-auto px-4 py-1 relative"> {/* Relative positioning */}
        <Link href="/">
          <div className="flex items-center rtl:space-x-reverse cursor-pointer">
            <img className="h-24" src="/smartlogo.jpg" alt="HEHE"/>
            <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-black">SmartStay</span>
          </div>
        </Link>
        
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        {/* Dropdown menu */}
        <div className={`absolute md:relative w-full md:w-auto mt-14 md:mt-0 md:block ${isNavbarOpen ? '' : 'hidden'}`} id="navbar-default" style={{ top: '50%', left: '0' }}> {/* Absolute positioning */}
          <ul className="font-medium flex flex-col left-0 p-4 md:p-0 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link href="/">
                <span className="block font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:bg-transparent nav-link" >Home</span>
              </Link>
            </li>
            <li>
              <Link href="/rooms">
                <span className="block font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:bg-transparent nav-link" >Rooms</span>
              </Link>
            </li>
            <li>
              <Link href="/amenities" passHref>
                <span className="block font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:bg-transparent nav-link" >Amenities</span>
              </Link>
            </li>
            <li>
              <Link href="/contactUs" passHref>
                <span className="block font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:bg-transparent nav-link" >Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


