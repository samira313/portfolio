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
import LanguageToggle from "./components/LanguageToggle"
import Resume from './sections/Resume';
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
     <Resume />

      {/* About Section */}
      <About
        title={texts.about[lang].title}
        description={texts.about[lang].text}
      />
    </div>
     {/* Skills Section */}
      <Skills  />
        {/* Projects Section */}
      <Projects />
      
       <Experience />

        {/* Journey Section */}
      <Journey
  image="/src/assets/journey/account1.jpeg"
  text="From 2015 to 2021, I worked as an Accountant in Iran. During these six years, I gained deep expertise in financial management, bookkeeping, and preparing accurate reports. These experiences shaped my ability to think critically, stay organized, and solve problems logically, skills I now apply to my career in software development."
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
