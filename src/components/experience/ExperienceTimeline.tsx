import { experience } from '../../data/experience'
import { GlassPanel } from '../ui/GlassPanel'
import { ExperienceItem } from './ExperienceItem'

export function ExperienceTimeline() {
  return (
    <GlassPanel accent="amber" className="p-5 sm:p-6">
      <div>
        {experience.map((item) => (
          <ExperienceItem key={`${item.company}-${item.dates}`} item={item} />
        ))}
      </div>
    </GlassPanel>
  )
}
