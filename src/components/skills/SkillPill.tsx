import { highlightedSkills } from '../../data/skills'
import { cn } from '../ui/cn'

interface SkillPillProps {
  skill: string
}

const skillColorMap: Record<string, { border: string; text: string; bg: string }> = {
  Angular: { border: 'border-red-500/30', text: 'text-red-400', bg: 'bg-red-500/8' },
  React: { border: 'border-sky-400/30', text: 'text-sky-400', bg: 'bg-sky-400/8' },
  TypeScript: { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/8' },
  RxJS: { border: 'border-pink-500/30', text: 'text-pink-400', bg: 'bg-pink-500/8' },
  NgRx: { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/8' },
  'Redux Toolkit': { border: 'border-violet-500/30', text: 'text-violet-400', bg: 'bg-violet-500/8' },
  'Tailwind CSS': { border: 'border-cyan-400/30', text: 'text-cyan-400', bg: 'bg-cyan-400/8' },
  'Material UI': { border: 'border-blue-400/30', text: 'text-blue-400', bg: 'bg-blue-400/8' },
  'Node.js': { border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/8' },
  Express: { border: 'border-neutral-500/30', text: 'text-neutral-400', bg: 'bg-neutral-500/8' },
  'Express.js': { border: 'border-neutral-500/30', text: 'text-neutral-400', bg: 'bg-neutral-500/8' },
  '.NET': { border: 'border-purple-400/30', text: 'text-purple-400', bg: 'bg-purple-400/8' },
  'C#': { border: 'border-indigo-400/30', text: 'text-indigo-400', bg: 'bg-indigo-400/8' },
  Java: { border: 'border-orange-500/30', text: 'text-orange-400', bg: 'bg-orange-500/8' },
  'Spring Boot': { border: 'border-green-500/30', text: 'text-green-400', bg: 'bg-green-500/8' },
  'SQL Server': { border: 'border-red-400/30', text: 'text-red-400', bg: 'bg-red-400/8' },
  'Ag-Grid': { border: 'border-blue-400/30', text: 'text-blue-400', bg: 'bg-blue-400/8' },
  Highcharts: { border: 'border-amber-400/30', text: 'text-amber-400', bg: 'bg-amber-400/8' },
  OpenAPI: { border: 'border-emerald-400/30', text: 'text-emerald-400', bg: 'bg-emerald-400/8' },
  'OpenAPI/Swagger': { border: 'border-emerald-400/30', text: 'text-emerald-400', bg: 'bg-emerald-400/8' },
  Swagger: { border: 'border-green-400/30', text: 'text-green-400', bg: 'bg-green-400/8' },
  Docker: { border: 'border-sky-500/30', text: 'text-sky-400', bg: 'bg-sky-500/8' },
  AWS: { border: 'border-amber-500/30', text: 'text-amber-400', bg: 'bg-amber-500/8' },
  Azure: { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/8' },
  'CI/CD': { border: 'border-neutral-400/30', text: 'text-neutral-400', bg: 'bg-neutral-400/8' },
  Jest: { border: 'border-red-600/30', text: 'text-red-400', bg: 'bg-red-600/8' },
  Cypress: { border: 'border-emerald-600/30', text: 'text-emerald-400', bg: 'bg-emerald-600/8' },
  Ionic: { border: 'border-blue-400/30', text: 'text-blue-400', bg: 'bg-blue-400/8' },
  Capacitor: { border: 'border-sky-400/30', text: 'text-sky-400', bg: 'bg-sky-400/8' },
  Android: { border: 'border-green-400/30', text: 'text-green-400', bg: 'bg-green-400/8' },
  'Android Studio': { border: 'border-green-500/30', text: 'text-green-400', bg: 'bg-green-500/8' },
  iOS: { border: 'border-neutral-400/30', text: 'text-neutral-300', bg: 'bg-neutral-400/8' },
  'GitHub Copilot': { border: 'border-indigo-400/30', text: 'text-indigo-400', bg: 'bg-indigo-400/8' },
  Gemini: { border: 'border-blue-400/30', text: 'text-blue-400', bg: 'bg-blue-400/8' },
  'Gemini-based workflows': { border: 'border-emerald-400/30', text: 'text-emerald-400', bg: 'bg-emerald-400/8' },
}

export function SkillPill({ skill }: SkillPillProps) {
  const isHighlighted = highlightedSkills.has(skill)
  const customColor = skillColorMap[skill]

  if (customColor) {
    return (
      <span
        className={cn(
          'inline-flex rounded-md border px-2 py-1 text-[11px] font-semibold leading-none transition duration-150',
          customColor.border,
          customColor.bg,
          customColor.text,
          isHighlighted && 'shadow-glow font-bold'
        )}
      >
        {skill}
      </span>
    )
  }

  return (
    <span
      className={cn(
        'inline-flex rounded-md border px-2 py-1 text-[11px] font-semibold leading-none transition duration-150',
        isHighlighted
          ? 'border-emerald/35 bg-emerald/10 text-emerald shadow-glow font-bold'
          : 'border-white/12 bg-white/[0.04] text-muted hover:border-cyan/25 hover:text-ink'
      )}
    >
      {skill}
    </span>
  )
}
