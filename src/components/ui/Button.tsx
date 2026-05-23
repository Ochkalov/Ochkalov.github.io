import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from './cn'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  icon?: ReactNode
  external?: boolean
  ariaLabel?: string
  className?: string
}

const variantStyles = {
  primary:
    'border-emerald/55 bg-emerald/13 text-ink shadow-glow hover:border-emerald hover:bg-emerald/18',
  secondary:
    'border-white/14 bg-white/[0.045] text-ink hover:border-amber/55 hover:bg-amber/10 hover:text-amber',
  ghost: 'border-transparent bg-transparent text-cyan hover:border-cyan/35 hover:bg-cyan/8',
}

export function Button({
  href,
  children,
  variant = 'secondary',
  icon,
  external = false,
  ariaLabel,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={cn(
        'group inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald',
        variantStyles[variant],
        className,
      )}
    >
      <span>{children}</span>
      <span className="transition duration-200 group-hover:translate-x-0.5">
        {icon ?? <ArrowUpRight aria-hidden="true" size={16} />}
      </span>
    </a>
  )
}
