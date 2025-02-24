"use client";

import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      image: "/images/Grey.png",
      title: "Web Development",
      establishment: "Banky Foiben’ny Madagasikara",
      projectName: "Intranet Upgrade",
      description:
        "Migrated the intranet platform from Symfony 3.4 to 6.4, modernizing the codebase for better performance, security, and maintainability. The upgrade involved refactoring legacy code, optimizing database queries, and ensuring full compatibility with the latest Symfony features, all while minimizing disruptions for users.",
    },
    {
      image: "/images/image2.jpg",
      title: "Mobile Development",
      establishment: "Tech Innovations",
      projectName: "Mobile App Development",
      description:
        "Developed a cross-platform mobile app for e-commerce, enhancing the shopping experience with a user-friendly interface and optimized performance for both Android and iOS devices.",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Déterminer quels projets afficher en fonction de l'état "showAll"
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="project mt-10">
      <h1 className="font-bold text-4xl text-white ml-[210px]">Notable Work</h1>

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
              <h1 className="text-4xl font-bold mt-3">
                {project.establishment} {project.projectName}
              </h1>
              <p className="mt-8">{project.description}</p>
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
                <i className="fas fa-chevron-up"></i> // Flèche vers le haut pour "Show Less"
              ) : (
                <i className="fas fa-chevron-down"></i> // Flèche vers le bas pour "See More"
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
