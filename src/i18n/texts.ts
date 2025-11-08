import en from "../locales/en.json";
import fa from "../locales/fa.json";
import nl from "../locales/nl.json";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
      nl: { translation: nl },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

// Define a type for the available languages
export type LanguageType = "en" | "fa" | "nl";

// Export the texts object
export const texts1: Record<LanguageType, typeof en> = {
  en,
  fa,
  nl
};

export const texts = {
  about: {
    en: {
      title: "About Me",
      text: `I am a Junior Software Developer who is passionate about learning and building meaningful applications. 
In 2021, I moved to the Netherlands, where I discovered my love for programming. 

With a background in accounting, I bring precision, structure, and problem-solving into my work as a developer. 
Since then, I have embraced every opportunity to grow from joining HackYourFuture to continuous self-learning. 

What excites me most is creating software that improves people’s lives, collaborating with diverse teams, and turning challenges into human-centered solutions.`,
    },
    fa: {
      title: "درباره من",
      text: `من یک جونیور دولوپر هستم که عاشق یادگیری و ساخت اپلیکیشن‌های معنادارم. 
در سال ۲۰۲۱ به هلند مهاجرت کردم و همان‌جا علاقه‌ام به برنامه‌نویسی را کشف کردم. 

با پیشینه‌ای در حسابداری، ذهنیتی دقیق، ساختاریافته و حل‌مسئله‌محور را وارد دنیای توسعه نرم‌افزار کرده‌ام. 
از آن زمان، از هر فرصتی برای رشد استفاده کرده‌ام — از پیوستن به HackYourFuture گرفته تا یادگیری مداوم تکنولوژی‌های جدید به صورت خودآموز. 

آنچه بیش از همه مرا هیجان‌زده می‌کند، ساخت نرم‌افزارهایی است که زندگی مردم را آسان‌تر می‌کنند، کار تیمی و همکاری با افراد متنوع، و تبدیل چالش‌ها به راه‌حل‌های زیبا و انسانی.`,
    },
    nl: {
      title: "Over Mij",
      text: `Ik ben een junior softwareontwikkelaar met een passie voor leren en het bouwen van betekenisvolle applicaties. 
In 2021 ben ik naar Nederland verhuisd, waar ik mijn liefde voor programmeren heb ontdekt. 

Met een achtergrond in boekhouding breng ik nauwkeurigheid, structuur en probleemoplossend vermogen mee naar softwareontwikkeling. 
Sindsdien heb ik elke kans benut om te groeien van HackYourFuture tot zelfstandig leren van nieuwe technologieën. 

Wat mij het meest enthousiasmeert, is het creëren van software die het leven van mensen gemakkelijker maakt, samenwerken in diverse teams, en het omzetten van uitdagingen in elegante, mensgerichte oplossingen.`,
    },
  },



  contact: {
    en: {
      title: "Contact Me",
      text: "Feel free to reach out via email or connect with me on social media.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    fa: {
      title: "تماس با من",
      text: "خوشحال می‌شوم از طریق ایمیل یا شبکه‌های اجتماعی با من در ارتباط باشید.",
      email: "ایمیل",
      linkedin: "لینکدین",
      github: "گیت‌هاب",
    },
    nl: {
      title: "Contact",
      text: "Neem gerust contact met mij op via e-mail of via sociale media.",
      email: "E-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
};
