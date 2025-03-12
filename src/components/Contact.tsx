"use client";

import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("Erreur de connexion.");
    }
  };

  return (
    <section className="py-20 px-5 bg-[#0f172a] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#52a8b6]">
          Contactez-moi
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Vous pouvez me contacter directement via l'email{" "}
          <a
            href="mailto:dahejsdkahjkfgajk@gmail.com"
            className="text-[#52a8b6] font-bold"
          >
            dahejsdkahjkfgajk@gmail.com
          </a>{" "}
          ou en utilisant ce formulaire.
        </p>

        {/* Formulaire */}
        <form
          className="bg-[#122b39] p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-300 text-left text-sm mb-2">
              Votre Email
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#52a8b6]"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-left text-sm mb-2">
              Votre Message
            </label>
            <textarea
              rows={4}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#52a8b6]"
              placeholder="Votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#52a8b6] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#265b6b] transition"
          >
            Envoyer
          </button>

          {/* Message de statut */}
          {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
