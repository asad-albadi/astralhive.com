import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data'

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <a
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-card__visual">
        {project.image ? (
          <img
            className={
              project.imageSurface === 'dark'
                ? 'project-card__logo--dark'
                : undefined
            }
            src={project.image}
            width="64"
            height="64"
            alt=""
            loading="lazy"
          />
        ) : project.icon ? (
          <project.icon size={38} strokeWidth={1.5} aria-hidden="true" />
        ) : null}
        <h3>{project.name}</h3>
      </div>
      <div className="project-card__body">
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__metadata">
          {project.badge && <span className="badge">{project.badge}</span>}
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <span className="project-card__cta">
          {project.cta}
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
      </div>
    </a>
  )
}
