import wordmark from '../../brand/logos/astral-hive-wordmark-navy.png'
import whiteWordmark from '../../brand/logos/astral-hive-wordmark-white.png'
import whiteMark from '../../brand/logos/astral-hive-monogram-white.png'

/** Approved artwork includes the monogram; never re-typeset or recolor it. */
export function Logo({
  variant = 'navy',
  className = '',
}: {
  variant?: 'navy' | 'white' | 'mark'
  className?: string
}) {
  return (
    <img
      className={`logo ${className}`}
      src={
        variant === 'mark'
          ? whiteMark
          : variant === 'white'
            ? whiteWordmark
            : wordmark
      }
      width={variant === 'mark' ? 246 : 493}
      height={variant === 'mark' ? 270 : 148}
      alt="Astral Hive"
    />
  )
}
