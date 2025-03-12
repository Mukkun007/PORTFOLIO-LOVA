"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { FaBriefcase, FaUniversity, FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const t = useTranslations();

  const experiences = [
    {
      date: t("experience.date1"),
      establishment: "Banky Foiben'i Madagasikara",
      position: t("experience.position1"),
      icon: (
        <img
          src="/images/bfm-min-v2_0.png"
          alt="BFM Logo"
          className="w-[32px] h-[30px] sm:w-[37px] sm:h-[35px] md:w-[40px] md:h-[38px] lg:w-[44px] lg:h-[42px]"
        />
      ),
    },
    {
      date: t("experience.date2"),
      establishment: "Ecole Nationale d'Informatique",
      position: t("experience.position2"),
      icon: (
        <img
          src="/images/ENI.png"
          alt="ENI Logo"
          className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px]"
        />
      ),
    },
    {
      date: t("experience.date2"),
      establishment: "BAKANTIMO",
      position: t("experience.position3"),
      icon: (
        <img
          src="/images/bakantimo.png"
          alt="Bakantimo Logo"
          className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px]"
        />
      ),
    },
    {
      date: "2021",
      establishment: "Ecole Nationale d'Informatique",
      position: t("experience.position4"),
      icon: (
        <img
          src="/images/ENI.png"
          alt="ENI Logo"
          className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px]"
        />
      ),
    },
    {
      date: "2021",
      establishment: t("experience.etablissement"),
      position: t("experience.position5"),
      icon: (
        <img
          src="/images/MEN.png"
          alt="MEN Logo"
          className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px]"
        />
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f172a] mt-10">
      <div className="relative w-2/3 lg:w-1/2">
        {/* Ligne verticale encore plus à gauche */}
        <div className="absolute left-[-10px] lg:left-1/2 w-1 bg-[#122b39] h-full lg:-translate-x-1/2"></div>

        {/* Expériences (cartes alignées à droite) */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            } justify-end my-[100px] relative lg:my-[150px] lg:relative`}
          >
            {/* Icône directement SUR la timeline */}
            <div className="w-[50px] sm:w-[55px] md:w-[60px] lg:w-[70px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] bg-[#122b39] rounded-full flex items-center justify-center text-white text-xl lg:text-2xl absolute left-[-33.3px]  sm:left-[-33.5px] md:left-[-36.5px] lg:left-1/2 lg:-translate-x-1/2">
              {exp.icon}
            </div>

            {/* Contenu de l'expérience (aligné à droite) */}
            <div
              className={`bg-white shadow-md p-6 rounded-lg w-4/5 lg:w-2/5 ml-auto lg:ml-0 lg:relative lg:${
                index % 2 === 0 ? "ml-24" : "mr-24"
              }`}
            >
              <h3 className="text-[11px] lg:text-lg sm:text-[14px] md:text-[16px] font-semibold text-gray-700">
                {exp.date}
              </h3>
              <p className="text-blue-600 font-bold text-[11px] sm:text-[20px] md:text-[22px]">
                {exp.establishment}
              </p>
              <p className="text-gray-700 sm:text-[18px]">{exp.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
