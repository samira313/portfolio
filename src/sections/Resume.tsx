import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t } = useTranslation();

  return (
    <section id="resume" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        {t("resume.title")}
      </h2>

      <p className="text-lg text-gray-700 mb-8">{t("resume.description")}</p>

      <a
        href="/Samira-Ahmadi-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        {t("resume.button")}
      </a>
    </section>
  );
}
