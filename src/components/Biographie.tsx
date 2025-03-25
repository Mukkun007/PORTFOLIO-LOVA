"use client";

import { useTranslations } from "next-intl";

const Biographie = () => {
  const t = useTranslations();

  return (
    <>
      <div className="biographie bg-[#0f172a] flex flex-wrap ml-[40px] 2xl:ml[100px] mr-[40px] 2xl:mr[100px] mt-[5rem] sm:mt-[5rem] md:mt-[6rem] 2xl:ml-[140px] 2xl:mr-[140px] md:justify-center">
        <div className="w-full lg:w-1/5 p-4 flex justify-center items-center">
          <div className="w-[12rem] lg:w-[11rem] xl:w-[12rem] h-[12rem] lg:h-[10rem] xl:h-[12rem] border-4 border-[#122b39] rounded-full overflow-hidden flex justify-center items-center">
            <img
              src="/images/Image Lova.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-3/5 p-4">
          <h2 className="text-center lg:mt-5 lg:text-left font-bold text-3xl sm:text-[40px] md:text-[35px] lg:text-[40px] xl:text-3xl 2xl:text-[40px]">
            {t("biographie.about")}
          </h2>
          <h3 className="text-center lg:mr-[5rem] lg:text-left mt-5 text-xl leading-relaxed text-gray-300">
            {t("biographie.desc.p1")}
            <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
              {" "}
              2000
            </span>{" "}
            {t("biographie.desc.in")}{" "}
            <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
              {" "}
              Antananarivo
            </span>
            ,{" "}
            <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
              {" "}
              Madagascar
            </span>
            , {t("biographie.desc.p2")} {t("biographie.desc.in")}{" "}
            <span className="font-bold text-white hover:text-[#ff495d] transition-colors duration-300">
              {" "}
              Ambohipo
            </span>
            . {t("biographie.desc.p3")}{" "}
            <span className="font-bold text-white hover:text-[#fdd835] transition-colors duration-300">
              {" "}
              {t("biographie.desc.span2")}
            </span>{" "}
            {t("biographie.desc.and")}
            <span className="font-bold text-white hover:text-[#fdd835] transition-colors duration-300">
              {" "}
              {t("biographie.desc.span3")}
            </span>
            {t("biographie.desc.en")}
            <span className="font-bold text-white hover:text-[#fdd835] transition-colors duration-300">
              {" "}
              {t("biographie.desc.span4")}
            </span>{" "}
            {t("biographie.desc.p4")}{" "}
            <span className="font-bold text-white hover:text-[#00bcd4] transition-colors duration-300">
              {" "}
              {t("biographie.desc.p5")}
            </span>
            .
          </h3>
          <div className="flex justify-center w-full lg:justify-start mt-5">
            <a
              href="/CV/Curriculum Vitae - LOVA.pdf"
              download="Lova_CV"
              className="text-white text-xl font-bold bg-[#122b39] hover:bg-[#5ee3bf] hover:text-white py-2 px-4 rounded-full transition-all duration-300 md:hidden"
            >
              {t("header.resume")}
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/5 p-4">
          <h2 className="text-center lg:mt-5 lg:text-left font-bold text-3xl sm:text-[40px] md:text-[35px] lg:text-[40px] xl:text-3xl 2xl:text-[40px]">
            {t("biographie.connect")}
          </h2>
          <div className="reseaux flex justify-center lg:justify-start space-x-4 lg:space-x-6 mt-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-4xl text-white hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300"></i>{" "}
              {/* Instagram */}
            </a>
            <a
              href="https://www.linkedin.com/in/fitahiana-lova-andrianomenjanahary-676509273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-4xl text-white hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300"></i>{" "}
              {/* LinkedIn */}
            </a>
            <a
              href="https://wa.me/+261344806190"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp text-4xl text-white hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300"></i>{" "}
              {/* WhatsApp */}
            </a>
            <a
              href="https://github.com/Mukkun007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-4xl text-white hover:text-white hover:scale-110 hover:shadow-xl transition-all duration-300"></i>{" "}
              {/* GitHub */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Biographie;
