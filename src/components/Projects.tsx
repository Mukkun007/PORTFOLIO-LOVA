"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const Projects = () => {
  const t = useTranslations();

  const projects = [
    {
      image: "/images/Intranet.png",
      title: t("project.title1"),
      establishment: "Banky Foiben’ny Madagasikara",
      projectName: t("project.project1"),
      description: t("project.desc1"),
      tech: ["Symfony 6.4", "PHP", "Doctrine", "MySQL"],
    },
    {
      image: "/images/DOR.png",
      title: t("project.title2"),
      establishment: "Banky Foiben’ny Madagasikara",
      projectName: t("project.project2"),
      description: t("project.desc2"),
      tech: ["React Native", "Node.js", "MongoDB"],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="project bg-[#0f172a] mt-2 lg:mt-[4rem]">
      <h1 className="font-bold text-center text-3xl sm:text-[40px] md:text-[35px] lg:text-[40px] xl:text-3xl 2xl:text-[40px] text-white ml-[40px] mr-[40px]">
        {t("project.notable")}
      </h1>

      <div className="flex flex-wrap justify-center xl:justify-normal w-full px-[50px] mt-[20px] gap-[8rem]">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="group flex justify-center items-center w-full"
          >
            <div className="relative">
              {/* Image */}
              <img
                src={project.image}
                alt={project.projectName}
                className="w-auto max-w-full h-auto max-h-[500px] object-contain"
              />

              {/* Établissement en haut à droite (caché par défaut) */}
              <div
                className="absolute top-2 right-4 bg-transparent text-black font-bold text-sm px-3 py-1 rounded 
              opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
              >
                {project.establishment}
              </div>

              {/* Informations en bas (cachées par défaut et animées au hover) */}
              <div
                className="absolute bottom-0 left-0 right-0 w-full text-black p-4 backdrop-blur-lg rounded-bl-[2rem] rounded-br-[2rem] 
              bg-gradient-to-t from-black/55 to-transparent opacity-0 translate-y-4 transition-all duration-500 ease-in-out 
              group-hover:opacity-100 group-hover:translate-y-0"
              >
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p className="text-md italic">{project.projectName}</p>
                <p className="text-sm hidden lg:block">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
        {projects.length > 2 && (
          <button
            className="mt-5 border-2 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-700 flex items-center justify-center transition-all"
            onClick={() => setShowAll(!showAll)}
          >
            <span className="mr-2 text-xl">
              {showAll ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </span>
            <span className="font-semibold">
              {showAll ? "Show Less" : "See More"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
