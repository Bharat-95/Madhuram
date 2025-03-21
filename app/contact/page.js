"use client";
import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from 'next/image';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submission:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-6 lg:px-32 text-gray-800">
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] lg:h-[70vh] overflow-hidden rounded-xl shadow-lg mb-12">
        <Image
          src="/Why.avif"  // Replace with your actual image
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          className="rounded-xl brightness-75"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white drop-shadow-md">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4 flex justify-center items-center gap-2">
          <FaPhoneAlt /> +91 97002 04536
        </p>
        <p className="text-lg text-gray-700 mb-4 flex justify-center items-center gap-2">
          <FaEnvelope /> info@madhuramhotel.com
        </p>
        <p className="text-lg text-gray-700 mb-4 flex justify-center items-center gap-2">
          <FaMapMarkerAlt /> Yadagirigutta, Telangana, India
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-pink-500 hover:text-pink-700 transition duration-300">
            <FaInstagram size={28} />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <FaFacebookF size={28} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
            <FaTwitter size={28} />
          </a>
          <a href="#" className="text-red-600 hover:text-red-800 transition duration-300">
            <FaYoutube size={28} />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-md shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
          <p className="text-lg">Your message has been sent successfully. We will get back to you soon!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Send Us a Message</h3>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:outline-none"
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:outline-none"
            rows="4"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition-transform transform hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
