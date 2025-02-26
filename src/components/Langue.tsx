"use client";

import React from "react";

const Langue = ({
  currentLang,
  onChangeLang,
}: {
  currentLang: string;
  onChangeLang: (lang: string) => void;
}) => {
  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "fr" : "en"; // Change la langue
    onChangeLang(newLang);
  };

  return (
    <button
      className="fixed top-9 right-11 flex items-center gap-2 bg-[#122b39] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#0e2331] transition-colors duration-300"
      aria-label="Change language"
      onClick={toggleLanguage}
    >
      {/* Affichage du drapeau correspondant */}
      <span className="text-xl">{currentLang === "en" ? "🇺🇸" : "🇫🇷"}</span>
      <span>{currentLang === "en" ? "English" : "Français"}</span>
    </button>
  );
};

export default Langue;
