"use client";

import { useTranslations } from "next-intl";
// import { FiMenu } from "react-icons/fi"; // Import de l'icône hamburger

const Header = () => {
  const t = useTranslations();

  return (
    <>
      <nav className="fixed top-0 lg:top-5 left-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-auto lg:max-w-[900px] lg:h-[80px] lg:z-10 lg:rounded-2xl lg:shadow-md lg:hover:shadow-lg lg:transition-shadow duration-300 bg-[#0f172a] p-4 flex justify-center lg:justify-between items-center h-[60px] z-10 shadow-md">
        <ul className="flex gap-10 lg:gap-5 sm:gap-[4rem] md:gap-[6rem] list-none m-0 p-0 ml-2 mr-2 text-white text-xl">
          <li>
            <a
              href="#home"
              className="transition-colors duration-300 hover:text-[#00bcd4] block lg:hidden"
            >
              <i className="fas fa-home"></i>
            </a>
            <a
              href="#home"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4] hidden lg:block"
            >
              {t("header.home")}
            </a>
          </li>
          <li>
            <a
              href="#biography"
              className="transition-colors duration-300 hover:text-[#00bcd4] block lg:hidden"
            >
              <i className="fas fa-user"></i> {/* 👤 Icône User */}
            </a>
            <a
              href="#biography"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4] hidden lg:block"
            >
              {t("header.about")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-[#00bcd4] block lg:hidden"
            >
              <i className="fas fa-lightbulb"></i> {/* 💡 Icône Skills */}
            </a>
            <a
              href="#about"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4] hidden lg:block"
            >
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="transition-colors duration-300 hover:text-[#00bcd4] block lg:hidden"
            >
              <i className="fas fa-briefcase"></i> {/* 💼 Icône Expérience */}
            </a>
            <a
              href="#experience"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4] hidden lg:block"
            >
              {t("header.experiences")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-[#00bcd4] block lg:hidden"
            >
              <i className="fas fa-folder-open"></i> {/* 📂 Icône Projets */}
            </a>
            <a
              href="#projects"
              className="text-white text-lg font-light transition-colors duration-300 hover:text-[#00bcd4] hidden lg:block"
            >
              {t("header.projects")}
            </a>
          </li>
          <li>
            <a
              href="/CV/Curriculum Vitae - LOVA.pdf"
              download="Lova_CV"
              className="transition-colors duration-300 hover:text-[#00bcd4] block lg:hidden"
            >
              <i className="fas fa-download"></i>
            </a>
          </li>
        </ul>

        <div className="mr-2">
          <a
            href="/CV/Curriculum Vitae - LOVA.pdf"
            download="Lova_CV"
            className="text-white font-bold bg-[#122b39] hover:bg-[#5ee3bf] hover:text-white py-2 px-4 rounded-full transition-all duration-300 hidden lg:block"
          >
            {t("header.resume")}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
