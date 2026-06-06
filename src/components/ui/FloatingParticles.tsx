import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

import { EMERALD, CYAN, AMBER, WHITE, rgba, type RGBColor } from '../../utils/colors'

const particleColors = [EMERALD, CYAN, AMBER, WHITE] as const satisfies readonly RGBColor[]

export function FloatingParticles() {
  const reducedMotion = usePrefersReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return
    const ctx = canvas.getContext('2d')!
    let raf: number

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const w = window.innerWidth || document.documentElement.clientWidth || 1024
      const h = window.innerHeight || document.documentElement.clientHeight || 768
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    window.addEventListener('resize', resize)
    resize()

    // Dynamic document height
    let docHeight = document.documentElement.scrollHeight || 9600

    // Initialize particles distributed along the entire page height
    const particleCount = 200
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const yFraction = Math.random()
      return {
        x: Math.random(),
        yPage: yFraction * docHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2.2 + 1.8,
        color: particleColors[i % particleColors.length],
        alphaPhase: Math.random() * Math.PI * 2,
      }
    })

    let t = 0
    const animate = () => {
      t += 0.003
      const cw = canvas.width / Math.min(window.devicePixelRatio, 2)
      const ch = canvas.height / Math.min(window.devicePixelRatio, 2)
      const sy = window.scrollY

      // Update docHeight in case of resize/load
      docHeight = document.documentElement.scrollHeight || 9600

      ctx.clearRect(0, 0, cw, ch)

      // Define page-relative geometric constellation hubs at key Y-positions
      const hubs = [
        { xPercent: 0.82, yPage: 400, speed: 0.06, color: EMERALD },
        { xPercent: 0.15, yPage: 1250, speed: -0.04, color: CYAN },
        { xPercent: 0.78, yPage: 2300, speed: 0.05, color: AMBER },
        { xPercent: 0.18, yPage: 3450, speed: -0.05, color: EMERALD },
        { xPercent: 0.85, yPage: 4800, speed: 0.04, color: CYAN },
        { xPercent: 0.12, yPage: 6300, speed: -0.06, color: AMBER },
        { xPercent: 0.75, yPage: 7800, speed: 0.05, color: EMERALD },
        { xPercent: 0.5, yPage: 9100, speed: -0.04, color: CYAN },
      ]

      // Update particles positions & wrap around
      particles.forEach((p) => {
        p.x += p.vx / cw
        p.yPage += p.vy

        if (p.x < 0) p.x = 1
        if (p.x > 1) p.x = 0
        if (p.yPage < 0) p.yPage = docHeight
        if (p.yPage > docHeight) p.yPage = 0
      })

      // 1. Draw geometric hubs and connect them to nearby particles
      hubs.forEach((hub) => {
        const hx = hub.xPercent * cw
        const hy = hub.yPage - sy

        // Skip drawing if the hub is far outside the viewport
        const radius = 240
        if (hy < -radius || hy > ch + radius) return

        ctx.strokeStyle = rgba(hub.color, 0.12)
        ctx.lineWidth = 1

        // Outer concentric orbit ellipse
        ctx.beginPath()
        ctx.ellipse(hx, hy, 220, 150, t * hub.speed, 0, Math.PI * 2)
        ctx.setLineDash([8, 12])
        ctx.stroke()

        // Inner concentric orbit ellipse
        ctx.beginPath()
        ctx.ellipse(hx, hy, 120, 80, t * -hub.speed * 1.6, 0, Math.PI * 2)
        ctx.setLineDash([4, 8])
        ctx.stroke()
        ctx.setLineDash([])

        // Draw central core glow
        ctx.beginPath()
        ctx.arc(hx, hy, 4, 0, Math.PI * 2)
        ctx.fillStyle = rgba(hub.color, 0.45)
        ctx.fill()

        // Connect particles to this hub
        particles.forEach((p) => {
          const px = p.x * cw
          const py = p.yPage - sy

          const dx = px - hx
          const dy = py - hy
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 220) {
            const alpha = (1 - dist / 220) * 0.18
            ctx.strokeStyle = rgba(hub.color, alpha)
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(hx, hy)
            ctx.lineTo(px, py)
            ctx.stroke()
          }
        })
      })

      // 2. Filter on-screen particles for draw & inter-particle mesh connection
      const onScreen = particles
        .map((p) => ({
          p,
          x: p.x * cw,
          y: p.yPage - sy,
        }))
        .filter((item) => item.y >= -50 && item.y <= ch + 50)

      // Draw lines between nearby particles (constellation mesh)
      for (let i = 0; i < onScreen.length; i++) {
        for (let j = i + 1; j < onScreen.length; j++) {
          const p1 = onScreen[i]
          const p2 = onScreen[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15
            ctx.strokeStyle = rgba(p1.p.color, alpha)
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // 3. Draw particles themselves
      onScreen.forEach(({ p, x, y }) => {
        const baseAlpha = 0.25
        const maxAlpha = 0.85
        const alpha =
          baseAlpha + ((maxAlpha - baseAlpha) * (Math.sin(t * 2.5 + p.alphaPhase) + 1)) / 2

        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)

        ctx.fillStyle = rgba(p.color, alpha)
        ctx.fill()

        // Tiny outer halo for the larger ones
        if (p.size > 3) {
          ctx.beginPath()
          ctx.arc(x, y, p.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = rgba(p.color, alpha * 0.25)
          ctx.fill()
        }
      })

      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reducedMotion])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-5]"
      style={{
        width: '100vw',
        height: '100vh',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    />
  )
}
