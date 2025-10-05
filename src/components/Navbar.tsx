

// Define props for Navbar (for future scalability)
type NavbarProps = {
  logo: string;
  links: { name: string; href: string }[];
};

export default function Navbar({ logo, links }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md flex justify-between items-center mt-16 px-8 py-3">
      {/* Logo */}
      <a href="#hero" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-30 w-30 rounded-full" />
      </a>
      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg font-medium text-gray-700">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-primary transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
