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
    <div className="project mt-10">
      <h1 className="font-bold text-center text-4xl text-white ml-[40px] mr-[40px]">
        Notable Work
      </h1>

      <div className="flex flex-wrap ml-[210px] mr-[220px] mt-[10px] gap-8">
        {displayedProjects.map((project, index) => (
          <div key={index} className="w-full p-4 flex">
            {/* Image à gauche */}
            <div className="w-1/2">
              <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Détails du projet à droite */}
            <div className="w-1/2 pl-4">
              <h2 className="text-xl font-light">{project.title}</h2>
              <h1 className="text-4xl font-bold mt-3">{project.projectName}</h1>
              <h2 className="text-lg font-light mt-3">
                {project.establishment}
              </h2>
              <p className="mt-8">{project.description}</p>

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
