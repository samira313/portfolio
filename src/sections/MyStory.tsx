import React from "react";
import { useTranslation } from "react-i18next";

const MyStory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="MyStory"
      className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        {t("story.title")}
      </h2>

      {/* Journey Section */}
      <div className="bg-white/70 backdrop-blur-md shadow-md rounded-xl p-8 mb-10 transition-transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4  text-gray-600">
          {t("story.sections.journey.title")}
        </h3>
        <p>{t("story.sections.journey.text1")}</p>
        <p className="mt-4">{t("story.sections.journey.text2")}</p>
        <p className="mt-4">{t("story.sections.journey.text3")}</p>
      </div>

      {/* Learning Section */}
      <div className="bg-white/70 backdrop-blur-md shadow-md rounded-xl p-8 mb-10 transition-transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-600">
          {t("story.sections.learning.title")}
        </h3>
        <p>{t("story.sections.learning.text1")}</p>
        <p className="mt-4">{t("story.sections.learning.text2")}</p>
        <p className="mt-4">{t("story.sections.learning.text3")}</p>
      </div>

      {/* Goals Section */}
      <div className="bg-white/70 backdrop-blur-md shadow-md rounded-xl p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-600">
          {t("story.sections.goals.title")}
        </h3>
        <p>{t("story.sections.goals.text1")}</p>
        <p className="mt-4">{t("story.sections.goals.text2")}</p>
      </div>
    </section>
  );
};

export default MyStory;
