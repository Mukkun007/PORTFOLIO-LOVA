"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

type Breakpoint = "mobile" | "lg" | "desktop";

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

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
  const breakpoint = useBreakpoint();

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
      image: "/images/CV-generator.png",
      title: t("project.title4"),
      establishment: "",
      projectName: t("project.project4"),
      description: t("project.desc4"),
      tech: ["VueJS", "TailwindCSS"],
      links: { github: "", website: "" },
    },
  ];

  const displayLimit: Record<Breakpoint, number> = {
    mobile: 2,
    lg: 6,
    desktop: 6,
  };

  const limit = displayLimit[breakpoint];
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, limit);

  const shouldShowButton = projects.length > limit;

  return (
    <div className="bg-[#0f172a] py-16 px-6">
      <h1 className="text-white text-4xl font-bold text-center mb-12">
        {t("project.notable")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.projectName}
                className="object-cover w-full h-full"
              />

              {/* Masque flouté en bas */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-white backdrop-blur-sm [mask-image:linear-gradient(to_top,white,transparent)]" />
            </div>
            <div className="p-5 flex flex-col justify-between h-[300px]">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm text-gray-700">
                  {project.description}
                </p>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex mt-4 space-x-4 text-gray-500">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      🌐
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {shouldShowButton && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition"
          >
            {showAll ? t("project.seeless") : t("project.seemore")}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
