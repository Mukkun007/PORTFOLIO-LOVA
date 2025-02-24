"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    { title: "Card 3", description: "Description of Card 3", icon: "fa-code" },
    { title: "Card 4", description: "Description of Card 4", icon: "fa-code" },
    { title: "Card 5", description: "Description of Card 5", icon: "fa-code" },
  ];

  return (
    <>
      <div className="skills flex flex-wrap ml-[200px] mr-[220px] mt-[50px]">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="font-bold text-3xl">What I do</h2>
          <h3 className=" text-xl leading-relaxed">
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
        <div className="w-full md:w-1/2 p-4 relative overflow-visible top-[-20px]">
          {/* Partie pour les cartes */}
          <div className="w-4/5 ">
            {/* Swiper Container */}
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                nextEl: ".swiper-button-next",
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="relative bg-white rounded-lg shadow-md p-6"
                >
                  <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#292b43] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white border-opacity-50">
                      <i className={`fa-solid ${card.icon} text-lg`}></i>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-600 text-center">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-center">
                    {card.description}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Flèche de navigation à droite */}
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2  p-2 rounded-full w-1/5">
            <i className="fa-solid fa-arrow-right text-gray-300 text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
