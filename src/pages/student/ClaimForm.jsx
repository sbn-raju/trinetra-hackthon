import React, { useState } from "react";
import { motion } from "framer-motion";

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    item: "",
    description: "",
    photo: null,
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic here (e.g., FormData for file upload)
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Found Item Reporting Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Roll No. */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Roll No.</label>
          <input
            type="number"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Found Item */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Found Item</label>
          <input
            type="text"
            name="item"
            value={formData.item}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Found Item Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 w-full text-sm text-gray-700"
          />
        </div>

        {/* Found Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Found Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition duration-200"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ClaimForm;
