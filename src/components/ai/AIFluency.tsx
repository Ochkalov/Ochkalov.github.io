import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { aiOutcomes, aiTools } from '../../data/aiTools'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { Badge } from '../ui/Badge'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'
import { AIToolCard } from './AIToolCard'

const flowSteps = [
  'Problem',
  'Context',
  'AI-assisted exploration',
  'Human review',
  'Production-quality implementation',
]

export function AIFluency() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <GlassPanel accent="cyan" className="p-5 sm:p-6">
        <p className="text-base leading-7 text-muted">
          I use AI-assisted engineering workflows to accelerate discovery, implementation,
          debugging, refactoring, testing, documentation, code review preparation, and architectural
          exploration while keeping human review, code quality, production safety, and ownership at
          the center.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {aiOutcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              className="ai-outcome-card group relative overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.025] p-3 transition hover:border-cyan/20"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.012 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.36 }}
            >
              <span className="ai-outcome-trace" aria-hidden="true" />
              <div className="relative z-10 flex items-start gap-3">
                <IconBadge
                  icon={outcome.icon}
                  tone={index % 2 === 0 ? 'emerald' : 'amber'}
                  className="size-8"
                />
                <div>
                  <h3 className="text-sm font-bold text-ink">{outcome.title}</h3>
                  <Badge tone={index % 2 === 0 ? 'emerald' : 'amber'} className="mt-2">
                    {outcome.signal}
                  </Badge>
                </div>
              </div>
              <p className="relative z-10 mt-3 text-xs leading-5 text-muted">
                {outcome.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.42 }}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-emerald/30 bg-emerald/10 text-emerald">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1 rounded-md border border-line bg-white/[0.035] px-3 py-2 text-sm font-semibold text-ink">
                {step}
              </span>
              {index < flowSteps.length - 1 ? (
                <ArrowRight className="hidden text-amber sm:block" size={18} />
              ) : null}
            </motion.div>
          ))}
        </div>

        <p className="mt-7 flex items-start gap-3 rounded-md border border-amber/26 bg-amber/8 p-4 text-sm leading-6 text-amber">
          <CheckCircle2 className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
          AI is used as an engineering accelerator, not a replacement for architecture, ownership,
          or review.
        </p>
      </GlassPanel>

      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.045 } },
        }}
      >
        {aiTools.map((tool, index) => (
          <motion.div
            key={tool.title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <AIToolCard tool={tool} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
