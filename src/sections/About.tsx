import React from "react";

type AboutProps = {
  title: string;
  description: string;
};

const About: React.FC<AboutProps> = ({ title, description }) => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-teal-50 to-gray-100 shadow-md rounded-2xl p-8 my-12 text-center"
    >
      {/* Section Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>

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
