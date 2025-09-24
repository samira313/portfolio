import './App.css'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Journey from './sections/Journey';
import logo  from "./assets/logo.png";
import profileImage from "./assets/profile.jpeg"; 
import About from "./sections/About";
import { texts } from "./i18n/texts";
function App() {
    const [lang, setLang] = useState<"en" | "fa" | "nl">("en");
  return (
    <div>
       {/* Navigation bar */}
      <Navbar
       logo={logo}
        links={[
          { name: "Home", href: "#hero" },
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
          { name: "Journey", href: "#journey" },
          { name: "Contact", href: "#contact" },
        ]}
      />
   <Hero
   profileImage={profileImage}
  name="Samira Ahmadi"
  title="Junior Software Developer"
  skills={["React", "TypeScript", "TailwindCSS", "Node.js"]}
/>
  <div>
      {/* Language Switcher */}
      <div className="flex justify-center space-x-4 mt-6">
        {["en", "fa", "nl"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l as "en" | "fa" | "nl")}
            className={`px-4 py-2 rounded ${
              lang === l ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* About Section */}
      <About
        title={texts.about[lang].title}
        description={texts.about[lang].text}
      />
    </div>
      <Journey />
    
    </div>
  );
}

export default App;
