import profileImage from "../assets/profile.jpeg"; 

type HeroProps = {
  profileImage: string;
  name: string;
  title: string;
  skills: string[];
};

export default function Hero({ name, title, skills }: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
      <img
        src={profileImage}
        alt={name}
        className="w-48 h-48 rounded-full shadow-xl border-4 border-primary mb-8"
      />

      <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
        Hi, I'm <span className="text-primary">{name}</span>
      </h1>

      <p className="text-2xl text-gray-700 font-medium mb-6">
        {title}
      </p>

      <p className="text-lg text-gray-500 mb-10">
        {skills.join(" | ")}
      </p>

      {/* --- Call to Action Buttons --- */}
      <div className="mt-6 space-x-4">
        <a
          href="#projects"
          className="bg-gray-200 px-6 py-2 rounded-lg shadow hover:bg-gray-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="bg-gray-200 px-6 py-2 rounded-lg shadow hover:bg-gray-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
