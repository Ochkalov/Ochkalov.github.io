import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { aiTools } from '../../data/aiTools'
import { GlassPanel } from '../ui/GlassPanel'
import { AIToolCard } from './AIToolCard'

const flowSteps = [
  'Problem',
  'Context',
  'AI-assisted exploration',
  'Human review',
  'Production-quality implementation',
]

export function AIFluency() {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <GlassPanel accent="cyan" className="p-5 sm:p-6">
        <p className="text-base leading-7 text-muted">
          I use AI-assisted engineering workflows to accelerate discovery, implementation, debugging, refactoring,
          testing, documentation, and architectural exploration while keeping human review, code quality, and
          production safety at the center.
        </p>

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
              {index < flowSteps.length - 1 ? <ArrowRight className="hidden text-amber sm:block" size={18} /> : null}
            </motion.div>
          ))}
        </div>

        <p className="mt-7 flex items-start gap-3 rounded-md border border-amber/26 bg-amber/8 p-4 text-sm leading-6 text-amber">
          <CheckCircle2 className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
          AI is used as an engineering accelerator, not a replacement for architecture, ownership, or review.
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
