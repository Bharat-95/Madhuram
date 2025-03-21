"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/Hero.avif',
  '/Hero2.jpg',
  '/Hero3.jpg',
  '/Hero4.webp',
  '/Hero5.jpg',
  '/Hero4.jpg',
  '/Hero5.avif',
  '/Why.avif',
  '/Tea.jpg'
];

const Gallery = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 lg:px-32 text-gray-800">
      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-green-700 text-center mb-12">
        Our Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.slice(0, 9).map((src, index) => (
          <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Gallery;
