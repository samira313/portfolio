import React from "react";
import { useTranslation } from "react-i18next";

//  Define the props type for the Journey component
type JourneyProps = {
  image: string;   // Path to the journey image
  text?: string;   // Optional text (can come from props or translation)
};

const Journey: React.FC<JourneyProps> = ({ image, text }) => {
  const { t } = useTranslation();

  // Get translation values or use passed props
  const journeyText = text || t("journey.text");
  const journeyTitle = t("journey.title");
  const journeyAlt = t("journey.imageAlt");

  return (
    <section id="journey" className="py-20 px-8 bg-gray-50">
      {/* Section title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        {journeyTitle}
      </h2>

      {/* Text and image layout */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text area */}
        <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
          {journeyText}
        </p>

        {/* Image area */}
        <img
          src={image}
          alt={journeyAlt}
          className="rounded-lg shadow-lg w-full object-cover md:w-[400px] mx-auto"
        />
      </div>
    </section>
  );
};

export default Journey;
