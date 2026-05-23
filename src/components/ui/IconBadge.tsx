import type { LucideIcon } from 'lucide-react'
import { cn } from './cn'

interface IconBadgeProps {
  icon: LucideIcon
  tone?: 'emerald' | 'amber' | 'cyan'
  className?: string
}

const toneStyles = {
  emerald: 'border-emerald/30 bg-emerald/10 text-emerald shadow-glow',
  amber: 'border-amber/30 bg-amber/10 text-amber shadow-amber',
  cyan: 'border-cyan/30 bg-cyan/10 text-cyan',
}

export function IconBadge({ icon: Icon, tone = 'emerald', className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-md border',
        toneStyles[tone],
        className,
      )}
      aria-hidden="true"
    >
      <Icon size={18} strokeWidth={1.8} />
    </span>
  )
}
