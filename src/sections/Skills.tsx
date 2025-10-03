import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostman, SiFigma, SiNetlify, SiJira, SiFirebase, SiMysql } from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "JavaScript", icon: <SiTypescript className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-sky-400 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-4xl" /> },
  { name: "Netlify", icon: <SiNetlify className="text-green-400 text-4xl" /> },
  { name: "Jira", icon: <SiJira className="text-blue-700 text-4xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-4xl " /> },
];

// type SkillsProps = {
//   skills: Skill[];

// };

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-3 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
