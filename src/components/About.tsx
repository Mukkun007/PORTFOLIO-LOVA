"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const About = () => {
  const cards = [
    {
      title: "Web Development",
      description:
        "Développer des applications web performantes et évolutives en optimisant le code.",
      icon: "fa-code",
    },
    {
      title: "Project Design",
      description:
        "Concevoir des projets alliant créativité et fonctionnalité pour une expérience utilisateur optimale.",
      icon: "fa-diagram-project",
    },
    {
      title: "UI/UX Design",
      description:
        "Créer des interfaces modernes et intuitives pour une expérience utilisateur fluide.",
      icon: "fa-paint-brush",
    },
    {
      title: "UI/UX Design",
      description:
        "Créer des interfaces modernes et intuitives pour une expérience utilisateur fluide.",
      icon: "fa-paint-brush",
    },
  ];

  return (
    <div className="skills flex flex-wrap ml-[200px] mr-[220px] mt-[50px]">
      {/* Partie de gauche */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="font-bold text-3xl">What I do</h2>
        <h3 className="text-xl leading-relaxed">
          Design and develop web applications, both{" "}
          <span className="font-light text-[#00bcd4]">frontend</span> and
          <span className="font-light text-[#ff495d]"> backend</span>, <br />{" "}
          with a focus on clean code and user experience. My motto is
          <span className="font-light text-[#ffc107]">
            {" "}
            "See how infinite you are"
          </span>
        </h3>
      </div>

      {/* Partie droite */}
      <div className="w-full md:w-1/2 p-4">
        {cards.length > 2 ? (
          // Swiper si plus de 2 cartes
          <div className="relative overflow-hidden">
            <Swiper
              spaceBetween={15} // Espace réduit entre les cartes pour voir la suivante
              slidesPerView={2.2} // Affiche 2 cartes et une partie de la 3e
              grabCursor={true} // Curseur amélioré
              className="w-full"
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[#434451] rounded-lg shadow-md p-6 w-[240px] flex-shrink-0"
                >
                  <div className="flex justify-center">
                    <div className="bg-[#292b43] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white border-opacity-50">
                      <i className={`fa-solid ${card.icon} text-lg`}></i>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white text-center mt-2">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-white text-center">
                    {card.description}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Affichage flex normal si ≤ 2 cartes
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-1 bg-[#434451] rounded-lg shadow-md p-6"
              >
                <div className="flex justify-center mb-2">
                  <div className="bg-[#292b43] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white border-opacity-50">
                    <i className={`fa-solid ${card.icon} text-lg`}></i>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white text-center">
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
