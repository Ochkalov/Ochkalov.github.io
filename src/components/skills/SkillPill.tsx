import { highlightedSkills } from '../../data/skills'
import { cn } from '../ui/cn'

interface SkillPillProps {
  skill: string
}

export function SkillPill({ skill }: SkillPillProps) {
  const isHighlighted = highlightedSkills.has(skill)

  return (
    <span
      className={cn(
        'inline-flex rounded-md border px-2.5 py-1.5 text-xs font-semibold leading-none transition',
        isHighlighted
          ? 'border-emerald/35 bg-emerald/10 text-emerald'
          : 'border-white/12 bg-white/[0.04] text-muted hover:border-cyan/25 hover:text-ink',
      )}
    >
      {skill}
    </span>
  )
}
