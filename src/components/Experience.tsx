import React from "react";
import {
  FaBriefcase,
  FaUniversity,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";

const experiences = [
  {
    date: "2024 - 2025",
    establishment: "Entreprise A",
    position: "Développeur Web",
    icon: <FaLaptopCode />,
  },
  {
    date: "2022",
    establishment: "Entreprise B",
    position: "Ingénieur Logiciel",
    icon: <FaBriefcase />,
  },
  {
    date: "2020",
    establishment: "Université C",
    position: "Étudiant en Informatique",
    icon: <FaUniversity />,
  },
  {
    date: "2018",
    establishment: "Stage D",
    position: "Stagiaire Développement",
    icon: <FaUserGraduate />,
  },
];

const Experience = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f172a] mt-10">
      <div className="relative w-1/2">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#122b39] h-full"></div>

        {/* Éléments de la timeline */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } my-[150px] relative`}
          >
            {/* Cercle avec icône */}
            <div className="w-[70px] h-[70px] bg-[#122b39] rounded-full flex items-center justify-center text-white text-2xl absolute left-1/2 transform -translate-x-1/2">
              {exp.icon}
            </div>

            {/* Contenu de l'expérience */}
            <div
              className={`bg-white shadow-md p-6 rounded-lg w-1/3 relative ${
                index % 2 === 0 ? "ml-24" : "mr-24"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {exp.date}
              </h3>
              <p className="text-blue-600 font-bold">{exp.establishment}</p>
              <p className="text-gray-700">{exp.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
