"use client";
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 lg:px-32 text-gray-800">
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl shadow-lg mb-12">
        <Image
          src="/Hero.avif"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="rounded-xl brightness-75"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white drop-shadow-md">
            About Us
          </h1>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Our Story</h2>
        <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Welcome to Madhuram Hotel, where tradition meets taste. Established in the heart of Yadagirigutta, our journey began with a simple mission: to serve authentic and flavorful dishes that bring joy to every meal. Over the years, we have become a beloved spot for locals and travelers alike, offering a variety of tiffins, meals, sweets, and snacks.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-600">
              We use the finest ingredients to craft dishes that taste as good as they look.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tradition</h3>
            <p className="text-gray-600">
              Our recipes have been passed down through generations, preserving authentic flavors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">
              We strive to create memorable dining experiences with every visit.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Why Choose Us?</h2>
        <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Madhuram Hotel is not just a place to eat, but a destination to experience the essence of traditional Indian hospitality. Our commitment to quality and customer satisfaction makes us stand out from the rest. Whether it’s our delicious tiffins, hearty meals, or tempting sweets and snacks, every dish is crafted with love and passion.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white text-lg font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition-transform transform hover:scale-105 active:scale-95">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
