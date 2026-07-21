import { MapPin } from 'lucide-react'
import type { ExperienceItem as ExperienceItemModel } from '../../data/experience'
import { Badge } from '../ui/Badge'

interface ExperienceItemProps {
  item: ExperienceItemModel
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="relative grid gap-3 border-l border-amber/28 pb-8 pl-6 last:pb-0 md:grid-cols-[11rem_minmax(0,1fr)_minmax(10rem,auto)] md:gap-5">
      <span className="absolute -left-[7px] top-1 size-3 rounded-full border border-amber bg-charcoal shadow-amber" />
      <time className="text-sm font-semibold text-amber">{item.dates}</time>
      <div>
        <h3 className="text-lg font-semibold text-ink">{item.company}</h3>
        <p className="mt-1 text-sm font-medium text-cyan">{item.role}</p>
        <p className="mt-3 text-sm leading-6 text-muted">{item.context}</p>
        {item.highlights?.length ? (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-muted/95">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span
                  className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-emerald"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-3 flex items-center gap-2 text-xs text-muted">
          <MapPin size={14} aria-hidden="true" />
          {item.location}
        </p>
      </div>
      <div className="md:text-right">
        <Badge tone="amber">{item.domain}</Badge>
      </div>
    </article>
  )
}
