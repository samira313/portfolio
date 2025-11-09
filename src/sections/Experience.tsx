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

  const defaultExperience = t("experience.list", {
    returnObjects: true,
  }) as ExperienceItem[];

  const data = experiences || defaultExperience;

  const imageMap: Record<string, string> = {
    "exp1.jpeg": exp1,
    "exp2.jpeg": exp2,
  };

  return (
    <section id="experience" className="py-20 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        {t("experience.title")}
      </h2>

      {data.map((exp, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row items-center md:items-start gap-10 bg-white p-8 rounded-lg shadow-md"
        >
          {/* LEFT: Text content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl py-19 font-semibold text-gray-800 ">{exp.role}</h3>
            <p className="text-2xl text-gray-600 italic mt-1">
              {exp.company} | {exp.duration}
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {exp.description}
            </p>
          </div>

          {/* RIGHT: Images */}
          <div className="md:w-1/2 flex flex-col gap-6 items-center md:items-end">
            {exp.images.map((imgName, i) => (
              <img
                key={i}
                src={imageMap[imgName]}
                alt={`${exp.role}-${i}`}
                className="rounded-lg shadow-lg w-[350px] md:w-[400px] object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
