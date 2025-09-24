type HeroProps = {
  profileImage: string;
  name: string;
  title: string;
  skills: string[];
};

export default function Hero({ profileImage, name, title, skills }: HeroProps) {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      {/* Profile Image */}
      <img
        src={profileImage}
        alt={name}
        className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-100 mb-20 mt-40"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
        Hi, I'm <span className="text-primary">{name}</span>
      </h1>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
        {title}
      </h2>

      {/* Skills */}
      <p className="text-gray-500 text-lg max-w-xl mb-6">
        {skills.join(" | ")}
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
