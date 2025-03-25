"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import Banner from './Banner';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Header */}
      <div
        className={`fixed lg:top-8 top-18 w-full bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white px-6 py-4 z-40`}
      >
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold flex flex-col items-center">
            <Image src='/Logo.png' alt='No Image Found' height={500} width={500} className='w-14'/>
            <div>Hotel Madhuram</div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <HiX size={28} className="text-white" /> : <HiMenu size={28} className="text-white" />}
            </button>
          </div>

          {/* Navigation (Large Screens) */}
          <div className="hidden lg:flex">
            <ul className="flex gap-8">
              <li><Link href="/" className="hover:text-gray-300 transition duration-200">Home</Link></li>
              <li><Link href="/menu" className="hover:text-gray-300 transition duration-200">Menu</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition duration-200">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile Menu (Shown When Menu Open) */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-green-700 via-green-600 to-green-800 lg:hidden">
              <ul className="flex flex-col items-center space-y-4 py-4">
                <li><Link href="/" onClick={toggleMenu} className="text-white hover:text-gray-300 transition duration-200">Home</Link></li>
                <li><Link href="/menu" onClick={toggleMenu} className="text-white hover:text-gray-300 transition duration-200">Menu</Link></li>
                <li><Link href="/about" onClick={toggleMenu} className="text-white hover:text-gray-300 transition duration-200">About</Link></li>
                <li><Link href="/contact" onClick={toggleMenu} className="text-white hover:text-gray-300 transition duration-200">Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Spacer to push the content down */}
      <div className="h-24"></div>
    </>
  );
};

export default Header;
