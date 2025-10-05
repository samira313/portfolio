import React from "react";
import ReactCountryFlag from "react-country-flag";

//  Define language type
type LanguageType = "en" | "fa" | "nl";

//  Props type for LanguageToggle component
type LanguageToggleProps = {
  currentLang: LanguageType;
  onChange: (lang: LanguageType) => void;
};

// LanguageToggle component
const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onChange }) => {
  return (
    // Main wrapper for language flags
    <div
      className="fixed top-5 left-5 z-50 flex space-x-3 items-center bg-white/90 backdrop-blur-md 
      px-4 py-2 rounded-full shadow-lg border border-gray-200"
    >
      {/* 🇬🇧 English */}
      <button
        onClick={() => onChange("en")}
        className={`p-1 rounded-full transition-all duration-200 ${
          currentLang === "en" ? "ring-2 ring-green-500 scale-110" : "hover:scale-105"
        }`}
      >
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{ width: "2em", height: "2em", borderRadius: "50%" }}
          title="English"
        />
      </button>

      {/* 🇮🇷 Persian */}
      <button
        onClick={() => onChange("fa")}
        className={`p-1 rounded-full transition-all duration-200 ${
          currentLang === "fa" ? "ring-2 ring-green-500 scale-110" : "hover:scale-105"
        }`}
      >
        <ReactCountryFlag
          countryCode="IR"
          svg
          style={{ width: "2em", height: "2em", borderRadius: "50%" }}
          title="فارسی"
        />
      </button>

      {/* 🇳🇱 Dutch */}
      <button
        onClick={() => onChange("nl")}
        className={`p-1 rounded-full transition-all duration-200 ${
          currentLang === "nl" ? "ring-2 ring-green-500 scale-110" : "hover:scale-105"
        }`}
      >
        <ReactCountryFlag
          countryCode="NL"
          svg
          style={{ width: "2em", height: "2em", borderRadius: "50%" }}
          title="Nederlands"
        />
      </button>
    </div>
  );
};

export default LanguageToggle;
