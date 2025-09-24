import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Journey from './sections/Journey';
import logo  from "./assets/logo.png";
function App() {
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
  name="Samira Ahmadi"
  title="Junior Software Developer"
  skills={["React", "TypeScript", "TailwindCSS", "Node.js"]}
/>

      <Journey />
    
    </div>
  );
}

export default App;
