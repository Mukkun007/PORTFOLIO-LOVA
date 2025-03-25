"use client";
import { useState, useEffect } from "react";
import { sendEmail } from "@/app/actions/actions";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Nouveau state pour gérer la notification
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        setEmail("");
        setMessage("");

        // Afficher une notification de succès
        setNotification({
          message: "Email envoyé avec succès !",
          type: "success",
        });
      } else {
        setSubmitStatus("error");

        // Afficher une notification d'erreur
        setNotification({
          message: "Erreur lors de l'envoi de l'email.",
          type: "error",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Erreur lors de l'envoi de l'email:", error);

      // Afficher une notification d'erreur
      setNotification({
        message: "Une erreur inattendue s'est produite.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Effet pour faire disparaître la notification après quelques secondes
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000); // La notification disparaît après 3 secondes

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="relative flex flex-col justify-center items-center bg-gray-900 text-white text-center mt-[5rem]">
      {/* Notification */}
      {notification && (
        <div
          className={`
            fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 
            ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}
            transform ${
              notification
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }
          `}
        >
          {notification.message}
        </div>
      )}

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
          action={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-[10rem] p-3 mt-4 rounded-md bg-[#0f172a] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#52a8b6]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 bg-[#52a8b6] hover:bg-[#41909b] text-white font-bold py-3 px-6 rounded-md transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
