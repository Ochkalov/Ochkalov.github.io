import type { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

interface GlassPanelProps extends ComponentPropsWithoutRef<'div'> {
  accent?: 'emerald' | 'amber' | 'cyan' | 'neutral'
}

const accentStyles = {
  emerald: 'glass-panel-emerald',
  amber: 'glass-panel-amber',
  cyan: 'glass-panel-cyan',
  neutral: 'glass-panel-neutral',
}

export function GlassPanel({ accent = 'neutral', className, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'glass-panel relative overflow-hidden rounded-lg border bg-panel/78 shadow-panel backdrop-blur-xl transition duration-300',
        'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px',
        'after:pointer-events-none after:absolute after:inset-0 after:rounded-lg',
        accentStyles[accent],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
