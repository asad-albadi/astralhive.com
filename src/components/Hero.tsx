import { ArrowRight, Sparkles } from 'lucide-react'
import { Logo } from './Logo'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content" data-reveal>
        <Logo className="hero__logo" />
        <span className="pill">
          <Sparkles size={14} /> Solo studio · full-scale craft
        </span>

        <h1 className="hero__title">
          Software that feels
          <br />
          <span className="grad-text">effortless to use.</span>
        </h1>

        <p className="hero__lead">
          Astral Hive builds high-performance cross-platform apps, automation, and
          comprehensive systems — for Windows, Linux, Android, and the web.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            See the work <ArrowRight size={18} />
          </a>
          <a className="btn btn--ghost" href="#contact">
            Start a project
          </a>
        </div>

        <dl className="hero__stats">
          <div>
            <dt>4</dt>
            <dd>Platforms shipped to</dd>
          </div>
          <div>
            <dt>5</dt>
            <dd>Products in the lineup</dd>
          </div>
          <div>
            <dt>1:1</dt>
            <dd>Work directly with the builder</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
