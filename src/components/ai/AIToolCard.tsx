import { useState } from 'react'
import { motion } from 'motion/react'
import type { AITool } from '../../data/aiTools'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'

interface AIToolCardProps {
  tool: AITool
  index: number
}

export function AIToolCard({ tool, index }: AIToolCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isActive, setIsActive] = useState(false)
  const tone = index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'cyan' : 'emerald'

  return (
    <motion.button
      type="button"
      className="group h-full rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
      style={{ transformStyle: 'preserve-3d' }}
      aria-pressed={isActive}
      aria-label={`${tool.title}: ${tool.description}`}
      data-active={isActive ? 'true' : undefined}
      onClick={() => setIsActive((current) => !current)}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              scale: 1.018,
              rotateX: 1.4,
              rotateY: index % 2 === 0 ? -1.8 : 1.8,
            }
      }
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <GlassPanel accent={tone} className="ai-tool-card h-full p-4">
        <span className="ai-card-sweep" aria-hidden="true" />
        <span className="ai-card-corner ai-card-corner-left" aria-hidden="true" />
        <span className="ai-card-corner ai-card-corner-right" aria-hidden="true" />

        <div className="relative z-10">
          <IconBadge icon={tool.icon} tone={tone} />
          <h3 className="mt-4 text-sm font-semibold text-ink">{tool.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{tool.description}</p>
          <div className="mt-4 h-px overflow-hidden rounded-full bg-white/[0.045]">
            <span className="ai-card-signal block h-full w-2/3 rounded-full" aria-hidden="true" />
          </div>
        </div>
      </GlassPanel>
    </motion.button>
  )
}
