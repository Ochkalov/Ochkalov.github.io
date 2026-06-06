import type { CSSProperties } from 'react'
import { motion } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { GlassPanel } from '../ui/GlassPanel'

const labels = [
  { text: 'AI-Assisted Engineering', position: 'left-3 top-8 sm:left-8', tone: 'emerald' },
  { text: 'Full-Stack Delivery', position: 'right-3 top-16 sm:right-8', tone: 'amber' },
  { text: 'Enterprise Architecture', position: 'left-4 bottom-20 sm:left-10', tone: 'cyan' },
  { text: 'Data-Driven Systems', position: 'right-4 bottom-28 sm:right-8 sm:bottom-24', tone: 'emerald' },
  { text: 'API Integration', position: 'left-1/2 bottom-12 -translate-x-1/2', tone: 'amber' },
]

const cubeLayers = [
  'translate-y-[-94px] scale-[0.42] opacity-70',
  'translate-y-[-66px] scale-[0.56] opacity-82',
  'translate-y-[-36px] scale-[0.72] opacity-92',
  'translate-y-[-6px] scale-[0.92] opacity-100',
  'translate-y-[34px] scale-[1.1] opacity-88',
  'translate-y-[70px] scale-[1.22] opacity-58',
]

export function AnimatedEngineeringCore() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <GlassPanel
      accent="emerald"
      className="relative min-h-[390px] border-emerald/15 bg-charcoal/60 p-5 sm:min-h-[460px]"
    >
      <div className="absolute inset-0 technical-grid opacity-35" aria-hidden="true" />
      <div className="hero-core-scan absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="hero-terrain absolute inset-x-0 bottom-0 h-28" aria-hidden="true" />
      <div className="absolute inset-x-10 bottom-8 h-28 bg-[radial-gradient(ellipse_at_center,rgba(20,241,149,0.22),transparent_68%)] blur-xl" />

      <motion.div
        aria-hidden="true"
        className="orbital-line absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber/24"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="orbital-line absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald/22"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan/14"
        animate={reducedMotion ? undefined : { rotate: [8, 368] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative h-72 w-72"
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  filter: [
                    'drop-shadow(0 0 18px rgba(20, 241, 149, 0.24))',
                    'drop-shadow(0 0 32px rgba(246, 195, 67, 0.24))',
                    'drop-shadow(0 0 18px rgba(20, 241, 149, 0.24))',
                  ],
                }
          }
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {cubeLayers.map((layer, index) => (
            <div
              key={layer}
              className={`isometric-cube absolute left-1/2 top-1/2 ${layer}`}
              style={{ '--cube-index': index } as CSSProperties}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-md bg-amber/75 blur-xl" />
          <div className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-md bg-amber shadow-amber" />
          <div className="absolute left-[43%] top-[26%] size-4 rounded bg-emerald shadow-glow" />
          <div className="absolute right-[34%] top-[39%] size-3 rounded bg-cyan/80 shadow-glow" />
        </motion.div>
      </div>

      {labels.map((label, index) => (
        <motion.div
          key={label.text}
          className={`absolute ${label.position}`}
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, index % 2 === 0 ? -7 : 7, 0],
                  x: [0, index % 2 === 0 ? 5 : -5, 0],
                }
          }
          transition={{
            duration: 5.5 + index * 0.45,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span
            className={`inline-flex max-w-[12rem] rounded-md border bg-charcoal/80 px-3 py-2 text-[11px] font-bold uppercase leading-4 backdrop-blur ${
              label.tone === 'amber'
                ? 'border-amber/35 text-amber'
                : label.tone === 'cyan'
                  ? 'border-cyan/30 text-cyan'
                  : 'border-emerald/35 text-emerald'
            }`}
          >
            {label.text}
          </span>
        </motion.div>
      ))}
    </GlassPanel>
  )
}
