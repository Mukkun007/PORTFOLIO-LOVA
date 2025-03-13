"use client";

import { useState } from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 text-white text-center mt-[5rem]">
      <h1 className="font-bold text-3xl">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-300">
        Vous pouvez me contacter par mail à{" "}
        <a
          href="mailto:fitahianalova@gmail.com"
          className="text-[#52a8b6] font-bold"
        >
          fitahianalova@gmail.com
        </a>{" "}
        ou directement via ce formulaire.
      </p>
      <div className="bg-[#193747] p-6 w-[20rem] sm:w-[25rem] md:w-[40rem] lg:w-[45rem] xl:w-[50rem] 2xl:w-[55rem] mt-6 rounded-[20px] shadow-lg flex flex-col items-center">
        <form className="w-full flex flex-col items-center">
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="w-full p-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <textarea
            placeholder="Votre message"
            className="w-full h-[10rem] p-3 mt-4 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <button
            type="submit"
            className="mt-4 bg-[#52a8b6] hover:bg-[#41909b] text-white font-bold py-3 px-6 rounded-md transition"
          >
            Envoyer
          </button>
        </form>
        {status && <p className="mt-4 text-lg text-[#52a8b6]">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
