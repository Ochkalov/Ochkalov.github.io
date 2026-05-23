import type { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  tone?: 'emerald' | 'amber' | 'cyan' | 'neutral'
}

const toneStyles = {
  emerald: 'border-emerald/30 bg-emerald/10 text-emerald',
  amber: 'border-amber/30 bg-amber/10 text-amber',
  cyan: 'border-cyan/30 bg-cyan/10 text-cyan',
  neutral: 'border-white/12 bg-white/[0.045] text-muted',
}

export function Badge({ tone = 'neutral', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium leading-none',
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
