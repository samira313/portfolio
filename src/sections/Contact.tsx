import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        {t("contact.title")}
      </h2>

      <p className="text-lg text-gray-700 mb-8">
        {t("contact.description")}
      </p>

      <div className="flex justify-center gap-6 text-gray-800 font-medium">
        <a href="mailto:ahmadi.samira6761@gmail.com" className="hover:text-blue-600">
          {t("contact.email")}
        </a>
        <a href="https://www.linkedin.com/in/samira313/" target="_blank" className="hover:text-blue-600">
          {t("contact.linkedin")}
        </a>
        <a href="https://github.com/samira313" target="_blank" className="hover:text-blue-600">
          {t("contact.github")}
        </a>
      </div>
    </section>
  );
}
