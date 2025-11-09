import React from "react";

type AboutProps = {
  title: string;
  description: string;
};

const About: React.FC<AboutProps> = ({ title, description }) => {
  return (
    <section
      id="about"
    className="scroll-mt-24 py-20 px-8 bg-white/50 text-center text-bo backdrop-blur-sm rounded-2xl shadow-sm my-12"
>
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">{title}</h2>

      {/* Yellow divider line
      <div className="w-20 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div> */}

      {/* About text */}
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
        {description}
      </p>
    </section>
  );
};

export default About;
