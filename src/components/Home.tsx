"use client";

import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations(); // Hook pour récupérer les traductions

  return (
    <main className="flex justify-between bg-[#0f172a] items-center mt-[6.5rem] sm:mt-[4rem] md:mt-[6rem] lg:mt-[6rem] 2xl:mt-[3rem]">
      <div className="desc bg-[#0f172a]">
        <h1 className="text-center bg-[#0f172a] md:ml-[40px] md:mr-[40px] xl:ml-[40px] xl:mr-[40px] 2xl:ml-[220px] 2xl:mr-[220px] xl:text-center custom2-font text-[2rem] sm:text-[45px] md:text-[50px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px] bg-gradient-to-br from-[#52a8b6] via-[#265b6b] to-[#52a8b6] text-transparent bg-clip-text leading-[45px] sm:leading-[70px] md:leading-[70px] lg:leading-[70px] xl:leading-[80px] 2xl:leading-[85px]">
          {t("home.greeting1")}
          <span className="custom-font bg-[#0f172a] text-[#265b6b]">
            Tahiana Lova
          </span>
          {t("home.greeting2")}
        </h1>
      </div>
    </main>
  );
};

export default Home;
