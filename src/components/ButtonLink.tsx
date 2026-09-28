import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'light' | 'text'
  external?: boolean
}

export function ButtonLink({
  variant = 'primary',
  external = false,
  className = '',
  children,
  ...props
}: Props) {
  return (
    <a
      {...props}
      className={`button button--${variant} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="button__label">{children}</span>
      {external ? (
        <ArrowUpRight size={17} aria-hidden="true" />
      ) : (
        <ArrowRight size={17} aria-hidden="true" />
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
