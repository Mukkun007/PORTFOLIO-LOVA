"use client";

import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations(); // Hook pour récupérer les traductions

  return (
    <main className="flex justify-between items-center">
      <div className="desc">
        <h1 className="text-center md:ml-[40px] md:mr-[40px] xl:ml-[40px] xl:mr-[40px] 2xl:ml-[140px] 2xl:mr-[140px] xl:text-left font-bold text-3xl sm:text-[40px] md:text-[45px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] bg-gradient-to-br from-[#52a8b6] via-[#265b6b] to-[#52a8b6] text-transparent bg-clip-text md:leading-[75px]">
          {t("home.greeting")}
        </h1>
      </div>
    </main>
  );
};

export default Home;
