"use client";

import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêcher le rechargement de la page

    try {
      const response = await fetch("http://127.0.0.1:8000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          message: "✅ Email envoyé avec succès !",
          type: "success",
        });
        setEmail("");
        setMessage("");
      } else {
        setStatus({
          message: "❌ Erreur : " + (data.error || "Veuillez réessayer."),
          type: "error",
        });
      }
    } catch (error) {
      setStatus({
        message: "❌ Erreur de connexion au serveur.",
        type: "error",
      });
    }

    // Effacer le message après 5 secondes
    setTimeout(() => {
      setStatus(null);
    }, 5000);
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
      <div className="bg-[#193747] p-6 w-[20rem] sm:w-[25rem] md:w-[40rem] lg:w-[45rem] xl:w-[50rem] 2xl:w-[55rem] mt-6 rounded-[20px] shadow-lg flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-[10rem] p-3 mt-4 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <button
            type="submit"
            className="mt-4 bg-[#52a8b6] hover:bg-[#41909b] text-white font-bold py-3 px-6 rounded-md transition"
          >
            Envoyer
          </button>
        </form>

        {/* Affichage de la notification */}
        {status && (
          <p
            className={`mt-4 text-lg font-bold ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
