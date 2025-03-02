"use client";

import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations(); // Hook pour récupérer les traductions

  return (
    <main className="flex justify-between items-center">
      <div className="desc">
        <h1 className="text-center 2xl:ml-[220px] 2xl:mr-[220px] 2xl:text-left font-bold text-3xl sm:text-[40px] md:text-[55px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] bg-gradient-to-br from-[#52a8b6] via-[#265b6b] to-[#52a8b6] text-transparent bg-clip-text md:leading-[75px]">
          {t("home.greeting")}
        </h1>
      </div>
    </main>
  );
};

export default Home;
