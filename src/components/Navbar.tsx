import { useState } from "react";

type NavLink = {
  name: string;
  href: string;
};

type NavbarProps = {
  logo: string;
  links: NavLink[];
};

export default function Navbar({ logo, links }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed  left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full shadow-sm" />
          <span className="text-xl font-semibold text-gray-800 tracking-wide">
            Samira
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
