"use client";

import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations(); // Hook pour récupérer les traductions

  return (
    <main className="flex justify-between items-center sm:mt-[4rem] md:mt-[6rem] lg:mt-[6rem] 2xl:mt-[3rem]">
      <div className="desc">
        <h1 className="text-center md:ml-[40px] md:mr-[40px] xl:ml-[40px] xl:mr-[40px] 2xl:ml-[220px] 2xl:mr-[220px] xl:text-left font-doto font-bold text-4xl sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px] bg-gradient-to-br from-[#52a8b6] via-[#265b6b] to-[#52a8b6] text-transparent bg-clip-text leading-[45px] sm:leading-[70px] md:leading-[70px] lg:leading-[70px] xl:leading-[80px] 2xl:leading-[85px]">
          {t("home.greeting")}
        </h1>
      </div>
    </main>
  );
};

export default Home;
