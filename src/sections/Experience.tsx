import React from "react";
import { useTranslation } from "react-i18next";
import exp1 from "../assets/exp1.jpeg";
import exp2 from "../assets/exp2.jpeg";

// Type for each experience item
type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
  images: string[];
};

// Optional props (future scalability)
type ExperienceProps = {
  experiences?: ExperienceItem[];
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const { t } = useTranslation();

  // ✅ Explicit cast to correct type (important fix!)
  const defaultExperience = t("experience.list", {
    returnObjects: true,
  }) as ExperienceItem[];

  const data = experiences || defaultExperience;

  // Map image filenames to imported images
  const imageMap: Record<string, string> = {
    "exp1.jpeg": exp1,
    "exp2.jpeg": exp2,
  };

  return (
    <section id="experience" className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        {t("experience.title")}
      </h2>

      {data.map((exp, index) => (
        <div
          key={index}
          className="max-w-3xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
          <p className="text-lg text-gray-600 italic mt-1">
            {exp.company} | {exp.duration}
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {exp.description}
          </p>

          <div className="flex justify-center gap-6 flex-wrap mt-6">
            {exp.images.map((imgName, i) => (
              <img
                key={i}
                src={imageMap[imgName]}
                alt={`${exp.role}-${i}`}
                className="rounded-lg shadow-md w-[400px]"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
