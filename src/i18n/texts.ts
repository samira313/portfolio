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
    "navbar": {
  "home": "Home",
  "resume": "Resume",
  "about": "About",
  "myStory": "My Story",
  "skills": "Skills",
  "projects": "Projects",
  "experience": "Experience",
  "journey": "My Journey",
  "contact": "Contact"
},

    hero: {
      greeting: "Hi, I'm Samira Ahmadi",
      title: "Junior Software Developer",
      skills: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    },
    about: {
  "title": "About Me",
  "text": "I’m a Junior Software Developer with a strong passion for building meaningful and user-focused applications. My journey into tech started with curiosity and grew into a deep love for problem-solving and continuous learning. With a background in finance, I bring structure, precision, and analytical thinking into my development work. I enjoy both front-end creativity and back-end logic, which makes full-stack development the perfect balance for me. What excites me most is transforming ideas into functional, beautiful digital products that make people’s lives easier."
}
,
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
  "title": "درباره من",
  "text": "من یک توسعه‌دهنده نرم‌افزار هستم که با اشتیاق زیاد در مسیر ساخت برنامه‌های کاربردی معنادار و کاربرمحور قدم برمی‌دارم. مسیر من در دنیای فناوری با کنجکاوی آغاز شد و به عشقی عمیق به حل مسئله و یادگیری مداوم تبدیل شد. پیش‌زمینه‌ام در حسابداری به من دقت، نظم و تفکر تحلیلی بخشیده است که در توسعه نرم‌افزار به کار می‌گیرم. از خلاقیت طراحی در فرانت‌اند تا منطق فنی بک‌اند لذت می‌برم و همین ترکیب، باعث شده توسعه فول‌استک برایم بهترین مسیر باشد. بیشترین انگیزه‌ام زمانی است که ایده‌ای را به یک محصول دیجیتال واقعی، زیبا و کاربردی تبدیل می‌کنم."
}
,
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
  "title": "Over mij",
  "text": "Ik ben een junior softwareontwikkelaar met een sterke passie voor het bouwen van betekenisvolle en gebruiksvriendelijke applicaties. Mijn reis in de technologie begon met nieuwsgierigheid en groeide uit tot een diepe liefde voor probleemoplossing en continu leren. Met een achtergrond in de financiële sector breng ik structuur, precisie en analytisch denken in mijn werk als ontwikkelaar. Ik geniet zowel van de creativiteit van front-end als de logica van back-end, wat full-stack ontwikkeling voor mij de perfecte balans maakt. Wat mij het meest enthousiasmeert, is het omzetten van ideeën in functionele en mooie digitale producten die het leven van mensen makkelijker maken."
}
,
  },
};
