import type { ComponentPropsWithoutRef } from 'react'
import { cn } from './cn'

interface GlassPanelProps extends ComponentPropsWithoutRef<'div'> {
  accent?: 'emerald' | 'amber' | 'cyan' | 'neutral'
}

const accentGradients = {
  emerald: 'from-emerald/24 via-white/4 to-emerald/8 hover:from-emerald/38 hover:via-white/6 hover:to-emerald/14 hover:shadow-[0_0_24px_rgba(20,241,149,0.06)]',
  amber: 'from-amber/24 via-white/4 to-amber/8 hover:from-amber/38 hover:via-white/6 hover:to-amber/14 hover:shadow-[0_0_24px_rgba(246,195,67,0.05)]',
  cyan: 'from-cyan/26 via-white/4 to-cyan/8 hover:from-cyan/38 hover:via-white/6 hover:to-cyan/14 hover:shadow-[0_0_24px_rgba(94,234,212,0.06)]',
  neutral: 'from-white/8 via-white/2 to-white/3 hover:from-white/16 hover:via-white/4 hover:to-white/6',
}

export function GlassPanel({ accent = 'neutral', className, children, ...props }: GlassPanelProps) {
  const classes = className ? className.split(' ') : []
  
  // Separate padding and background/flex classes that should go to the inner content area
  const paddingClasses = classes.filter(
    (c) =>
      c.startsWith('p-') ||
      c.startsWith('px-') ||
      c.startsWith('py-') ||
      c.startsWith('pt-') ||
      c.startsWith('pb-') ||
      c.startsWith('pl-') ||
      c.startsWith('pr-') ||
      c.includes(':p-') ||
      c.includes(':px-') ||
      c.includes(':py-')
  )
  
  const bgClasses = classes.filter((c) => c.startsWith('bg-') || c.includes(':bg-'))
  const borderClasses = classes.filter((c) => c.startsWith('border') || c.includes(':border'))
  const layoutClasses = classes.filter((c) => c.startsWith('flex') || c.startsWith('grid') || c.startsWith('col-') || c.startsWith('row-'))
  
  const innerClasses = [...paddingClasses, ...bgClasses, ...layoutClasses]
  const outerClasses = classes.filter(
    (c) => !innerClasses.includes(c) && !borderClasses.includes(c)
  )

  return (
    <div
      className={cn(
        'relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-br transition-all duration-300 shadow-panel backdrop-blur-xl',
        accentGradients[accent],
        outerClasses.join(' ')
      )}
      {...props}
    >
      <div
        className={cn(
          'relative rounded-[11px] bg-panel/95 h-full w-full backdrop-blur-xl',
          'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:via-white/14 before:to-transparent',
          innerClasses.length > 0 ? innerClasses.join(' ') : 'p-5 sm:p-6'
        )}
      >
        {children}
      </div>
    </div>
  )
}
