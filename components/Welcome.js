"use client";
import React from 'react';
import { Merriweather, Montserrat } from 'next/font/google';
import Link from 'next/link';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

const AboutUs = () => {
  return (
    <div className={`flex flex-col items-center justify-center bg-gray-100 py-16 px-6 lg:px-32 text-gray-800`}>
      {/* Title */}
      <h1 className={`text-4xl font-extrabold text-green-700 mb-4 text-center ${merriweather.className}`}>
        Welcome To Hotel Madhuram
      </h1>
      
      {/* Description */}
      <p className={`text-xl font-medium text-gray-700 text-center max-w-3xl mb-8 ${montserrat.className}`}>
        Hotel Madhuram is a vibrant and bustling spot known for its mouth-watering Tiffins, Delicious Meals, Sweets, and Snacks. 
        We take pride in offering a diverse menu crafted with fresh ingredients and traditional recipes that ensure an unforgettable culinary experience.
      </p>

      {/* Location Description */}
      <p className={`text-lg text-gray-600 text-center max-w-3xl mb-8 ${montserrat.className}`}>
        Conveniently located in the heart of Yadagirigutta, Hotel Madhuram is a favorite among locals and tourists alike. Whether you&apos;re stopping by for a quick bite or enjoying a hearty meal, you’ll love our welcoming atmosphere and authentic flavors.
      </p>

      {/* More About Us Button */}
      <Link href='/about' className={`px-8 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white text-lg font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition-transform transform hover:scale-105 active:scale-95 ${montserrat.className}`}>
        More About Us
      </Link>
    </div>
  );
};

export default AboutUs;
