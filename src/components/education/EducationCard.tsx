import { GraduationCap, Landmark } from 'lucide-react'
import { profile } from '../../data/profile'
import { Badge } from '../ui/Badge'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'

export function EducationCard() {
  const { education } = profile

  return (
    <GlassPanel accent="amber" className="p-6 sm:p-7">
      <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
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
      </div>
    </GlassPanel>
  )
}
