import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data'

export function Projects() {
  return (
    <section className="section" id="work">
      <div className="section__head" data-reveal>
        <p className="eyebrow">Selected work</p>
        <h2>Products in the wild</h2>
        <p className="section__sub">
          Real, shipped projects — each one designed, built, and maintained end to end.
        </p>
      </div>

      <div className="grid grid--projects">
        {projects.map((p, i) => (
          <a
            className="card card--project"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            key={p.name}
            data-reveal
            style={{ '--accent': p.accent, '--d': `${i * 80}ms` } as React.CSSProperties}
          >
            <span className="card__bar" aria-hidden="true" />
            <div className="card--project__top">
              <div className="card--project__title">
                {p.image ? (
                  <img className="card--project__logo" src={p.image} alt="" loading="lazy" />
                ) : p.icon ? (
                  <span className="card--project__logo card--project__logo--icon">
                    <p.icon size={20} />
                  </span>
                ) : null}
                <h3>{p.name}</h3>
              </div>
              {p.badge && <span className="badge">{p.badge}</span>}
            </div>
            <p className="card--project__tagline">{p.tagline}</p>
            <p className="card--project__desc">{p.description}</p>

            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <span className="card--project__cta">
              {p.cta} <ArrowUpRight size={16} />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
