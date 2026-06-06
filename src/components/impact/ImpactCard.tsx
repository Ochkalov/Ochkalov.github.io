import { motion } from 'motion/react'
import type { ImpactItem } from '../../data/impact'
import { Badge } from '../ui/Badge'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'
import { AnimatedMetric } from './AnimatedMetric'

interface ImpactCardProps {
  item: ImpactItem
}

export function ImpactCard({ item }: ImpactCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.48, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <GlassPanel className="group h-full p-5 transition duration-200 hover:border-emerald/34 hover:shadow-glow">
        <div className="flex items-start gap-4">
          <IconBadge icon={item.icon} tone="emerald" />
          <div>
            <h3 className="text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            {item.proofPoints?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.proofPoints.map((proofPoint, proofIndex) => (
                  <Badge key={proofPoint} tone={proofIndex % 2 === 0 ? 'emerald' : 'cyan'}>
                    {proofPoint}
                  </Badge>
                ))}
              </div>
            ) : null}
            {item.metric ? (
              <p className="mt-4 inline-flex rounded-md border border-amber/30 bg-amber/10 px-2.5 py-1.5 text-xs font-bold text-amber">
                <AnimatedMetric
                  value={item.metric.value}
                  prefix={item.metric.prefix}
                  suffix={item.metric.suffix}
                  staticValue={item.metric.staticValue}
                />
              </p>
            ) : null}
          </div>
        </div>
      </GlassPanel>
    </motion.article>
  )
}
