import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiFigma,
  SiNetlify,
  SiJira,
  SiFirebase,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

export default function Skills() {
  const { t } = useTranslation(); 

  const skills: Skill[] = [
    { name: t("skills.list.html"), icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: t("skills.list.css"), icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: t("skills.list.javascript"), icon: <SiTypescript className="text-yellow-400 text-4xl" /> },
    { name: t("skills.list.react"), icon: <FaReact className="text-sky-400 text-4xl" /> },
    { name: t("skills.list.typescript"), icon: <SiTypescript className="text-blue-400 text-4xl" /> },
    { name: t("skills.list.node"), icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: t("skills.list.tailwind"), icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: t("skills.list.mongodb"), icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: t("skills.list.mysql"), icon: <SiMysql className="text-blue-600 text-4xl" /> },
    { name: t("skills.list.postman"), icon: <SiPostman className="text-orange-600 text-4xl" /> },
    { name: t("skills.list.figma"), icon: <SiFigma className="text-pink-500 text-4xl" /> },
    { name: t("skills.list.netlify"), icon: <SiNetlify className="text-teal-400 text-4xl" /> },
    { name: t("skills.list.jira"), icon: <SiJira className="text-blue-700 text-4xl" /> },
    { name: t("skills.list.firebase"), icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: t("skills.list.git"), icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">{t("skills.title")}</h2>
      <h3 className="text-xl text-gray-600 mb-8">{t("skills.subtitle")}</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-3 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
          >
            {skill.icon}
            <p className="text-lg font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
