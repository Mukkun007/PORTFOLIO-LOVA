"use client";

import React from "react";
import { FaGlobe } from "react-icons/fa";

const Langue = ({
  currentLang,
  onChangeLang,
}: {
  currentLang: string;
  onChangeLang: (lang: string) => void;
}) => {
  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "fr" : "en"; // Utilisation correcte
    onChangeLang(newLang);
  };

  return (
    <button
      className="fixed top-9 right-11 bg-[#122b39] text-white p-3 rounded-full shadow-lg hover:bg-[#0e2331] transition-colors duration-300"
      aria-label="Change language"
      onClick={toggleLanguage}
    >
      <FaGlobe size={24} />
    </button>
  );
};

export default Langue;
