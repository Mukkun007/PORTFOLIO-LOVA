"use client";

import React from "react";
import { FaGlobe } from "react-icons/fa";

const Langue = () => {
  return (
    <button
      className="fixed top-9 right-11 bg-[#122b39] text-white p-3 rounded-full shadow-lg hover:bg-[#0e2331] transition-colors duration-300"
      aria-label="Change language"
    >
      <FaGlobe size={24} />
    </button>
  );
};

export default Langue;
