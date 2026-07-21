import { ExternalLink, Github } from "lucide-react";
import type { CSSProperties } from "react";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <section id="projects" className="page projects-page scroll-section" aria-labelledby="projects-title">
      <header className="page-intro" data-reveal="heading">
        <h1 id="projects-title" className="page-title">Projects</h1>
        <p className="page-lede">Selected builds across automation, environmental education, and Minecraft modding.</p>
      </header>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card" data-reveal="item" style={{ "--reveal-index": index } as CSSProperties}>
            <div className="project-card__field" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.techStack[0]}</span>
            </div>
            <div className="project-card__content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="project-card__tags" aria-label="Technologies">
                {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
              </ul>
            </div>
            <div className="project-card__actions">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link project-card__source">
                  <Github size={17} aria-hidden="true" /> Source
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                  <ExternalLink size={17} aria-hidden="true" /> Live site
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
