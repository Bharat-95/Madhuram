"use client";
import React, { useState } from 'react';

const FranchiseInquiry = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Franchise Inquiry:', { name, phone, message });
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-100 py-10 px-6 lg:px-20 rounded-xl shadow-md">
      {/* Title */}
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Interested in Franchise?
      </h2>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-md shadow-md text-center">
          <h3 className="text-xl font-semibold">Thank you!</h3>
          <p>Your inquiry has been submitted successfully. We will get in touch with you soon!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-center"
        >
          {/* Name Input */}
          <div>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full lg:w-1/2 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:outline-none mb-3"
              placeholder="Your Name"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full lg:w-1/2 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:outline-none mb-3"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full lg:w-1/2 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:outline-none mb-4"
              placeholder="Your Message"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-green-900 transition-transform transform hover:scale-105 active:scale-95"
          >
            Submit Inquiry
          </button>
        </form>
      )}
    </div>
  );
};

export default FranchiseInquiry;
