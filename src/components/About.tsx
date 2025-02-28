"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const About = () => {
  const t = useTranslations();

  const cards = [
    {
      title: t("about.card.title1"),
      description: t("about.card.desc1"),
      icon: "fa-code",
    },
    {
      title: t("about.card.title2"),
      description: t("about.card.desc2"),
      icon: "fa-diagram-project",
    },
    {
      title: t("about.card.title3"),
      description: t("about.card.desc3"),
      icon: "fa-palette",
    },
  ];

  return (
    <div className="skills flex flex-wrap mx-4 lg:mx-[200px] mt-10">
      {/* Partie gauche */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="font-bold text-3xl">{t("about.what")}</h2>
        <h3 className="text-xl leading-relaxed text-gray-300 mt-5">
          {t("about.desc.p1")}
          <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
            {" "}
            frontend
          </span>{" "}
          {t("biographie.desc.p4")}
          <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
            {" "}
            backend
          </span>
          , <br /> {t("about.desc.p2")}
          <span className="font-bold text-white hover:text-[#5ee3bf] transition-colors duration-300">
            {" "}
            "{t("about.desc.span1")}"
          </span>
        </h3>
      </div>

      {/* Partie droite */}
      <div className="w-full md:w-1/2 p-4">
        {cards.length > 2 ? (
          // Swiper si plus de 2 cartes
          <div className="relative overflow-hidden">
            <Swiper
              spaceBetween={15}
              slidesPerView={1.2} // Mieux adapté pour mobile
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.2 },
              }}
              grabCursor={true}
              className="w-full"
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[#122b39] rounded-lg shadow-md p-6 w-[220px] flex-shrink-0 relative"
                >
                  <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#122b39] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white border-opacity-50">
                      <i className={`fa-solid ${card.icon} text-lg`}></i>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white hover:text-[#5ee3bf] text-center mt-8">
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 text-white text-center"
                    dangerouslySetInnerHTML={{
                      __html: card.description.replace(/\n/g, "<br/>"),
                    }}
                  ></p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Affichage flex normal si ≤ 2 cartes
          <div className="flex flex-col sm:flex-row gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-1 bg-[#122b39] rounded-lg shadow-md p-6 relative"
              >
                {/* Icône centrée */}
                <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#122b39] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white border-opacity-50">
                    <i className={`fa-solid ${card.icon} text-lg`}></i>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white hover:text-[#5ee3bf] text-center mt-8">
                  {card.title}
                </h3>
                <p className="mt-2 text-white text-center">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
