"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const About = () => {
  const cards = [
    {
      title: "Web Development",
      description:
        "Develop high-performance,\n scalable web applications by optimizing code.",
      icon: "fa-code",
    },
    {
      title: "Project Design",
      description:
        "Design projects that combine creativity and functionality for an optimal user experience.",
      icon: "fa-diagram-project",
    },
    {
      title: "UI/UX Developer",
      description:
        "Create intuitive and visually appealing user interfaces that enhance user experience.",
      icon: "fa-palette",
    },
  ];

  return (
    <div className="skills flex flex-wrap ml-[200px] mr-[220px] mt-[50px]">
      {/* Partie de gauche */}
      <div
        className={`w-full md:w-1/2 p-4 ${cards.length > 2 ? "mt-10" : "mt-5"}`}
      >
        <h2 className="font-bold text-3xl">What I do</h2>
        <h3 className="text-xl leading-relaxed text-gray-300 mt-5">
          Design and develop web applications, both
          <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
            {" "}
            frontend
          </span>{" "}
          and
          <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
            {" "}
            backend
          </span>
          , <br /> with a focus on clean code and user experience. My motto is
          <span className="font-bold text-white hover:text-[#5ee3bf] transition-colors duration-300">
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
                  className="bg-[#122b39] rounded-lg shadow-md p-6 w-[240px] flex-shrink-0 relative"
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
          <div className="flex gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-1 bg-[#122b39] rounded-lg shadow-md p-6 relative"
              >
                {/* Icône positionnée en absolute et centrée */}
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
