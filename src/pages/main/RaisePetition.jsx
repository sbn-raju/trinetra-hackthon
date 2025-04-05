import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RaisePetation = () => {
  const [activeTab, setActiveTab] = useState("found");


  const navigate = useNavigate();

  const instructions = [
    "Provide accurate information.",
    "Upload a clear photo if available.",
    "Describe the item/pet in detail.",
    "Include date and time if known.",
    "Mention the location found/lost.",
    "Don't submit false reports.",
    "Ensure contact details are correct.",
    "Use real names and roll numbers.",
    "Avoid duplicate entries.",
    "Check status after submitting.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-white px-4 py-10"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-3">
        Raise Petation
      </h1>

      {/* Short Description */}
      <p className="text-center text-gray-600 text-lg mb-8">
        Please select whether you're reporting a found or lost item/pet and follow the instructions to complete your petition.
      </p>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => navigate("/claim-form")}
          className={`px-10 py-10 rounded-md font-medium transition ${
            activeTab === "found"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Found Petation
        </button>
        <button
          onClick={() => navigate("/lost-form")}
          className={`px-10 py-10 rounded-md  font-medium transition ${
            activeTab === "lost"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Lost Petation
        </button>
      </div>

      {/* Instruction Section */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-inner max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Instructions to follow:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
          {instructions.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default RaisePetation;
