import { useRef, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import {
  Cpu,
  Layers3,
  Globe,
  Database,
  Blocks,
  Code2,
  Rocket,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { GlassPanel } from '../ui/GlassPanel'

import { EMERALD, AMBER, CYAN, rgba, type RGBColor as Color } from '../../utils/colors'

/* ── constellation nodes ── */
interface SkillNode {
  title: string
  desc: string
  icon: LucideIcon
  tone: Color
  angle: number
  ring: number // 0, 1, 2
}

const nodes: SkillNode[] = [
  { title: 'AI-Assisted Engineering', desc: 'AI tools & productivity', icon: Sparkles, tone: EMERALD, angle: -100, ring: 1 },
  { title: 'React', desc: 'Modern UI interfaces', icon: Code2, tone: CYAN, angle: -45, ring: 2 },
  { title: 'API Integration', desc: 'Systems & data', icon: Globe, tone: AMBER, angle: -5, ring: 1 },
  { title: 'Full-Stack Delivery', desc: 'Idea to production', icon: Rocket, tone: AMBER, angle: 45, ring: 2 },
  { title: 'Enterprise Architecture', desc: 'Scalable & secure', icon: Layers3, tone: CYAN, angle: 85, ring: 1 },
  { title: 'Data-Driven Systems', desc: 'Dashboards & analytics', icon: Database, tone: EMERALD, angle: 135, ring: 2 },
  { title: 'Micro-Frontends', desc: 'Modular architectures', icon: Blocks, tone: CYAN, angle: 175, ring: 1 },
  { title: 'Angular', desc: 'Enterprise applications', icon: Cpu, tone: EMERALD, angle: -140, ring: 2 },
]

function useConstellationCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  reducedMotion: boolean,
) {
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return
    const ctx = canvas.getContext('2d')!
    let raf: number

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const parent = canvas.parentElement!
      const w = parent.clientWidth
      const h = parent.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const w = () => canvas.width / Math.min(window.devicePixelRatio, 2)
    const h = () => canvas.height / Math.min(window.devicePixelRatio, 2)

    /* — small orbiting particles on rings — */
    const ringParticles = Array.from({ length: 18 }, (_, i) => ({
      angle: Math.random() * 360,
      speed: 0.05 + Math.random() * 0.1,
      ring: i % 3,
      size: 1 + Math.random() * 1.5,
      color: [EMERALD, CYAN, AMBER][i % 3],
    }))

    /* — ambient particles scattered everywhere — */
    const ambientParticles = Array.from({ length: 45 }, (_, i) => ({
      x: Math.random(), // 0 to 1
      y: Math.random(), // 0 to 1
      vx: (Math.random() - 0.5) * 0.0005,
      vy: (Math.random() - 0.5) * 0.0005,
      size: Math.random() * 2 + 0.5,
      color: [EMERALD, CYAN, AMBER, '#ffffff'][i % 4],
      alphaPhase: Math.random() * Math.PI * 2,
    }))

    let t = 0
    const animate = () => {
      t += 0.004
      const cw = w()
      const ch = h()
      const cx = cw / 2
      const cy = ch / 2
      const dim = Math.min(cw, ch)
      const mx = (mouseRef.current.x - 0.5) * 15
      const my = (mouseRef.current.y - 0.5) * 15

      ctx.clearRect(0, 0, cw, ch)

      /* ambient free-floating particles */
      ambientParticles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
        
        const px = p.x * cw + mx * 0.5
        const py = p.y * ch + my * 0.5
        const alpha = 0.1 + 0.3 * (Math.sin(t * 3 + p.alphaPhase) + 1) / 2

        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = rgba(p.color, alpha)
        ctx.fill()
      })

      /* radiating hexagonal ripples (center emission) */
      for (let i = 0; i < 3; i++) {
        const rippleT = (t * 0.6 + i / 3) % 1
        // ease out effect for the ripple
        const easeOut = 1 - Math.pow(1 - rippleT, 3)
        const rR = dim * 0.06 + easeOut * dim * 0.25
        
        ctx.beginPath()
        for (let j = 0; j < 6; j++) {
          const angle = (Math.PI / 3) * j - Math.PI / 2
          const hx = cx + mx + Math.cos(angle) * rR
          const hy = cy + my + Math.sin(angle) * rR
          if (j === 0) ctx.moveTo(hx, hy)
          else ctx.lineTo(hx, hy)
        }
        ctx.closePath()
        ctx.strokeStyle = rgba(EMERALD, 0.15 * (1 - rippleT))
        ctx.lineWidth = 1
        ctx.stroke()
      }

      /* orbit rings (ellipses with dashed/broken look) */
      const ringRadii = [0.18, 0.30, 0.42]
      ringRadii.forEach((r, i) => {
        ctx.beginPath()
        ctx.ellipse(cx + mx, cy + my, cw * r, ch * r, 0, 0, Math.PI * 2)
        ctx.strokeStyle = rgba([EMERALD, CYAN, AMBER][i], 0.12 + 0.04 * Math.sin(t * 2 + i))
        ctx.lineWidth = 1
        
        // Create an irregular dashed line to look "broken" and technical
        const circ = Math.PI * 2 * cw * r
        ctx.setLineDash([circ * 0.15, circ * 0.02, circ * 0.05, circ * 0.08])
        ctx.lineDashOffset = t * (30 + i * 15) * (i % 2 === 0 ? 1 : -1)
        
        ctx.stroke()
        ctx.setLineDash([])
      })

      /* connector lines from center to each node */
      nodes.forEach((node) => {
        const rad = (node.angle * Math.PI) / 180
        const r = ringRadii[node.ring]
        
        const ex = cx + mx + Math.cos(rad) * (cw * r)
        const ey = cy + my + Math.sin(rad) * (ch * r)
        
        ctx.beginPath()
        ctx.moveTo(cx + mx, cy + my)
        ctx.lineTo(ex, ey)
        ctx.strokeStyle = rgba(node.tone, 0.12)
        ctx.lineWidth = 0.5
        ctx.stroke()

        /* small travelling dot along connector */
        const dotT = ((t * 0.6 + node.angle * 0.01) % 1)
        const dx = cx + mx + Math.cos(rad) * (cw * r) * dotT
        const dy = cy + my + Math.sin(rad) * (ch * r) * dotT
        const dotGrad = ctx.createRadialGradient(dx, dy, 0, dx, dy, 3)
        dotGrad.addColorStop(0, rgba(node.tone, 0.8))
        dotGrad.addColorStop(1, rgba(node.tone, 0))
        ctx.beginPath()
        ctx.arc(dx, dy, 3, 0, Math.PI * 2)
        ctx.fillStyle = dotGrad
        ctx.fill()
      })

      /* particles on rings */
      ringParticles.forEach((p) => {
        p.angle += p.speed
        const rad = (p.angle * Math.PI) / 180
        const r = ringRadii[p.ring]
        const px = cx + mx + Math.cos(rad) * (cw * r)
        const py = cy + my + Math.sin(rad) * (ch * r)

        const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3.5)
        grad.addColorStop(0, rgba(p.color, 0.8))
        grad.addColorStop(0.5, rgba(p.color, 0.2))
        grad.addColorStop(1, rgba(p.color, 0))
        ctx.beginPath()
        ctx.arc(px, py, p.size * 3.5, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        ctx.beginPath()
        ctx.arc(px, py, p.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = rgba(p.color, 0.9)
        ctx.fill()
      })

      /* core pulse (hexagonal glow) */
      const pulse = (Math.sin(t * 2.5) + 1) / 2
      const coreR = dim * 0.08 + pulse * dim * 0.015
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2
        const hx = cx + mx + Math.cos(angle) * coreR
        const hy = cy + my + Math.sin(angle) * coreR
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()
      const coreGrad = ctx.createRadialGradient(cx + mx, cy + my, 0, cx + mx, cy + my, coreR)
      coreGrad.addColorStop(0, rgba(EMERALD, 0.15 + pulse * 0.1))
      coreGrad.addColorStop(0.5, rgba(CYAN, 0.05))
      coreGrad.addColorStop(1, rgba(EMERALD, 0))
      ctx.fillStyle = coreGrad
      ctx.fill()

      raf = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef, reducedMotion])

  return { onPointerMove }
}

/* ── node component ── */
function ConstellationNode({
  node,
  index,
  reducedMotion,
}: {
  node: SkillNode
  index: number
  reducedMotion: boolean
}) {
  const rad = (node.angle * Math.PI) / 180
  const ringRadii = [18, 30, 42]
  const r = ringRadii[node.ring]
  
  /* position as percentage from center using the ellipse radii */
  const x = 50 + Math.cos(rad) * r
  const y = 50 + Math.sin(rad) * r

  return (
    <motion.div
      className="absolute z-10"
      style={{ left: `${x}%`, top: `${y}%`, x: '-50%', y: '-50%' }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="group flex items-center gap-2.5 rounded-xl border bg-black/50 px-2.5 py-2 backdrop-blur-md"
        style={{
          borderColor: rgba(node.tone, 0.25),
          boxShadow: `0 4px 16px -2px ${rgba(node.tone, 0.15)}`,
        }}
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, index % 2 === 0 ? -3 : 3, 0],
                x: [0, index % 2 === 0 ? 2 : -2, 0],
              }
        }
        transition={{ duration: 5 + index * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{
          scale: 1.05,
          borderColor: rgba(node.tone, 0.5),
          boxShadow: `0 4px 20px 0 ${rgba(node.tone, 0.25)}`,
        }}
      >
        <node.icon size={18} style={{ color: rgba(node.tone, 0.95) }} />
        <div className="min-w-0 text-left">
          <p
            className="text-[9px] font-bold uppercase tracking-wider sm:text-[10px]"
            style={{ color: rgba(node.tone, 1) }}
          >
            {node.title}
          </p>
          <p className="mt-0.5 max-w-[120px] text-[8px] leading-[1.3] text-muted/80 sm:text-[9px]">
            {node.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── main ── */
export function AnimatedEngineeringCore() {
  const reducedMotion = usePrefersReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onPointerMove } = useConstellationCanvas(canvasRef, containerRef, reducedMotion)

  return (
    <GlassPanel
      accent="emerald"
      className="relative min-h-[440px] overflow-hidden border-emerald/15 bg-charcoal/60 p-0 sm:min-h-[500px]"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 technical-grid opacity-20" aria-hidden="true" />

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, ${rgba(EMERALD, 0.06)}, transparent 55%),
            radial-gradient(circle at 25% 30%, ${rgba(CYAN, 0.04)}, transparent 40%),
            radial-gradient(circle at 75% 70%, ${rgba(AMBER, 0.035)}, transparent 40%)
          `,
        }}
      />

      {/* Canvas layer */}
      <div ref={containerRef} className="absolute inset-0" onPointerMove={onPointerMove}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          aria-hidden="true"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Center hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex size-28 items-center justify-center sm:size-32"
        style={{ x: '-50%', y: '-50%' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          animate={
            reducedMotion
              ? undefined
              : {
                  filter: [
                    `drop-shadow(0 0 15px ${rgba(EMERALD, 0.2)})`,
                    `drop-shadow(0 0 25px ${rgba(EMERALD, 0.4)})`,
                    `drop-shadow(0 0 15px ${rgba(EMERALD, 0.2)})`,
                  ],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <polygon
              points="50,2 95,26 95,74 50,98 5,74 5,26"
              fill={rgba(EMERALD, 0.08)}
              stroke={rgba(EMERALD, 0.4)}
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>

        <div className="z-10 flex flex-col items-center justify-center text-center">
          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-emerald/80 sm:text-[9px]">
            Senior
          </span>
          <span className="text-[9px] font-black uppercase tracking-[0.12em] text-emerald sm:text-[11px]">
            Full-Stack
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-emerald/80 sm:text-[9px]">
            Engineer
          </span>
        </div>
      </motion.div>

      {/* Skill nodes */}
      {nodes.map((node, i) => (
        <ConstellationNode key={node.title} node={node} index={i} reducedMotion={reducedMotion} />
      ))}
    </GlassPanel>
  )
}

