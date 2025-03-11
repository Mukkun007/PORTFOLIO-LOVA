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
    const newLang = currentLang === "en" ? "fr" : "en";
    onChangeLang(newLang);
  };

  return (
    <button
      className="fixed top-9 right-11 text-white font-light px-4 py-2 rounded-full shadow-lg hover:bg-[#265b6b] transition-colors duration-300 z-10 hidden xl:block"
      aria-label="Change language"
      onClick={toggleLanguage}
    >
      {currentLang.toUpperCase()}
    </button>
  );
};

export default Langue;
