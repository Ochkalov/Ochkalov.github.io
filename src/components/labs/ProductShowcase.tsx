import { ArrowUpRight, Check, Film } from 'lucide-react'
import { motion } from 'motion/react'
import { independentProjects } from '../../data/independentProjects'
import { ScreenshotGallery } from './ScreenshotGallery'

function mediaUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

export function ProductShowcase() {
  return (
    <div className="mb-10 overflow-hidden border-y border-line/15">
      <div className="flex flex-col gap-2 border-b border-line/15 py-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">
            Selected independent products
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">
            End-to-end product engineering
          </h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted">
          Shipped work spanning deterministic simulation, operational UX, game systems, and
          evidence-led delivery.
        </p>
      </div>

      {independentProjects.map((project, index) => (
        <motion.article
          key={project.id}
          className="grid gap-7 border-b border-line/15 py-8 last:border-b-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:gap-12 lg:py-11"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
        >
          <div className={index % 2 ? 'lg:order-2' : undefined}>
            <div
              className={
                project.media.kind === 'local'
                  ? 'group relative aspect-video overflow-hidden border border-line/20 bg-black shadow-panel'
                  : 'group relative'
              }
            >
              {project.media.kind === 'local' ? (
                <video
                  aria-label={`Watch ${project.title} demo`}
                  className="size-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={mediaUrl(project.media.poster)}
                >
                  <source src={mediaUrl(project.media.src)} type="video/mp4" />
                </video>
              ) : (
                <ScreenshotGallery title={project.title} images={project.media.images} />
              )}
              {project.media.kind === 'local' ? (
                <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 border border-white/15 bg-black/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
                  <Film size={11} aria-hidden="true" />
                  {project.media.duration}
                </span>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">
              {project.category}
            </p>
            <h4 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              {project.title}
            </h4>
            <p className="mt-4 text-sm leading-6 text-muted sm:text-[15px]">{project.description}</p>

            <ul className="mt-5 space-y-2.5">
              {project.proof.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted/95">
                  <Check className="mt-1 shrink-0 text-emerald" size={15} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-y border-line/10 py-3 font-mono text-[10px] uppercase tracking-wider text-ink/80">
              {project.signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>

            <div className="mt-5">
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald transition hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {project.id === 'relay-zero' ? 'Play live game' : 'Open live product'}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <p className="mt-5 font-mono text-[10px] leading-5 text-muted/75">
              {project.tags.join(' · ')}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
