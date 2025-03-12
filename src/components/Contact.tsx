"use client";

import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Pour afficher le statut

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message) {
      setStatus("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.error || "Une erreur est survenue.");
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi du message.");
    }
  };

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
      <div className="bg-[#193747] p-6 w-[35rem] mt-6 rounded-[20px] shadow-lg flex flex-col items-center">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-[10rem] p-3 mt-4 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <button
            type="submit"
            className="mt-4 bg-[#52a8b6] hover:bg-[#41909b] text-white font-bold py-3 px-6 rounded-md transition"
          >
            Envoyer
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
