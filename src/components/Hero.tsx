import { ButtonLink } from './ButtonLink'
import { StudioPreview } from './StudioPreview'
import { projects } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="eyebrow">
              <span className="status-dot" /> Independent software studio
            </p>
            <h1 id="hero-title">
              Software built
              <br />
              for the way
              <br />
              <span>you work.</span>
            </h1>
            <p className="hero__lead">
              Thoughtful apps. Connected systems. Less busywork.
              <br className="desktop-break" /> We turn complex challenges into
              software that makes everyday work feel simple.
            </p>
            <div className="actions">
              <ButtonLink href="#contact">Start a conversation</ButtonLink>
              <ButtonLink href="#work" variant="text">
                Explore our work
              </ButtonLink>
            </div>
            <p className="hero__note">
              One dedicated builder. From first idea to what’s next.
            </p>
          </div>
          <StudioPreview />
        </div>
        <div className="hero__foot">
          <p>Built to fit your world.</p>
          <dl className="hero__facts">
            <div>
              <dt>04</dt>
              <dd>
                Platforms
                <br />
                <span>Web · Android · Windows · Linux</span>
              </dd>
            </div>
            <div>
              <dt>{String(projects.length).padStart(2, '0')}</dt>
              <dd>
                Products
                <br />
                <span>From everyday tools to SaaS</span>
              </dd>
            </div>
            <div>
              <dt>1:1</dt>
              <dd>
                Collaboration
                <br />
                <span>Direct access to the builder</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
