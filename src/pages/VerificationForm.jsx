import React, { useState } from "react";
import { motion } from "framer-motion";

const VerificationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    proof: null,
    phone: "",
  });

  const lostItem = {
    item: "Black Backpack",
    description: "A black backpack with a laptop and notebooks inside. Lost near Library Block on April 10th.",
    location: "Library Block",
    image1: "https://source.unsplash.com/400x300/?backpack",
    image2: "https://source.unsplash.com/400x300/?lost,item",
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Claim Submitted", formData);
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col md:flex-row bg-gray-50 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Side */}
      <div className="md:w-1/2 w-full flex flex-col items-center gap-6 p-4">
        {/* Images */}
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            src={lostItem.image1}
            alt="Lost Item 1"
            className="w-48 h-36 object-cover rounded-xl shadow-md"
          />
          {/* <img
            src={lostItem.image2}
            alt="Lost Item 2"
            className="w-48 h-36 object-cover rounded-xl shadow-md"
          /> */}
        </div>

        {/* Item Details */}
        <div className="bg-white w-full max-w-md p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Lost Item Details</h2>
          <p><span className="font-semibold">Item:</span> {lostItem.item}</p>
          <p><span className="font-semibold">Location:</span> {lostItem.location}</p>
          <p><span className="font-semibold">Description:</span> {lostItem.description}</p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">How to Claim?</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-blue-800">
            <li>Provide your student ID card.</li>
            <li>Give exact details of the lost item.</li>
            <li>Match proof if any (photo, receipt, etc.).</li>
            <li>Visit the Admin Block during working hours.</li>
            <li>Contact: lostandfound@college.edu</li>
          </ul>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full p-6 bg-white rounded-xl shadow-lg mt-6 md:mt-0 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
            Claim Lost Item
          </h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Roll No */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll No.</label>
            <input
              type="text"
              name="rollNo"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Proof of Ownership */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Proof of Ownership</label>
            <input
              type="file"
              name="proof"
              onChange={handleChange}
              accept="image/*"
              required
              className="mt-1 block w-full text-sm text-gray-700"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-200"
          >
            Submit Claim
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default VerificationForm;
