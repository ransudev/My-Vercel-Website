"use client";

import Link from "next/link";
import { Github, ExternalLink, ArrowDown } from "lucide-react";
import { SectionTitle, Button, TechBadge } from "../../components/ui";
import { projects, Project } from "../../data/projects";
import Squares from "../../components/ui/Squares";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:shadow-xl hover:border-violet-600 transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
      {/* Project Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-3 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} variant="outline" />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              icon={Github}
              className="flex-1 text-xs py-1.5"
            >
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="primary"
              icon={ExternalLink}
              className="flex-1 text-xs py-1.5"
            >
              Demo
            </Button>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="text-xs text-slate-500 italic">
              Links coming soon...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-950">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#271E37"
          hoverFillColor="#222222"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 w-full relative z-10">
        <SectionTitle
          title="My Projects"
          subtitle="Some of the things I've built"
        />

        <div className="max-w-6xl mx-auto pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Placeholder Note */}
          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400">
                Projects coming soon...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Scroll to next section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <Link
          href="/contact"
          className="text-slate-400 hover:text-violet-400 transition-colors"
          aria-label="Go to contact page"
        >
          <ArrowDown size={28} />
        </Link>
      </div>
    </section>
  );
}
