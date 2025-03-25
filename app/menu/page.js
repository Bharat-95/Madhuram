"use client";
import React from 'react';
import Image from 'next/image';

const menuItems = {
  dosaSpecials: [
    { name: "Plain Dosa", description: "Simple and crispy dosa served with chutney and sambar.", price: "40/-" },
    { name: "Onion Dosa", description: "Dosa filled with spicy onion mix.", price: "50/-" },
    { name: "Masala Dosa", description: "Crispy dosa filled with spicy potato masala.", price: "50/-" },
    { name: "Ghee Dosa", description: "Dosa coated with aromatic ghee.", price: "50/-" },
    { name: "Ghee Kaara Dosa", description: "Spicy dosa drizzled with ghee.", price: "50/-" },
    { name: "Onion/Masala Dosa with Ghee", description: "Dosa with onion or masala filling and a touch of ghee.", price: "60/-" },
    { name: "Upma Dosa", description: "Dosa filled with soft and tasty upma.", price: "50/-" },
    { name: "Ghee Upma Dosa", description: "Dosa stuffed with upma and ghee.", price: "60/-" },
  ],
  vadaSpecials: [
    { name: "Vada Sambar", description: "Crispy vada served with hot sambar.", price: "50/-" },
    { name: "Vada (2)", description: "Two crispy medu vadas with chutney.", price: "40/-" },
    { name: "Dahi Vada (2)", description: "Soft vadas soaked in curd with a tangy twist.", price: "60/-" },
  ],
  idlySpecials: [
    { name: "Idly (2)", description: "Soft steamed idlis served with chutney and sambar.", price: "25/-" },
    { name: "Idly (4)", description: "Four fluffy idlis with sambar.", price: "40/-" },
    { name: "Ghee Idly (3)", description: "Idlis served with ghee and sambar.", price: "40/-" },
    { name: "Idly Sambar (3)", description: "Idlis immersed in hot sambar.", price: "40/-" },
    { name: "Idly (2) Vada (1)", description: "Two idlis with one crispy vada.", price: "50/-" },
    { name: "Ghee Kaara Idly (3)", description: "Spicy idlis with ghee.", price: "40/-" },
    { name: "Single Idly Vada Sambar", description: "One idly and vada served with sambar.", price: "40/-" },
  ],
  others: [
    { name: "Poori (2)", description: "Fluffy deep-fried pooris with curry.", price: "50/-" },
    { name: "Mysore Bonda (3)", description: "Crispy Mysore bondas served with chutney.", price: "40/-" },
    { name: "Pongal", description: "Rice dish cooked with lentils and spices.", price: "60/-" },
    { name: "Chapathi (2)", description: "Two soft chapathis with curry.", price: "40/-" },
  ],
  flavouredRice: [
    { name: "Jeera Rice", description: "Rice flavored with cumin seeds.", price: "60/-" },
    { name: "Lemon Rice", description: "Rice tossed with lemon and spices.", price: "60/-" },
    { name: "Sambar Rice", description: "Rice mixed with aromatic sambar.", price: "60/-" },
    { name: "Tomato Rice", description: "Tangy and spicy tomato-flavored rice.", price: "60/-" },
    { name: "Curd Rice", description: "Refreshing curd rice with a hint of ginger.", price: "60/-" },
    { name: "Veg Fried Rice", description: "Stir-fried rice with vegetables.", price: "60/-" },
    { name: "Pudhina Rice", description: "Rice infused with fresh mint leaves.", price: "60/-" },
    { name: "Kothimira Rice", description: "Rice with fresh coriander flavor.", price: "60/-" },
    { name: "Tamarind Rice", description: "Tangy and spicy tamarind-flavored rice.", price: "60/-" },
    { name: "Coconut Rice", description: "Rice cooked with grated coconut and spices.", price: "80/-" },
    { name: "Paneer Rice", description: "Rice cooked with soft paneer and spices.", price: "100/-" },
    { name: "Gobi Rice", description: "Rice mixed with crispy fried cauliflower.", price: "80/-" },
  ],
  specialMeals: [
    { name: "Special Meals", description: "Complete meal with variety of dishes.", price: "120/-" },
  ],
};


const Menu = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6 lg:px-32 text-gray-800">
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl shadow-lg mb-12">
        <Image
          src="/Hero4.webp" 
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
{/* Dosa Specials */}
<div className="mb-12">
  <h3 className="text-3xl font-bold text-green-700 mb-4">Dosa Specials</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {menuItems.dosaSpecials.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold">{item.price}</p>
      </div>
    ))}
  </div>
</div>

{/* Vada Specials */}
<div className="mb-12">
  <h3 className="text-3xl font-bold text-green-700 mb-4">Vada Specials</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {menuItems.vadaSpecials.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold">{item.price}</p>
      </div>
    ))}
  </div>
</div>

{/* Idly Specials */}
<div className="mb-12">
  <h3 className="text-3xl font-bold text-green-700 mb-4">Idly Specials</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {menuItems.idlySpecials.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold">{item.price}</p>
      </div>
    ))}
  </div>
</div>

{/* Others */}
<div className="mb-12">
  <h3 className="text-3xl font-bold text-green-700 mb-4">Others</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {menuItems.others.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold">{item.price}</p>
      </div>
    ))}
  </div>
</div>

{/* Flavoured Rice */}
<div className="mb-12">
  <h3 className="text-3xl font-bold text-green-700 mb-4">Flavoured Rice</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {menuItems.flavouredRice.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold">{item.price}</p>
      </div>
    ))}
  </div>
</div>

{/* Special Meals */}
<div className="mb-12">
  <h3 className="text-3xl font-bold text-green-700 mb-4">Special Meals</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {menuItems.specialMeals.map((item, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold">{item.price}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Menu;
