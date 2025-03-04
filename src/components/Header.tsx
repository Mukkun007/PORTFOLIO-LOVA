"use client";

import { useTranslations } from "next-intl";
// import { FiMenu } from "react-icons/fi"; // Import de l'icône hamburger

const Header = () => {
  const t = useTranslations();

  return (
    <>
      <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#0f172a] p-3 md:p-4 flex justify-between items-center w-auto max-w-[900px] h-[80px] z-10 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <ul className="flex gap-5 md:gap-6 list-none m-0 p-0">
          <li>
            <a
              href="#home"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4]"
            >
              {t("header.home")}
            </a>
          </li>
          <li>
            <a
              href="#biography"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4]"
            >
              {t("header.about")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4]"
            >
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4]"
            >
              {t("header.experiences")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4]"
            >
              {t("header.projects")}
            </a>
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
