import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface AnimatedMetricProps {
  value?: number
  prefix?: string
  suffix?: string
  staticValue?: string
  animate?: boolean
}

export function AnimatedMetric({ value, prefix = '', suffix = '', staticValue, animate = true }: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' })
  const reducedMotion = usePrefersReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (typeof value !== 'number' || !animate) {
      return undefined
    }

    if (isInView && !reducedMotion) {
      let animationFrame = 0
      const start = performance.now()
      const duration = 1050

      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.round(easedProgress * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick)
        }
      }

      animationFrame = requestAnimationFrame(tick)

      return () => cancelAnimationFrame(animationFrame)
    }

    return undefined
  }, [animate, isInView, reducedMotion, value])

  if (staticValue) {
    return <span ref={ref}>{staticValue}</span>
  }

  const visibleValue = !animate || reducedMotion ? value : displayValue

  return (
    <span ref={ref}>
      {prefix}
      {(visibleValue ?? 0).toLocaleString()}
      {suffix}
    </span>
  )
}
