import logo from "../assets/logo.png";

export default function Navbar() {
  return (
   <nav className="fixed top-0 w-full bg-fuchsia-50 shadow-md flex justify-between items-center px-8 py-1">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* --- Logo --- */}
        <a href="#hero" className="flex items-center space-x-2">
          <img src={logo} alt="Samira Ahmadi" className="h-30 w-30 rounded-full shadow-lg border-4 border-amber-50 mb-2" />
        </a>

        {/* --- Navigation Links --- */}
      <ul className="flex space-x-8 text-lg font-medium text-gray-700">
    <li><a href="#about" className="hover:text-primary hover:text-blue-700">About</a></li>
    <li><a href="#skills" className="hover:text-primary hover:text-blue-700">Skills</a></li>
    <li><a href="#projects" className="hover:text-primary hover:text-blue-700">Projects</a></li>
    <li><a href="#journey" className="hover:text-primary  hover:text-blue-700">Journey</a></li>
    <li><a href="#contact" className="hover:text-primary  hover:text-blue-700">Contact</a></li>
  </ul>
      </div>
    </nav>
  );
}
