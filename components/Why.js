"use client";
import React from 'react';
import Image from 'next/image';
import { Montserrat, Merriweather } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

const WhyUs = () => {
  return (
    <div className="relative w-full bg-gray-100 py-16 px-6 lg:px-32 text-gray-800">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl shadow-lg mb-12">
        <Image
          src="/Why.avif"  // Replace with your image path
          alt="Why Choose Madhuram"
          layout="fill"
          objectFit="cover"
          className="rounded-xl brightness-75"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className={`text-5xl lg:text-7xl font-extrabold text-white drop-shadow-md text-center ${merriweather.className}`}>
            Why Choose Madhuram?
          </h1>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <p className={`text-xl font-semibold text-gray-700 max-w-4xl  ${montserrat.className}`}>
          At Hotel Madhuram, we believe in delivering a unique dining experience that goes beyond just food. Our passion for authenticity and quality is what sets us apart. Here’s why we are the best choice for your next meal:
        </p>

        {/* Reasons to Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className={`text-xl font-bold text-green-700 mb-2 ${merriweather.className}`}>
              Authentic Flavors
            </h2>
            <p className={`text-md text-gray-600 ${montserrat.className}`}>
              Our dishes are crafted with traditional recipes and fresh ingredients, ensuring you experience the true taste of Indian cuisine.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className={`text-xl font-bold text-green-700 mb-2 ${merriweather.className}`}>
              Exceptional Quality
            </h2>
            <p className={`text-md text-gray-600 ${montserrat.className}`}>
              We maintain the highest standards of hygiene and quality, offering delicious meals that are safe and satisfying.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className={`text-xl font-bold text-green-700 mb-2 ${merriweather.className}`}>
              Comfortable Ambience
            </h2>
            <p className={`text-md text-gray-600 ${montserrat.className}`}>
              Enjoy your meal in a cozy and welcoming environment that makes you feel at home.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className={`text-xl font-bold text-green-700 mb-2 ${merriweather.className}`}>
              Affordable Prices
            </h2>
            <p className={`text-md text-gray-600 ${montserrat.className}`}>
              We believe that quality food should be accessible to everyone, which is why our prices are reasonable without compromising on taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
