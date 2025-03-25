"use client";
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div
      className={`bg-[#d3fc07] text-white px-6 lg:px-10 py-2 w-full fixed top-0 z-50`}
    >
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-between h-full space-y-2 lg:space-y-0">
        <div>
          <div className="flex items-center gap-4 text-center bg-white border-[#0F1B4F] border-[1px] text-[#0F1B4F] rounded-md shadow-md text-xs font-bold px-4 py-1">
            For Franchise call : <IoCallOutline /> +91 9949941598
          </div>
        </div>
        <div>
          <ul className="flex space-x-3 lg:space-x-4 justify-center">
            <li><Link href="/"><FaInstagram size={22} className="text-pink-600" /></Link></li>
            <li><Link href="/"><FaFacebookF size={22} className="text-blue-500" /></Link></li>
            <li><Link href="/"><CiYoutube size={24} className="text-red-600" /></Link></li>
            <li><Link href="/"><CgMail size={22} className="text-orange-600" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
