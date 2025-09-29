type Project = {
  title: string;
  description: string;
  link: string;
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-primary font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
