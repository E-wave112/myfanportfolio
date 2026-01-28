import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="pt-12">
      {/* Section Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
      </div>

      {/* Project Cards */}
      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} />
            {index < projects.length - 1 && (
              <hr className="my-6 border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
