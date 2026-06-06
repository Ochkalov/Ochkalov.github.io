import type { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  tone?: 'emerald' | 'amber' | 'cyan' | 'neutral'
}

const toneStyles = {
  emerald: 'border-emerald/22 bg-emerald/[0.055] text-emerald shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]',
  amber: 'border-amber/22 bg-amber/[0.055] text-amber shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]',
  cyan: 'border-cyan/22 bg-cyan/[0.055] text-cyan shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]',
  neutral: 'border-white/8 bg-white/[0.025] text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]',
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
