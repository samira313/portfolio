import React from "react";
import { useTranslation } from "react-i18next";

// Define the allowed project keys
type ProjectKey = "shareWithUs" | "shopMate" | "cryptoApp" | "weatherApp";

// Define the structure for each project in the component
type Project = {
  key: ProjectKey;
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  // List of project keys for translation lookup
  const projects: Project[] = [
    { key: "shareWithUs" },
    { key: "shopMate" },
    { key: "cryptoApp" },
    { key: "weatherApp" },
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-white text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        {t("projects.title")}
      </h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map(({ key }) => (
          <div
            key={key}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {t(`projects.list.${key}.name`)}
            </h3>

            {/* Project Description */}
            <p className="text-gray-600 mb-4">
              {t(`projects.list.${key}.desc`)}
            </p>

            {/* View Project Link */}
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              {t("projects.viewProject")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
