"use client";

import { useEffect, useState } from "react";
import { IntlProvider } from "next-intl";
import type { AbstractIntlMessages } from "next-intl";
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

interface PageContentProps {
  initialLocale: string;
  initialMessages: AbstractIntlMessages;
}

export default function PageContent({
  initialLocale,
  initialMessages,
}: PageContentProps) {
  const [locale, setLocale] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("locale") || initialLocale;
    }
    return initialLocale;
  });
  const [messages, setMessages] =
    useState<AbstractIntlMessages>(initialMessages);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale]);

  useEffect(() => {
    if (locale === initialLocale) return;
    async function loadMessages() {
      try {
        const msgs = await import(`../../public/locales/${locale}.json`);
        setMessages(msgs.default);
      } catch (error) {
        console.error("Erreur lors du chargement des messages:", error);
      }
    }
    loadMessages();
  }, [locale, initialLocale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="page bg-[#0f172a] pt-[50px] lg:pt-[100px]">
        <CursorLight />
        <Header />

        <motion.div
          id="home"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
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
