import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequest {
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { email, message }: EmailRequest = await req.json();

    // Vérifier si les champs sont remplis
    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: "Veuillez remplir tous les champs." },
        { status: 400 }
      );
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou un autre SMTP
      auth: {
        user: process.env.EMAIL_USER, // Ton email expéditeur
        pass: process.env.EMAIL_PASS, // Ton mot de passe (ou app password)
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: email, // Email de l'utilisateur
      to: "fitahianalova@gmail.com", // Ton email
      subject: "Nouveau message de contact",
      text: `De: ${email}\n\n${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email envoyé !" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi de l'email.", error },
      { status: 500 }
    );
  }
}
