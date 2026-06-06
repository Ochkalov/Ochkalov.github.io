import type { LucideIcon } from 'lucide-react'
import { cn } from './cn'

interface IconBadgeProps {
  icon: LucideIcon
  tone?: 'emerald' | 'amber' | 'cyan'
  className?: string
}

const toneStyles = {
  emerald:
    'border-emerald/24 bg-emerald/[0.075] text-emerald shadow-[0_0_26px_rgba(20,241,149,0.11),inset_0_1px_0_rgba(255,255,255,0.035)]',
  amber:
    'border-amber/24 bg-amber/[0.075] text-amber shadow-[0_0_26px_rgba(246,195,67,0.12),inset_0_1px_0_rgba(255,255,255,0.035)]',
  cyan: 'border-cyan/22 bg-cyan/[0.065] text-cyan shadow-[0_0_24px_rgba(94,234,212,0.08),inset_0_1px_0_rgba(255,255,255,0.035)]',
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
