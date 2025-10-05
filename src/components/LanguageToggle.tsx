import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

type LanguageType= "en" | "fa" | "nl";

type LanguageToggleProps = {
  currentLang:LanguageType;
  onChange: (lang: LanguageType) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onChange }) => {
  return (
    <div className="flex space-x-3 items-center">
      {/* English */}
      <button
        onClick={() => onChange("en")}
        className={`p-1 rounded-full transition ${
          currentLang === "en" ? "bg-green-400" : "bg-gray-200"
        }`}
      >
        <FaFlagUsa className="text-xl" />
      </button>

      {/* Farsi */}
      <button
        onClick={() => onChange("fa")}
        className={`p-1 rounded-full transition ${
          currentLang === "fa" ? "bg-green-400" : "bg-gray-200"
        }`}
      >
        <FaFlag className="text-xl text-red-500" />
      </button>

      {/* Dutch */}
      <button
  onClick={() => onChange("nl")}
  className={`p-1 rounded-full transition ${
    currentLang === "nl" ? "bg-green-400" : "bg-gray-200"
  }`}
>
  <span className="text-2xl">🇳🇱</span>
</button>

    </div>
  );
};

export default LanguageToggle;
