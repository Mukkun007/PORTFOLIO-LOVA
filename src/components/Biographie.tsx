"use client";

import { useTranslations } from "next-intl";

const Biographie = () => {
  const t = useTranslations();

  return (
    <div className="biographie container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Image de profil */}
      <div className="w-full md:w-1/4 lg:w-1/5 flex justify-center mb-6 lg:mb-0">
        <div className="w-[12rem] h-[12rem] border-4 border-[#122b39] rounded-full overflow-hidden flex justify-center items-center">
          <img
            src="/images/Image Lova.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Texte Biographie */}
      <div className="w-full md:w-2/4 lg:w-3/5 text-center lg:text-left px-4">
        <h2 className="font-bold text-3xl">{t("biographie.about")}</h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-300">
          {t("biographie.desc.p1")}
          <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
            {" "}
            Symfony
          </span>{" "}
          {t("biographie.desc.p2")}
          <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
            {" "}
            {t("biographie.desc.span2")}
          </span>{" "}
          {t("biographie.desc.p3")}
          <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
            {" "}
            React
          </span>{" "}
          {t("biographie.desc.p4")}
          <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
            {" "}
            Agile
          </span>
          .
        </p>
      </div>

      {/* Réseaux sociaux */}
      <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col items-center lg:items-start px-4 mt-6 lg:mt-0">
        <h2 className="font-bold text-3xl">{t("biographie.connect")}</h2>
        <div className="reseaux flex space-x-4 mt-5">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-4xl text-white hover:text-pink-400 transition-all duration-300"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/fitahiana-lova-andrianomenjanahary-676509273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-4xl text-white hover:text-blue-400 transition-all duration-300"></i>
          </a>
          <a
            href="https://wa.me/+261344806190"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp text-4xl text-white hover:text-green-400 transition-all duration-300"></i>
          </a>
          <a
            href="https://github.com/Mukkun007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-4xl text-white hover:text-gray-400 transition-all duration-300"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Biographie;
