// src/sections/Journey.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import accountImage from "../assets/journey/account1.jpeg";

// Define props type for Journey
type JourneyProps = {
  image?: string; // optional, because we also import a default image
  text?: string; // optional, when using translation instead of static text
};

const Journey: React.FC<JourneyProps> = ({ image, text }) => {
  const { t } = useTranslation();

  // Use imported image if no prop is passed
  const journeyImage = image || accountImage;

  return (
    <section id="journey" className="py-20 px-8  bg-white/50 text-center backdrop-blur-sm rounded-2xl shadow-sm my-12">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        {t("journey.title")}
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <p className="text-lg text-gray-700 leading-relaxed">
          {/* If text prop exists, show it; otherwise, use translation */}
          {text || t("journey.text")}
        </p>

        {/* Image Section */}
        <img
          src={journeyImage}
          alt={t("journey.alt")}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Journey;
