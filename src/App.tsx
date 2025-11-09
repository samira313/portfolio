import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import logo from "./assets/logo.png";
import profileImage from "./assets/profile.jpeg";
import About from "./sections/About";
import { texts } from "./i18n/texts";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import LanguageToggle from "./components/LanguageToggle";
import Resume from "./sections/Resume";
import MyStory from "./sections/MyStory";


function App() {
  // Manage language state (English default)
  const [lang, setLang] = useState<"en" | "fa" | "nl">("en");

  // Access correct translation set
  const t = texts[lang];

  return (
    
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800">
      <Navbar
        logo={logo}
        links={[
          { name: t.navbar.home, href: "#hero" },
          { name: t.navbar.resume, href: "#resume" },
          { name: t.navbar.about, href: "#about" },
          { name: t.navbar.myStory, href: "#MyStory" },
          { name: t.navbar.skills, href: "#skills" },
          { name: t.navbar.projects, href: "#projects" },
           { name: t.navbar.experience, href: "#experience" },
          { name: t.navbar.journey, href: "#journey" },
          { name: t.navbar.contact, href: "#contact" },
        ]}
      />

      {/* Language Selector */}
      <div className="absolute top-4 left-4 z-50">
        <LanguageToggle
          currentLang={lang}
          onChange={(newLang: "en" | "fa" | "nl") => setLang(newLang)}
        />
      </div>

      <div className="relative z-10 px-4 md:px-12">
        {/*  Hero Section */}
        <Hero
          profileImage={profileImage}
          name={t.hero.greeting}
          title={t.hero.title}
          skills={t.hero.skills}
        />

        {/* Resume Section */}
        <Resume />

        {/* About Section */}
        <About title={t.about.title} description={t.about.text} />
         
         {/* My Story */ }
        
         <MyStory />


        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Journey Section */}
        <Journey />

        {/* Contact Section */}
        <Contact
          email="ahmadi.samira6761@gmail.com"
          linkedin="https://www.linkedin.com/in/samira-a-975711349/"
          github="https://github.com/samira313"
        />
      </div>
      </div>
    
  );
}

export default App;
