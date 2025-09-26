type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
          >
            <p className="text-lg font-semibold text-gray-800">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
