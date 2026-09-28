import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { ButtonLink } from './ButtonLink'
import { navigation } from '../data'

export function Nav() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 60rem)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!open) return
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    window.addEventListener('keydown', escape)
    return () => window.removeEventListener('keydown', escape)
  }, [open])

  return (
    <header
      className="nav"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false)
      }}
    >
      <div className="container nav__inner">
        <a
          href="#top"
          className="brand-link"
          aria-label="Astral Hive home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>
        <nav className="nav__links" aria-label="Primary">
          {navigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <ButtonLink className="nav__action" href="#contact">
          Let’s talk
        </ButtonLink>
        <button
          ref={toggle}
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>
      <nav
        id="mobile-menu"
        className="nav__mobile"
        aria-label="Mobile"
        hidden={!open}
      >
        {navigation.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <ButtonLink href="#contact" onClick={() => setOpen(false)}>
          Let’s talk
        </ButtonLink>
      </nav>
    </header>
  )
}
