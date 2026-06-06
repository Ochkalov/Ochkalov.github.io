import { CalendarRange, GraduationCap, Landmark } from 'lucide-react'
import { profile } from '../../data/profile'
import { Badge } from '../ui/Badge'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'

export function EducationCard() {
  const { education } = profile

  return (
    <GlassPanel accent="amber" className="p-6 sm:p-7">
      <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
        <IconBadge icon={GraduationCap} tone="amber" className="size-12" />

        <div>
          <Badge tone="amber">Academic Foundation</Badge>
          <h3 className="mt-4 text-2xl font-black text-ink">{education.credential}</h3>
          <p className="mt-2 text-base font-semibold text-emerald">{education.focus}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <Landmark size={15} aria-hidden="true" />
            {education.institutionLabel}
          </p>
        </div>

        <div className="rounded-md border border-amber/18 bg-amber/[0.045] px-4 py-3 text-sm font-semibold text-amber shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
          <span className="flex items-center gap-2">
            <CalendarRange size={15} aria-hidden="true" />
            {education.dates}
          </span>
        </div>
      </div>
    </GlassPanel>
  )
}
