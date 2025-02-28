"use client";

import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations(); // Hook pour récupérer les traductions

  return (
    <main className="flex flex-col items-center lg:items-start justify-center px-4 sm:px-6 md:px-10 lg:flex-row">
      <div className="desc text-center sm:text-left">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold 
          bg-gradient-to-br from-[#52a8b6] via-[#265b6b] to-[#52a8b6] 
          text-transparent bg-clip-text leading-tight 
          sm:leading-[50px] md:leading-[60px] lg:leading-[75px] 
          mx-auto sm:mx-10 md:mx-20 lg:ml-[220px] lg:mr-[250px]"
        >
          {t("home.greeting")}
        </h1>
      </div>
    </main>
  );
};

export default Home;
