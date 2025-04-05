import React, { useState } from "react";
import { motion } from "framer-motion";

const LostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    item: "",
    description: "",
    photo: null,
    proof_of_ownership: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with form submission logic (e.g., sending to a backend API)
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Lost Item Reporting Form
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Lost Item */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Lost Item</label>
          <input
            type="text"
            name="item"
            value={formData.item}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Lost Item Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Lost Item Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-700"
          />
        </div>

        {/* Proof of Ownership */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Proof of Ownership</label>
          <input
            type="file"
            name="proof_of_ownership"
            onChange={handleChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default LostForm;
