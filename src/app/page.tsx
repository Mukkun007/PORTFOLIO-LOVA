"use client";

import { useEffect, useState } from "react";
import { IntlProvider } from "next-intl";
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

export default function Page() {
  const [locale, setLocale] = useState("en"); // Gestion de la langue
  // const messages = require(`../../public/locales/${locale}.json`);
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
    return <div>Chargement...</div>; // Afficher un loader pendant le chargement des traductions
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="page pt-[50px] lg:pt-[100px]">
        <CursorLight />
        <Header />
        <div id="home">
          <Home />
        </div>
        <div id="biography">
          <Biographie />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="cotacts">
          <Contacts />
        </div>
        {/* <div id="code">
          <Code />
        </div> */}
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
