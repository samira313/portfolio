import React from "react";
import { useTranslation } from "react-i18next";

type ProjectKey = "shareWithUs" | "shopMate" | "cryptoApp" | "weatherApp";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectKeys: ProjectKey[] = ["shareWithUs", "shopMate", "cryptoApp", "weatherApp"];

  return (
    <section id="projects" className="py-20 px-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-md my-12 text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        {t("projects.title")}
      </h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectKeys.map((key) => (
          <div
            key={key}
            className="bg-white/70 p-6 rounded-lg shadow hover:shadow-lg transition text-left"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t(`projects.list.${key}.title`)}
            </h3>
            <p className="text-gray-600 mb-4">
              {t(`projects.list.${key}.description`)}
            </p>

            {/*  link button */}
            <a
              href={t(`projects.list.${key}.link`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition"
>
        
              {t("projects.viewProject", "View Project →")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
