import { ButtonLink } from './ButtonLink'
import { social } from '../data'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__panel" data-parallax>
          <div className="contact__content">
            <p className="eyebrow">
              <span>04</span> Build with us
            </p>
            <h2>
              Good software starts
              <br />
              with a conversation.
            </h2>
            <p>
              A new product, a process worth simplifying, or a system that needs
              to work better. Tell us what you have in mind.
            </p>
            <ButtonLink variant="light" href={social.linktree} external>
              Let’s talk about it
            </ButtonLink>
            <span className="contact__note">
              Choose your preferred way to connect on Linktree.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
