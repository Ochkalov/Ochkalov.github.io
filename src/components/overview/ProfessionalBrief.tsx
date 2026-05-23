import { Quote } from 'lucide-react'
import { profile } from '../../data/profile'
import { GlassPanel } from '../ui/GlassPanel'

export function ProfessionalBrief() {
  return (
    <GlassPanel accent="emerald" className="p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="hidden size-10 shrink-0 items-center justify-center rounded-md border border-emerald/30 bg-emerald/10 text-emerald sm:flex">
          <Quote size={19} aria-hidden="true" />
        </span>
        <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
          {profile.brief.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </GlassPanel>
  )
}
