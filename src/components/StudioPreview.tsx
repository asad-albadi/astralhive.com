import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'

export function StudioPreview() {
  return (
    <aside
      className="studio-preview"
      data-parallax
      aria-label="Featured studio products"
    >
      <div className="studio-preview__heading">
        <Logo variant="mark" />
        <div>
          <p className="eyebrow">Inside the studio</p>
          <h2>Ideas. Built into reality.</h2>
        </div>
      </div>
      <div className="studio-preview__products">
        {projects.slice(0, 2).map((project) => (
          <a
            className="studio-preview__product"
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="studio-preview__logo">
              <img src={project.image} width="48" height="48" alt="" />
            </span>
            <span>
              <strong>{project.name}</strong>
              <span className="studio-preview__description">
                {project.tagline}
              </span>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
      <ButtonLink href="#work" variant="text">
        Explore all {projects.length} products
      </ButtonLink>
    </aside>
  )
}
