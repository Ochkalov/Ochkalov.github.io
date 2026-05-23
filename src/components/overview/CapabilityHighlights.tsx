import { CircuitBoard, Database, Gauge, Layers3 } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'

const icons = [CircuitBoard, Layers3, Database, Gauge]

export function CapabilityHighlights() {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {profile.capabilities.map((capability, index) => (
        <motion.div
          key={capability}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06, duration: 0.42 }}
        >
          <GlassPanel accent={index % 2 === 0 ? 'emerald' : 'amber'} className="h-full p-4">
            <IconBadge icon={icons[index]} tone={index % 2 === 0 ? 'emerald' : 'amber'} />
            <h3 className="mt-4 text-base font-semibold text-ink">{capability}</h3>
          </GlassPanel>
        </motion.div>
      ))}
    </div>
  )
}
