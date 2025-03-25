"use client";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white py-8 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-bold">Madhuram Hotel</h1>
          <p className="text-gray-300">Delighting your taste buds since 1995</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About Us</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Franchise</Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="flex items-center gap-2 text-gray-300">
            <FaPhoneAlt /> +91 9949941598
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <FaEnvelope /> info@madhuramhotel.com
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <Link href="/" aria-label="Instagram">
            <FaInstagram size={28} className="text-pink-500 hover:text-white transition duration-200" />
          </Link>
          <Link href="/" aria-label="Facebook">
            <FaFacebookF size={28} className="text-blue-500 hover:text-white transition duration-200" />
          </Link>
          <Link href="/" aria-label="Twitter">
            <FaTwitter size={28} className="text-blue-400 hover:text-white transition duration-200" />
          </Link>
          <Link href="/" aria-label="YouTube">
            <FaYoutube size={28} className="text-red-600 hover:text-white transition duration-200" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Madhuram Hotel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
