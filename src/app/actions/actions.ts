"use server";
import nodemailer from "nodemailer";

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  // Choisissez votre service d'envoi d'email (par exemple Gmail, SendGrid, etc.)
  service: "gmail", // ou utilisez SMTP direct
  auth: {
    user: process.env.EMAIL_USER, // Votre email
    pass: process.env.EMAIL_PASS, // Votre mot de passe ou mot de passe d'application
  },
});

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    // Envoyer l'email
    await transporter.sendMail({
      from: email, // Email de l'expéditeur
      to: "fitahianalova@gmail.com", // Votre adresse email de destination
      subject: "Nouveau message de contact",
      text: `
        De: ${email}
        
        Message:
        ${message}
      `,
      replyTo: email,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, error };
  }
}
