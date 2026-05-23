import { motion } from 'motion/react'
import { heroMetrics } from '../../data/impact'
import { AnimatedMetric } from '../impact/AnimatedMetric'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'

export function HeroMetrics() {
  return (
    <GlassPanel accent="amber" className="mt-8 p-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {heroMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="flex min-h-[86px] items-center gap-3 rounded-md border border-white/[0.07] bg-white/[0.025] px-3 py-3"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.42 }}
          >
            <IconBadge icon={metric.icon} tone={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'cyan' : 'emerald'} />
            <div>
              <p className="text-2xl font-black text-ink">
                <AnimatedMetric
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  staticValue={metric.staticValue}
                />
              </p>
              <p className="mt-1 text-xs leading-4 text-muted">{metric.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassPanel>
  )
}
