import React from "react";

// Define the type for each experience item
type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  images?: string[]; 
};

// Props type for the Experience component
type ExperienceProps = {
  experiences: ExperienceItem[];
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Experience
        </h2>

        {/* Experiences List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Title & Organization */}
              <h3 className="text-2xl font-semibold text-gray-800">
                {exp.title}
              </h3>
              <p className="text-gray-600 italic">
                {exp.organization} | {exp.period}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-700 leading-relaxed">
                {exp.description}
              </p>

              {/* Optional Images */}
              {exp.images && exp.images.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exp.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${exp.title} photo ${i + 1}`}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
