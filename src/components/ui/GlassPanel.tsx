import type { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

interface GlassPanelProps extends ComponentPropsWithoutRef<'div'> {
  accent?: 'emerald' | 'amber' | 'cyan' | 'neutral'
}

const accentStyles = {
  emerald: 'before:from-emerald/45',
  amber: 'before:from-amber/45',
  cyan: 'before:from-cyan/35',
  neutral: 'before:from-white/16',
}

export function GlassPanel({ accent = 'neutral', className, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg border border-line bg-panel/86 shadow-panel backdrop-blur-xl',
        'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:via-white/18 before:to-transparent',
        accentStyles[accent],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
