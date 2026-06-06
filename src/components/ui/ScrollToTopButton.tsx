import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 720)

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          className="fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-lg border border-emerald/22 bg-charcoal/82 text-emerald shadow-[0_0_26px_rgba(20,241,149,0.11),inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-xl transition hover:border-amber/30 hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
          aria-label="Scroll back to top"
          initial={reducedMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={handleClick}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
