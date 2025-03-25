"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import {
  Home,
  User,
  Lightbulb,
  Briefcase,
  FolderOpen,
  // Download,
} from "lucide-react";

const Header = () => {
  const t = useTranslations();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg: 1024px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (!isLargeScreen) return; // Si ce n'est pas un écran large, on ignore la logique Dynamic Island

      if (window.scrollY === 0) {
        setIsScrolled(false);
        if (timeout) clearTimeout(timeout);
        return;
      }
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolled(true);
        setIsOpen(false);
      }, 200); // Délai avant disparition
    };

    //   else if (window.scrollY > lastScrollY) {
    //     setIsScrolled(true);
    //     setIsOpen(false);
    //   } else if (window.scrollY < lastScrollY) {
    //     setIsScrolled(true);
    //     setIsOpen(false);
    //   }
    //   setLastScrollY(window.scrollY);
    // };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, [isLargeScreen]);

  return (
    <>
      {/* Bouton pour ouvrir/fermer le menu quand il est réduit */}
      {isLargeScreen && isScrolled && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-5 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-[#0f172a] bg-opacity-90 z-10 rounded-full 
                   transition-opacity duration-300 
                   shadow-[0_0_5px_5px_rgba(0,191,255,0.8)]"
        >
          <div className="w-[40px] h-[15px]"></div>
        </button>
      )}
      {(isOpen || !isScrolled || !isLargeScreen) && (
        <nav className="fixed top-0 lg:top-5 left-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-auto lg:max-w-[900px] lg:h-[80px] lg:z-10 lg:rounded-2xl lg:shadow-md lg:hover:shadow-lg lg:transition-shadow duration-300 bg-[#0f172a] bg-opacity-90 p-4 flex justify-center lg:justify-between items-center h-[60px] z-10 shadow-xl shadow-black/30">
          <ul
            className={`flex gap-10 lg:gap-[4rem] xl:gap-10 sm:gap-[4rem] ${
              isLargeScreen && isScrolled && !isOpen ? "hidden" : "flex"
            }  md:gap-[6rem] list-none m-0 p-0 ml-2 mr-2 text-white text-xl xl:text-center`}
          >
            <li>
              <a
                href="#home"
                className="transition-colors duration-300 hover:text-[#00bcd4] block xl:hidden"
              >
                <i className="fas fa-home"></i>
              </a>
              <a
                href="#home"
                className="items-center gap-2 text-white text-lg font-poppins font-semibold transition-colors duration-300 hover:text-[#00bcd4] hidden xl:flex"
              >
                <Home size={20} className="opacity-70" />
                {t("header.home")}
              </a>
            </li>
            <li>
              <a
                href="#biography"
                className="transition-colors duration-300 hover:text-[#00bcd4] block xl:hidden"
              >
                <i className="fas fa-user"></i> {/* 👤 Icône User */}
              </a>
              <a
                href="#biography"
                className="items-center gap-2 text-white text-lg font-poppins font-semibold transition-colors duration-300 hover:text-[#00bcd4] hidden xl:flex"
              >
                <User size={20} className="opacity-70" />
                {t("header.about")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition-colors duration-300 hover:text-[#00bcd4] block xl:hidden"
              >
                <i className="fas fa-lightbulb"></i> {/* 💡 Icône Skills */}
              </a>
              <a
                href="#about"
                className="items-center gap-2 text-white text-lg font-poppins font-semibold transition-colors duration-300 hover:text-[#00bcd4] hidden xl:flex"
              >
                <Lightbulb size={20} className="opacity-70" />
                {t("header.skills")}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="transition-colors duration-300 hover:text-[#00bcd4] block xl:hidden"
              >
                <i className="fas fa-briefcase"></i> {/* 💼 Icône Expérience */}
              </a>
              <a
                href="#experience"
                className="items-center gap-2 text-white text-lg font-poppins font-semibold transition-colors duration-300 hover:text-[#00bcd4] hidden xl:flex"
              >
                <Briefcase size={20} className="opacity-70" />
                {t("header.experiences")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition-colors duration-300 hover:text-[#00bcd4] block xl:hidden"
              >
                <i className="fas fa-folder-open"></i> {/* 📂 Icône Projets */}
              </a>
              <a
                href="#projects"
                className="items-center gap-2 text-white text-lg font-poppins font-semibold transition-colors duration-300 hover:text-[#00bcd4] hidden xl:flex"
              >
                <FolderOpen size={20} className="opacity-70" />
                {t("header.projects")}
              </a>
            </li>
            <li>
              <a
                href="/CV/Curriculum Vitae - LOVA.pdf"
                download="Lova_CV"
                className="transition-colors duration-300 hover:text-[#00bcd4] md:block xl:hidden hidden"
              >
                <i className="fas fa-download"></i>
              </a>
            </li>
          </ul>

          <div className="mr-2">
            <a
              href="/CV/Curriculum Vitae - LOVA.pdf"
              download="Lova_CV"
              className="text-white font-bold bg-[#122b39] hover:bg-[#5ee3bf] hover:text-white py-2 px-4 rounded-full transition-all duration-300 hidden xl:block"
            >
              {t("header.resume")}
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
