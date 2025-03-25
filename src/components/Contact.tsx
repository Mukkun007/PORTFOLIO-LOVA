"use client";
import { useState } from "react";
import { sendEmail } from "@/app/actions/actions";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Erreur lors de l'envoi de l'email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-gray-900 text-white text-center mt-[5rem]">
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
          {/* Messages de statut sous le bouton */}
          {submitStatus === "success" && (
            <p className="mt-2 text-green-500">Email envoyé avec succès !</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-2 text-red-500">
              Erreur lors de l&apos;envoi de l&apos;email.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
