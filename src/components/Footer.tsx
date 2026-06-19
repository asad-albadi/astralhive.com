import { Logo } from './Logo'
import { social } from '../data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#top" className="nav__brand" aria-label="Astral Hive home">
          <Logo className="nav__logo" />
          <span>Astral Hive</span>
        </a>
        <nav className="footer__links" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href={social.linktree} target="_blank" rel="noopener noreferrer">
            Links
          </a>
        </nav>
        <p className="footer__copy">© {year} Astral Hive. All rights reserved.</p>
      </div>
    </footer>
  )
}
