"use client";

import { useEffect, useState } from "react";
import { IntlProvider } from "next-intl";
import { motion } from "framer-motion";
import CursorLight from "@/components/CursorLight";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Biographie from "@/components/Biographie";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Langue from "@/components/Langue";
import { AppLoader } from "@/components/AppLoader";

export default function Page() {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        const messages = await import(`../../public/locales/${locale}.json`);
        setMessages(messages.default);
      } catch (error) {
        console.error("Erreur lors du chargement des messages:", error);
      }
    }
    loadMessages();
  }, [locale]);

  if (!messages) {
    return <AppLoader />;
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="page pt-[50px] lg:pt-[100px]">
        <CursorLight />
        <Header />

        {/* Animation au scroll pour chaque section */}
        <motion.div
          id="home"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }} // Animation déclenchée une seule fois
        >
          <Home />
        </motion.div>

        <motion.div
          id="biography"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Biographie />
        </motion.div>

        <motion.div
          id="about"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>

        <motion.div
          id="experience"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.div>

        <motion.div
          id="projects"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>

        <motion.div
          id="contacts"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Contacts />
        </motion.div>

        <div>
          <ScrollToTop />
        </div>
        <div>
          <Langue onChangeLang={setLocale} currentLang={locale} />
        </div>
      </div>
    </IntlProvider>
  );
}
