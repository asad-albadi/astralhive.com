import { services, highlights } from '../data'

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section__head" data-reveal>
        <p className="eyebrow">What I do</p>
        <h2>Services built around outcomes</h2>
        <p className="section__sub">
          Fewer moving parts, clearer ownership, and software that holds up in production.
        </p>
      </div>

      <div className="grid grid--3">
        {services.map((s, i) => (
          <article className="card card--service" key={s.title} data-reveal style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
            <span className="card__icon">
              <s.icon size={22} />
            </span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>

      <ul className="highlights" data-reveal>
        {highlights.map((h) => (
          <li key={h.title}>
            <span className="highlights__icon">
              <h.icon size={18} />
            </span>
            <div>
              <strong>{h.title}</strong>
              <span>{h.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
