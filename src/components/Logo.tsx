import { useId } from 'react'

/** Minimal hexagonal "hive" mark with an orbiting star. */
export function Logo({ className }: { className?: string }) {
  const gradId = useId()
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Astral Hive logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5 27.5 9v14L16 29.5 4.5 23V9L16 2.5Z"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m16 10 1.7 3.8L22 15l-3.3 1 .6 4.4L16 18l-3.3 2.4.6-4.4L10 15l4.3-1.2L16 10Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  )
}
