import { skillGroups } from '../../data/skills'
import { GlassPanel } from '../ui/GlassPanel'
import { SkillPill } from './SkillPill'

export function TechStack() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {skillGroups.map((group, index) => (
        <GlassPanel
          key={group.title}
          accent={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'cyan' : 'emerald'}
          className="p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <h3 className="w-40 shrink-0 text-sm font-semibold text-ink">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillPill key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </GlassPanel>
      ))}
    </div>
  )
}
