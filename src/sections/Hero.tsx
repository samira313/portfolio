import profile from "../assets/profile.jpeg"; // your profile picture

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 pt-20"
    >
      {/* --- Profile Picture --- */}
      <img
        src={profile}
        alt="Samira Ahmadi"
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
      />

      {/* --- Name & Title --- */}
      <h1 className="text-4xl md:text-5xl font-heading text-gray-800">
        Hi, I’m <span className="text-primary">Samira Ahmadi</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Junior Software Developer | React | TypeScript | TailwindCSS
      </p>

      {/* --- Call to Action Buttons --- */}
      <div className="mt-6 space-x-4">
        <a
          href="#projects"
          className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90"
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
