import { services, highlights } from '../data'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading
          number="01"
          label="What we build"
          title={
            <>
              The right software.
              <br />
              For the real problem.
            </>
          }
        >
          From a focused tool to a connected platform, we build around what your
          business actually needs.
        </SectionHeading>
        <div className="services__grid">
          {services.map((service, i) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__top">
                <service.icon size={28} strokeWidth={1.5} aria-hidden="true" />
                <span>0{i + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-card__detail">{service.detail}</div>
            </article>
          ))}
        </div>
        <ul className="highlights">
          {highlights.map((highlight) => (
            <li key={highlight.title}>
              <highlight.icon size={22} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
