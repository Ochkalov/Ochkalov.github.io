import { motion, useScroll } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-emerald via-cyan to-amber"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
