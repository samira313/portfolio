import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import fa from "../locales/fa.json";
import nl from "../locales/nl.json";

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
      nl: { translation: nl },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;

// --------------------------------------------
// Define types for all translations
// --------------------------------------------
export type LanguageType = "en" | "fa" | "nl";

export interface NavbarType {
  home: string;
  resume: string;
  about: string;
  myStory: string;
  skills: string;
  projects: string;
  experience: string;
  journey: string;
  contact: string;
}

export interface HeroType {
  greeting: string;
  title: string;
  skills: string[];
}

export interface AboutType {
  title: string;
  text: string;
}

export interface TranslationsType {
  navbar: NavbarType;
  hero: HeroType;
  about: AboutType;
}

// --------------------------------------------
// Define all text content (for TypeScript safety)
// --------------------------------------------
export const texts: Record<LanguageType, TranslationsType> = {
  en: {
    navbar: {
        "home": "Startpagina",
  "resume": "CV",
  "about": "Over mij",
  "myStory": "Mijn Verhaal",
  "skills": "Vaardigheden",
  "projects": "Projecten",
  "experience": "Werkervaring",
  "journey": "Mijn Reis",
  "contact": "Contact"
    },
    hero: {
      greeting: "Hi, I'm Samira Ahmadi",
      title: "Junior Software Developer",
      skills: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    },
    about: {
      title: "About Me",
      text: "I am a Junior Software Developer who is passionate about learning and building meaningful applications. With a background in accounting, I bring precision, structure, and problem-solving into my work as a developer.",
    },
  },

  fa: {
    navbar: {
 "home": "خانه",
  "resume": "رزومه",
  "about": "درباره من",
  "myStory": "داستان من",
  "skills": "مهارت‌ها",
  "projects": "پروژه‌ها",
  "experience": "تجربه کاری من",
  "journey": "سفر من",
  "contact": "تماس با من"
    },
    hero: {
      greeting: "سلام، من سمیرا احمدی هستم",
      title: "توسعه‌دهنده نرم‌افزار جونیور",
      skills: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    },
    about: {
      title: "درباره من",
      text: "من توسعه‌دهنده‌ای هستم که عاشق یادگیری و ساخت اپلیکیشن‌های معنادار است. با پیش‌زمینه‌ای در حسابداری، نظم و دقت را به دنیای برنامه‌نویسی آورده‌ام.",
    },
  },

  nl: {
  "navbar": {
  "home": "Startpagina",
  "resume": "CV",
  "about": "Over mij",
  "myStory": "Mijn Verhaal",
  "skills": "Vaardigheden",
  "projects": "Projecten",
  "experience": "Werkervaring",
  "journey": "Mijn Reis",
  "contact": "Contact"
    },
    hero: {
      greeting: "Hoi, ik ben Samira Ahmadi",
      title: "Junior Software Developer",
      skills: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    },
    about: {
      title: "Over mij",
      text: "Ik ben een junior softwareontwikkelaar die gepassioneerd is over leren en het bouwen van betekenisvolle applicaties.",
    },
  },
};
