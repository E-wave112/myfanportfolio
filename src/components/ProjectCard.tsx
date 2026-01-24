import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 py-6">
      {/* Project Image */}
      <div className="lg:w-1/3">
        <div className="relative overflow-hidden rounded-lg shadow-md aspect-video">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="lg:w-2/3 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div>
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            {project.linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
