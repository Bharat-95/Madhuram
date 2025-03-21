"use client";
import React from 'react';
import Image from 'next/image';

const menuItems = {
  tiffins: [
    { name: "Idli Sambar", description: "Soft and fluffy idlis served with aromatic sambar and chutney." },
    { name: "Masala Dosa", description: "Crispy dosa filled with spicy potato masala." },
    { name: "Pesarattu", description: "A savory green gram dosa with ginger chutney." },
  ],
  meals: [
    { name: "Veg Thali", description: "A wholesome plate with rice, roti, dal, sabzi, and dessert." },
    { name: "Hyderabadi Biryani", description: "Aromatic basmati rice cooked with marinated spices and vegetables." },
    { name: "Curd Rice", description: "Cooling curd rice with a hint of ginger and curry leaves." },
  ],
  sweets: [
    { name: "Gulab Jamun", description: "Soft milk-based balls soaked in sweet syrup." },
    { name: "Jangri", description: "Sweet spirals soaked in sugary syrup." },
    { name: "Laddu", description: "Round, sweet delights made with besan and ghee." },
  ],
  snacks: [
    { name: "Samosa", description: "Crispy pastry filled with spicy potato mixture." },
    { name: "Mirchi Bajji", description: "Deep-fried green chili fritters." },
    { name: "Pakora", description: "Fritters made with gram flour and veggies." },
  ],
};

const Menu = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 lg:px-32 text-gray-800">
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl shadow-lg mb-12">
        <Image
          src="/menu-hero.jpg"  // Replace with your actual image
          alt="Menu"
          layout="fill"
          objectFit="cover"
          className="rounded-xl brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white drop-shadow-md">
            Our Menu
          </h1>
        </div>
      </div>

      {/* Menu Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Discover Our Delicacies</h2>
        <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Indulge in our wide range of tiffins, meals, sweets, and snacks. Each dish is crafted with love and tradition to give you an unforgettable taste experience.
        </p>
      </div>

      {/* Tiffins */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4">Tiffins</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.tiffins.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4">Meals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.meals.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sweets */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4">Sweets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.sweets.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Snacks */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-green-700 mb-4">Snacks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.snacks.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
