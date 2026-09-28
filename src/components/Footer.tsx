import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { Logo } from './Logo'
import { navigation, social } from '../data'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <a href="#top" className="brand-link" aria-label="Astral Hive home">
              <Logo />
            </a>
            <p>
              Thoughtful software.
              <br />
              Built for what comes next.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="footer__label">Explore</p>
            {navigation.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Elsewhere">
            <p className="footer__label">Elsewhere</p>
            <a
              href={social.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer portfolio <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={social.linktree} target="_blank" rel="noopener noreferrer">
              All links <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Astral Hive. All rights reserved.</p>
          <a href="#top">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
