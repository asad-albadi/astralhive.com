import { ButtonLink } from './ButtonLink'
import { social, principles } from '../data'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__layout">
        <div className="about__intro">
          <p className="eyebrow">
            <span>03</span> The studio
          </p>
          <h2>
            Small by choice.
            <br />
            Committed by nature.
          </h2>
          <p>
            Astral Hive is an independent software studio led by Asad Al Badi.
            You work directly with the person designing, building, and
            maintaining your software.
          </p>
          <p>
            It’s a focused way of working: fewer handoffs, clearer decisions,
            and personal attention from the first conversation to the updates
            that follow.
          </p>
          <ButtonLink variant="text" href={social.portfolio} external>
            Meet the developer
          </ButtonLink>
        </div>
        <ol className="about__principles">
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <span className="about__number">0{index + 1}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
