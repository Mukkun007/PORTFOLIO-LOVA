"use client";

import { useState } from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 text-white text-center mt-[5rem]">
      <h1 className="font-bold text-3xl sm:text-[40px] md:text-[35px] lg:text-[40px] xl:text-3xl 2xl:text-[40px]">
        Contact Me
      </h1>
      <p className="mt-4 text-lg text-center text-gray-300 ml-[3rem] mr-[3rem]">
        Vous pouvez me contacter par mail à{" "}
        <a
          href="mailto:fitahianalova@gmail.com"
          className="text-[#52a8b6] font-bold"
        >
          fitahianalova@gmail.com
        </a>{" "}
        ou directement via ce formulaire.
      </p>
      <div className="bg-[#193747] text-white p-6 w-[35rem] h-[40rem] mt-6 rounded-[20px] ml-[2rem] mr-[2rem] shadow-lg flex flex-col items-center">
        <div className="bg-[#122b39] text-white p-5 w-[33rem] h-[39rem] rounded-[20px] ml-[2rem] mr-[2rem] shadow-lg flex flex-col items-center">
          <input
            type="text"
            placeholder="Votre addresse e-mail"
            className="w-full p-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52a8b6]"
          />
          <input
            type="text"
            placeholder="Votre message"
            className="w-full h-[30rem] p-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52a8b6] mt-[2rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
