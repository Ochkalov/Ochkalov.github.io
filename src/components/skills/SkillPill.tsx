import { highlightedSkills, type SkillItem, getSkillDetail, getSkillName } from '../../data/skills'
import { cn } from '../ui/cn'

interface SkillPillProps {
  skill: SkillItem
  groupTitle: string
  isActive: boolean
  isPreviewed: boolean
  onSelect: (skillName: string) => void
  onPreview: (skillName: string) => void
  onPreviewEnd: () => void
}

const skillColorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  Angular: {
    border: 'border-red-400/22',
    text: 'text-red-300',
    bg: 'bg-red-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(248,113,113,0.1)]',
  },
  React: {
    border: 'border-sky-300/22',
    text: 'text-sky-300',
    bg: 'bg-sky-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(125,211,252,0.1)]',
  },
  TypeScript: {
    border: 'border-blue-300/22',
    text: 'text-blue-300',
    bg: 'bg-blue-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(96,165,250,0.1)]',
  },
  RxJS: {
    border: 'border-pink-400/22',
    text: 'text-pink-300',
    bg: 'bg-pink-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(244,114,182,0.08)]',
  },
  NgRx: {
    border: 'border-purple-400/22',
    text: 'text-purple-300',
    bg: 'bg-purple-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(192,132,252,0.08)]',
  },
  'Redux Toolkit': {
    border: 'border-violet-400/22',
    text: 'text-violet-300',
    bg: 'bg-violet-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(167,139,250,0.08)]',
  },
  'Tailwind CSS': {
    border: 'border-cyan/25',
    text: 'text-cyan',
    bg: 'bg-cyan/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(94,234,212,0.1)]',
  },
  'Material UI': {
    border: 'border-blue-300/22',
    text: 'text-blue-300',
    bg: 'bg-blue-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(96,165,250,0.08)]',
  },
  'Node.js': {
    border: 'border-emerald/24',
    text: 'text-emerald',
    bg: 'bg-emerald/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(20,241,149,0.1)]',
  },
  'Express.js': {
    border: 'border-white/12',
    text: 'text-neutral-300',
    bg: 'bg-white/[0.035]',
    glow: 'shadow-[0_0_18px_rgba(255,255,255,0.05)]',
  },
  '.NET Web APIs': {
    border: 'border-purple-300/24',
    text: 'text-purple-300',
    bg: 'bg-purple-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(216,180,254,0.08)]',
  },
  'C#': {
    border: 'border-indigo-300/24',
    text: 'text-indigo-300',
    bg: 'bg-indigo-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(165,180,252,0.08)]',
  },
  'Java/Spring Boot': {
    border: 'border-green-300/24',
    text: 'text-green-300',
    bg: 'bg-green-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(134,239,172,0.08)]',
  },
  'SQL Server': {
    border: 'border-red-300/20',
    text: 'text-red-300',
    bg: 'bg-red-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(252,165,165,0.07)]',
  },
  'Ag-Grid': {
    border: 'border-blue-300/24',
    text: 'text-blue-300',
    bg: 'bg-blue-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(147,197,253,0.08)]',
  },
  Highcharts: {
    border: 'border-amber/26',
    text: 'text-amber',
    bg: 'bg-amber/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(246,195,67,0.1)]',
  },
  'OpenAPI/Swagger': {
    border: 'border-emerald/24',
    text: 'text-emerald',
    bg: 'bg-emerald/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(20,241,149,0.1)]',
  },
  Docker: {
    border: 'border-sky-300/22',
    text: 'text-sky-300',
    bg: 'bg-sky-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(125,211,252,0.08)]',
  },
  AWS: {
    border: 'border-amber/24',
    text: 'text-amber',
    bg: 'bg-amber/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(246,195,67,0.08)]',
  },
  Azure: {
    border: 'border-blue-300/22',
    text: 'text-blue-300',
    bg: 'bg-blue-500/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(96,165,250,0.08)]',
  },
  'CI/CD': {
    border: 'border-white/14',
    text: 'text-neutral-300',
    bg: 'bg-white/[0.035]',
    glow: 'shadow-[0_0_18px_rgba(255,255,255,0.05)]',
  },
  Ionic: {
    border: 'border-blue-300/24',
    text: 'text-blue-300',
    bg: 'bg-blue-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(147,197,253,0.08)]',
  },
  Cordova: {
    border: 'border-cyan/22',
    text: 'text-cyan',
    bg: 'bg-cyan/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(94,234,212,0.08)]',
  },
  Capacitor: {
    border: 'border-sky-300/22',
    text: 'text-sky-300',
    bg: 'bg-sky-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(125,211,252,0.08)]',
  },
  Android: {
    border: 'border-green-300/24',
    text: 'text-green-300',
    bg: 'bg-green-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(134,239,172,0.08)]',
  },
  iOS: {
    border: 'border-white/14',
    text: 'text-neutral-300',
    bg: 'bg-white/[0.035]',
    glow: 'shadow-[0_0_18px_rgba(255,255,255,0.05)]',
  },
  'GitHub Copilot': {
    border: 'border-indigo-300/22',
    text: 'text-indigo-300',
    bg: 'bg-indigo-400/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(165,180,252,0.08)]',
  },
  'OpenAI Codex': {
    border: 'border-emerald/24',
    text: 'text-emerald',
    bg: 'bg-emerald/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(20,241,149,0.1)]',
  },
  'AI-assisted engineering': {
    border: 'border-emerald/24',
    text: 'text-emerald',
    bg: 'bg-emerald/[0.07]',
    glow: 'shadow-[0_0_20px_rgba(20,241,149,0.1)]',
  },
}

export function SkillPill({
  skill,
  groupTitle,
  isActive,
  isPreviewed,
  onSelect,
  onPreview,
  onPreviewEnd,
}: SkillPillProps) {
  const skillName = getSkillName(skill)
  const detail = getSkillDetail(skill, groupTitle)
  const isHighlighted = highlightedSkills.has(skillName) || detail.highlight
  const customColor = skillColorMap[skillName]

  return (
    <button
      type="button"
      className={cn(
        'skill-pill inline-flex rounded-md border px-2.5 py-1.5 text-[11px] font-semibold leading-none transition duration-180 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald',
        customColor
          ? `${customColor.border} ${customColor.bg} ${customColor.text}`
          : isHighlighted
            ? 'border-emerald/28 bg-emerald/8 text-emerald'
            : 'border-white/8 bg-white/[0.025] text-muted hover:text-ink',
        isHighlighted && 'font-bold',
        (isActive || isPreviewed) &&
          cn(
            'translate-y-[-1px] border-emerald/40 bg-emerald/10 text-ink',
            customColor?.glow ?? 'shadow-[0_0_22px_rgba(20,241,149,0.1)]',
          ),
      )}
      aria-pressed={isActive}
      title={detail.summary}
      onClick={() => onSelect(skillName)}
      onMouseEnter={() => onPreview(skillName)}
      onMouseLeave={onPreviewEnd}
      onFocus={() => onPreview(skillName)}
      onBlur={onPreviewEnd}
    >
      {skillName}
    </button>
  )
}
