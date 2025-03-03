"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const Projects = () => {
  const t = useTranslations();

  const projects = [
    {
      image: "/images/Grey.png",
      title: t("project.title1"),
      establishment: "Banky Foiben’ny Madagasikara",
      projectName: t("project.project1"),
      description: t("project.desc1"),
      tech: ["Symfony 6.4", "PHP", "Doctrine", "MySQL"], // ✅ Ajout des technologies
    },
    {
      image: "/images/DOR.png",
      title: t("project.title2"),
      establishment: "Banky Foiben’ny Madagasikara",
      projectName: t("project.project2"),
      description: t("project.desc2"),
      tech: ["React Native", "Node.js", "MongoDB"], // ✅ Technologies pour ce projet
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Déterminer quels projets afficher en fonction de l'état "showAll"
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="project mt-2 lg:mt-[4rem]">
      <h1 className="font-bold text-center text-3xl sm:text-[40px] md:text-[35px] lg:text-[40px] xl:text-3xl 2xl:text-[40px] text-white ml-[40px] mr-[40px]">
        Notable Work
      </h1>

      <div className="flex flex-wrap justify-center xl:justify-normal w-full px-[50px] mt-[20px] gap-[4rem]">
        {displayedProjects.map((project, index) => (
          <div key={index} className="flex-wrap xl:flex">
            {/* Image à gauche */}
            <div className="xl:w-1/2">
              <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Détails du projet à droite */}
            <div className="xl:w-1/2 pl-4 xl:pl-[3.5rem] mt-5 xl:mt-0">
              <h2 className="text-[15px] lg:text-[20px] 2xl:text-[23px] text-left font-light">
                {project.title}
              </h2>
              <h1 className="text-2xl lg:text-3xl 2xl:text-4xl text-[#5ee3bf] font-bold mt-1">
                {project.projectName}
              </h1>
              <h2 className="text-[13px] lg:text-[15px] 2xl:text-[20px] font-light mt-1">
                {project.establishment}
              </h2>
              <p className="mt-5">{project.description}</p>

              {/* ✅ Affichage des technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#122b39] text-[#5ee3bf] px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Afficher le bouton seulement si plus de 2 projets */}
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
