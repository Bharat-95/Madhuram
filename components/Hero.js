"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const images = [
  '/Hero.avif',
  '/Hero2.jpg',
  '/Hero3.jpg',
  '/Hero4.webp',
  '/Hero5.avif'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle the next slide
  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Reset the slide to the start when it reaches the end
  useEffect(() => {
    if (currentIndex >= images.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Delay to reset after transition ends
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="relative w-screen -top-1 overflow-hidden">
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {[...images, images[0]].map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              alt={`Slide ${index + 1}`}
              src={src}
              width={1000}
              height={1000}
              className="w-screen lg:h-[90vh] h-[40vh] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
