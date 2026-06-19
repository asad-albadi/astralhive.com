import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { social } from '../data'

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="cta" data-reveal>
        <div className="cta__glow" aria-hidden="true" />
        <h2>Have something to build?</h2>
        <p>
          Tell me about your idea, product, or process worth automating. I'll get back to
          you with a straight answer on how to make it real.
        </p>
        <div className="cta__actions">
          <a
            className="btn btn--primary"
            href={social.linktree}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Reach out
          </a>
          <a
            className="btn btn--ghost"
            href={social.linktree}
            target="_blank"
            rel="noopener noreferrer"
          >
            All links <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
