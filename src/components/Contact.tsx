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
    </div>
  );
};

export default Contact;
