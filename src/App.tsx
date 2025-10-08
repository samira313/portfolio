import './App.css'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Journey from './sections/Journey';
import logo  from "./assets/logo.png";
import profileImage from "./assets/profile.jpeg"; 
import About from "./sections/About";
import { texts, texts1 } from "./i18n/texts";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import exp1 from "./assets/exp1.jpeg"; 
import exp2 from "./assets/exp2.jpeg"; 
import LanguageToggle from "./components/LanguageToggle"
function App() {
    const [lang, setLang] = useState<"en" | "fa" | "nl"> ("en");
    const t = texts1[lang]; // shorthand for accessing current translations
  return (
  <>
     {/* Language Selector */}
      <div className="absolute top-4 left-4 z-50">
        <LanguageToggle currentLang={lang} onChange={(newLang: "en" | "fa" | "nl") => setLang(newLang)} />
      </div>
   
     <div className="relative">
   
       {/* Navigation bar */}
      <Navbar
       logo={logo}
        links={[
        { name: t.navbar.home, href: "#hero" },
        { name: t.navbar.about, href: "#about" },
        { name: t.navbar.skills, href: "#skills" },
        { name: t.navbar.projects, href: "#projects" },
        { name: t.navbar.journey, href: "#journey" },
        { name: t.navbar.contact, href: "#contact" },
      ]} />

   <Hero
    profileImage={profileImage}
    name={t.hero.greeting}
    title={t.hero.title}
    skills={[t.hero.skills]}
/>
  <div>
      {/* Language Switcher */}
     

      {/* About Section */}
      <About
        title={texts.about[lang].title}
        description={texts.about[lang].text}
      />
    </div>
     {/* Skills Section */}
      <Skills  />
        {/* Projects Section */}
      <Projects
        projects={[
          {
            title: "ShareWithUs",
            description:
              "A full-stack app for lending & borrowing items within a community. Built with the MERN stack.",
            link: "https://github.com/samira313/ShareWithUs-App",
          },
          {
            title: "ShopMate",
            description:
            " smart shopping list application built with TypeScript, React (Vite) and Firebase.It helps users organize their groceries, share lists with others, and keep everything synchronized in real-time.",
            link: "https://github.com/samira313/ShopMate-",
          },
          {
            title: "Crypto-App",
            description:
              "A crypto dashboard built with React & CoinGecko API. Features include live search, charts, and local storage.",
            link: "https://github.com/samira313/Crypto-App",
          },
          {
            title: "Weather-App",
            description: "An interactive weather application that allows users to check the current weather and a 5-day forecast for any city worldwide.This app provides real-time weather updates",
            link: "https://github.com/samira313/Weather-App",
          },
        ]}
      />
       <Experience
        experiences={[
          {
            title: "Full Stack Web Developer Trainee",
            organization: "HackYourFuture",
            period: "Nov 2024 – Jun 2025",
            description:
              "During my journey at HackYourFuture, I collaborated on multiple full-stack projects using React, Node.js, Express, and MongoDB. I also gained hands-on experience in Agile workflows and presented our final project, ShareWithUs.",
            images: [exp1, exp2], // Images you uploaded
          },
        ]}
      />

        {/* Journey Section */}
      <Journey
        image="/src/assets/journey/account1.jpeg"
        text="From 2015 to 2021, I worked as an Accountant in Iran. 
        During these six years, I gained deep expertise in financial management, bookkeeping, 
        and preparing accurate reports. 
        These experiences shaped my ability to think critically, stay organized, 
        and solve problems logically, skills I now apply to my career in software development."
      />

     {/* Contact Section */}
      <Contact
        email="ahmadi.samira6761@gmail.com"
        linkedin="https://www.linkedin.com/in/samira-a-975711349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        github="https://github.com/samira313"
      />
    </div>
       </>
  );
}

export default App;
