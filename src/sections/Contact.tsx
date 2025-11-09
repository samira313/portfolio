// src/sections/Contact.tsx
import { useTranslation } from "react-i18next";

type ContactProps = {
  email: string;
  linkedin: string;
  github: string;
};

export default function Contact({ email, linkedin, github }: ContactProps) {
  const { t } = useTranslation();

  return (
    <section id="contact" className='scroll-mt-24 py-20 px-8 bg-white/50 text-center backdrop-blur-sm rounded-2xl shadow-sm my-12'>
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">{t("contact.title")}</h2>
      <p className="text-lg text-gray-700 mb-8">{t("contact.description")}</p>

      <div className="flex justify-center gap-6 text-lg font-medium">
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:text-blue-800"
        >
          {t("contact.email")}
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {t("contact.linkedin")}
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {t("contact.github")}
        </a>
      </div>
    </section>
  );
}
