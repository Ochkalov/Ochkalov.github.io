import { useEffect, useMemo, useRef, useState } from 'react'
import { Link2, MousePointer2, X } from 'lucide-react'
import { motion } from 'motion/react'
import { getSkillDetail, getSkillName, skillGroups, type SkillDetail } from '../../data/skills'
import { Badge } from '../ui/Badge'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'
import { cn } from '../ui/cn'
import { SkillPill } from './SkillPill'

function buildSkillLookup() {
  const lookup = new Map<string, { detail: SkillDetail; groupTitle: string }>()

  skillGroups.forEach((group) => {
    group.skills.forEach((skill) => {
      lookup.set(getSkillName(skill), {
        detail: getSkillDetail(skill, group.title),
        groupTitle: group.title,
      })
    })
  })

  return lookup
}

interface InspectorPosition {
  left: number
  width: number
}

export function TechStack() {
  const skillLookup = useMemo(() => buildSkillLookup(), [])
  const stackRef = useRef<HTMLDivElement>(null)
  const inspectorSlotRef = useRef<HTMLDivElement>(null)
  const [selectedSkill, setSelectedSkill] = useState<string | null>('Angular')
  const [previewedSkill, setPreviewedSkill] = useState<string | null>(null)
  const [inspectorPosition, setInspectorPosition] = useState<InspectorPosition | null>(null)
  const activeSkillName = previewedSkill ?? selectedSkill ?? 'Angular'
  const activeSkill = skillLookup.get(activeSkillName) ?? skillLookup.get('Angular')

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedSkill(null)
        setPreviewedSkill(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    let frame = 0
    const desktopQuery = window.matchMedia('(min-width: 1280px)')

    const updateInspectorPosition = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const stack = stackRef.current
        const slot = inspectorSlotRef.current

        if (!stack || !slot || !desktopQuery.matches) {
          setInspectorPosition(null)
          return
        }

        const stackRect = stack.getBoundingClientRect()
        const slotRect = slot.getBoundingClientRect()
        const topOffset = 96
        const shouldPin = stackRect.top <= topOffset && stackRect.bottom > 220

        if (!shouldPin) {
          setInspectorPosition(null)
          return
        }

        const nextPosition = {
          left: Math.round(slotRect.left),
          width: Math.round(slotRect.width),
        }

        setInspectorPosition((current) =>
          current?.left === nextPosition.left && current.width === nextPosition.width
            ? current
            : nextPosition,
        )
      })
    }

    updateInspectorPosition()
    window.addEventListener('scroll', updateInspectorPosition, { passive: true })
    window.addEventListener('resize', updateInspectorPosition)
    desktopQuery.addEventListener('change', updateInspectorPosition)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateInspectorPosition)
      window.removeEventListener('resize', updateInspectorPosition)
      desktopQuery.removeEventListener('change', updateInspectorPosition)
    }
  }, [])

  return (
    <div ref={stackRef} className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
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
                {group.skills.map((skill) => {
                  const skillName = getSkillName(skill)

                  return (
                    <SkillPill
                      key={skillName}
                      skill={skill}
                      groupTitle={group.title}
                      isActive={selectedSkill === skillName}
                      isPreviewed={previewedSkill === skillName}
                      onSelect={(nextSkill) =>
                        setSelectedSkill((current) => (current === nextSkill ? null : nextSkill))
                      }
                      onPreview={setPreviewedSkill}
                      onPreviewEnd={() => setPreviewedSkill(null)}
                    />
                  )
                })}
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>

      {activeSkill ? (
        <div ref={inspectorSlotRef} className="xl:min-h-px">
          <GlassPanel
            accent="cyan"
            className={cn(
              'h-fit p-5 xl:max-h-[calc(100vh-7rem)] xl:self-start xl:overflow-y-auto xl:overscroll-contain',
              inspectorPosition ? 'xl:fixed xl:top-24 xl:z-30' : 'xl:sticky xl:top-24',
            )}
            style={
              inspectorPosition
                ? {
                    left: inspectorPosition.left,
                    width: inspectorPosition.width,
                  }
                : undefined
            }
          >
            <motion.div
              key={activeSkill.detail.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <IconBadge
                    icon={MousePointer2}
                    tone={activeSkill.detail.highlight ? 'emerald' : 'cyan'}
                  />
                  <div>
                    <p className="text-xs font-bold uppercase text-amber">
                      {activeSkill.groupTitle}
                    </p>
                    <h3 className="mt-1 text-xl font-black text-ink">{activeSkill.detail.name}</h3>
                  </div>
                </div>
                {selectedSkill ? (
                  <button
                    type="button"
                    className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-muted transition hover:border-amber/30 hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
                    aria-label="Clear selected skill"
                    onClick={() => setSelectedSkill(null)}
                  >
                    <X size={15} aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              <p className="mt-5 text-sm leading-6 text-ink">{activeSkill.detail.summary}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{activeSkill.detail.seniorUsage}</p>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase text-cyan">
                    <Link2 size={13} aria-hidden="true" />
                    Used In
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.detail.usedInProjects.map((project) => (
                      <Badge key={project} tone="emerald">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase text-cyan">Domains</p>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.detail.domains.map((domain) => (
                      <Badge key={domain} tone="amber">
                        {domain}
                      </Badge>
                    ))}
                  </div>
                </div>

                {activeSkill.detail.relatedSkills.length ? (
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase text-cyan">Connected Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {activeSkill.detail.relatedSkills.map((skill) => (
                        <button
                          key={skill}
                          type="button"
                          className={cn(
                            'rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-xs font-medium text-muted transition',
                            'hover:border-emerald/28 hover:bg-emerald/8 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald',
                          )}
                          onClick={() => {
                            if (skillLookup.has(skill)) {
                              setSelectedSkill(skill)
                            }
                          }}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          </GlassPanel>
        </div>
      ) : null}
    </div>
  )
}
