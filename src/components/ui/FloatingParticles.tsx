import { motion } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const particles = [
  { left: '14%', top: '18%', delay: 0, color: 'bg-emerald' },
  { left: '42%', top: '12%', delay: 1.6, color: 'bg-cyan' },
  { left: '78%', top: '22%', delay: 0.8, color: 'bg-amber' },
  { left: '86%', top: '58%', delay: 2.2, color: 'bg-emerald' },
  { left: '22%', top: '72%', delay: 1.1, color: 'bg-amber' },
  { left: '58%', top: '84%', delay: 2.8, color: 'bg-cyan' },
]

export function FloatingParticles() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className={`absolute size-1 rounded-full ${particle.color} opacity-60 blur-[0.2px]`}
          style={{ left: particle.left, top: particle.top }}
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  opacity: [0.28, 0.78, 0.28],
                }
          }
          transition={{
            duration: 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
