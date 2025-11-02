import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t } = useTranslation();

  return (
    <section id="resume" className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        {t("resume.title")}
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        {t("resume.description")}
      </p>

      <a
        href="/Samira-Ahmadi-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        {t("resume.button")}
      </a>
    </section>
  );
}
