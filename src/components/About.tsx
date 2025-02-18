"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const cards = [
    { title: "Card 1", description: "Description of Card 1" },
    { title: "Card 2", description: "Description of Card 2" },
    { title: "Card 3", description: "Description of Card 3" },
    { title: "Card 4", description: "Description of Card 4" },
    { title: "Card 5", description: "Description of Card 5" },
  ];

  return (
    <>
      <div className="skills flex flex-wrap ml-[200px] mr-[220px] mt-[50px]">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="font-bold text-3xl">What I do</h2>
          <h3 className=" text-xl leading-relaxed">
            Design and develop web applications, both{" "}
            <span className="font-light text-[#00bcd4]">frontend</span> and
            <span className="font-light text-[#ff495d]"> backend</span>, with a
            focus on clean code and user experience. My motto is
            <span className="font-light text-[#ffc107]">
              {" "}
              "See how infinite you are"
            </span>
          </h3>
        </div>
        <div className="w-full md:w-1/2 p-4 relative overflow-visible">
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
                    <div className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-star text-lg"></i>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="mt-2 text-gray-600">{card.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Flèche de navigation à droite */}
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full w-1/5">
            &gt;
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
