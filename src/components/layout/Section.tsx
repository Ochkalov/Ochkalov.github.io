import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Container } from './Container'
import { cn } from '../ui/cn'

interface SectionProps {
  id: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-10 md:py-14', className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-6 max-w-3xl"
        >
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
          {intro ? <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">{intro}</p> : null}
        </motion.div>
        {children}
      </Container>
    </section>
  )
}
