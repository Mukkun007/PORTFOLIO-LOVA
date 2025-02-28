"use client";

import { useTranslations } from "next-intl";
// import { FiMenu } from "react-icons/fi"; // Import de l'icône hamburger

const Header = () => {
  const t = useTranslations();

  return (
    <>
      <nav className="flex justify-between items-center p-4 max-w-4xl mx-auto hidden">
        <ul className="flex space-x-6">
          <li>
            <a href="#home">{t("header.home")}</a>
          </li>
          <li>
            <a href="#biography">{t("header.about")}</a>
          </li>
          <li>
            <a href="#about">{t("header.skills")}</a>
          </li>
          <li>
            <a href="#experience">{t("header.experiences")}</a>
          </li>
          <li>
            <a href="#projects">{t("header.projects")}</a>
          </li>
          <li>
            <a
              href="/CV/Curriculum Vitae - LOVA.pdf"
              download="Lova_CV"
              className="text-white font-bold bg-[#122b39] hover:bg-[#5ee3bf] hover:text-white py-2 px-4 rounded-full transition-all duration-300"
            >
              {t("header.resume")}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
