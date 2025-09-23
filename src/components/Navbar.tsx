export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* --- Logo --- */}
        <a href="#hero" className="text-2xl font-bold text-primary">
          Samira.logo
        </a>

        {/* --- Navigation Links --- */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li><a href="#hero" className="hover:text-primary">Home</a></li>
          <li><a href="#about" className="hover:text-primary">About</a></li>
          <li><a href="#skills" className="hover:text-primary">Skills</a></li>
          <li><a href="#projects" className="hover:text-primary">Projects</a></li>
          <li><a href="#journey" className="hover:text-primary">Journey</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>

        {/* --- Mobile Menu Button (Hamburger) --- */}
        <button className="md:hidden text-2xl">&#9776;</button>
      </div>
    </nav>
  );
}
