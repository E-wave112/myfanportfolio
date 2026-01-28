import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col gap-6 py-6 lg:flex-row">
      {/* Project Image */}
      <div className="lg:w-1/3">
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group-hover:shadow-xl">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="flex flex-col justify-center lg:w-2/3">
        <h3 className="mb-3 text-2xl font-bold text-gray-800">
          {project.title}
        </h3>
        <p className="mb-4 text-gray-600">{project.description}</p>
        <div>
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
          >
            {project.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
