"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "lg" | "desktop">(
    "desktop"
  );

  const updateBreakpoint = () => {
    if (window.innerWidth < 1024) {
      setBreakpoint("mobile");
    } else if (window.innerWidth < 1280) {
      setBreakpoint("lg");
    } else {
      setBreakpoint("desktop");
    }
  };

  useEffect(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
};

const Projects = () => {
  const t = useTranslations();
  // const breakpoint = useBreakpoint();

  const projects = [
    {
      image: "/images/Intranet.png",
      title: t("project.title1"),
      establishment: "Banky Foiben’ny Madagasikara",
      projectName: t("project.project1"),
      description: t("project.desc1"),
      tech: ["Symfony 6.4", "PHP", "Doctrine", "MySQL"],
      links: { github: "", website: "" },
    },
    {
      image: "/images/DOR.png",
      title: t("project.title2"),
      establishment: "Banky Foiben’ny Madagasikara",
      projectName: t("project.project2"),
      description: t("project.desc2"),
      tech: ["Symfony 6.4", "PHP", "Doctrine", "MySQL"],
      links: { github: "", website: "" },
    },
    {
      image: "/images/visio.png",
      title: t("project.title3"),
      establishment: "",
      projectName: t("project.project3"),
      description: t("project.desc3"),
      tech: ["ExpressJs", "Node.js", "Webrtc"],
      links: { github: "", website: "" },
    },
    {
      // image: "/images/CVLogo.png",
      image: "/images/CV-generator.png",
      title: t("project.title4"),
      establishment: "",
      projectName: t("project.project4"),
      description: t("project.desc4"),
      tech: ["VueJS", "TailwindCSS"],
      links: { github: "", website: "" },
    },
  ];

  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(
    null
  );
  const hoveredProject =
    hoveredProjectIndex !== null ? projects[hoveredProjectIndex] : null;

  return (
    <div className="bg-[#0f172a] py-16 px-6 min-h-screen mb-[-10rem]">
      <h1 className="text-white text-4xl font-bold text-center mb-12">
        {t("project.notable")}
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Gauche : Image du projet survolé */}
        <div className="flex-1 flex justify-center items-center hidden lg:block">
          {hoveredProject && (
            <div className="w-full ml-[10rem] xl:ml-[20rem] 2xl:ml-[30rem] max-w-md h-[40rem] rounded-tr-xl overflow-hidden shadow-lg bg-transparent transition-opacity duration-300">
              <img
                src={hoveredProject.image}
                alt={hoveredProject.projectName}
                className="object-cover w-full h-full opacity-0 animate-fade-in"
                style={{ objectPosition: "top right" }}
              />
            </div>
          )}
        </div>

        {/* Droite : Liste des projets */}
        <div className="flex-1 text-white">
          <ul className="space-y-6 max-h-[40rem] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {projects.map((project, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredProjectIndex(index)}
                onMouseLeave={() => setHoveredProjectIndex(null)}
                className="cursor-pointer p-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105"
              >
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-sm italic">{project.projectName}</p>
                {index < projects.length - 1 && (
                  <hr className="border-t border-gray-600 w-full mt-4" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
