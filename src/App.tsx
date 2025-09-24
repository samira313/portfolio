import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Journey from './sections/Journey';

function App() {
  return (
    <div>
      <Navbar />
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
