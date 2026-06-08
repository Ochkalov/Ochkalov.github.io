import { useState } from 'react'
import { ChevronDown, ArrowRight, ShieldCheck, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import type { LabProject } from '../../data/labs'
import { Badge } from '../ui/Badge'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'
import { cn } from '../ui/cn'

interface LabProjectCardProps {
  project: LabProject
  index: number
}

const PIPELINE_STEPS: Record<string, string[]> = {
  'interview-os': ['Sources', 'NotebookLM API', 'Local Storage', 'Angular Portal'],
  'research-runtime': ['Dashboard UI', 'API Service', 'Worker Daemon', 'Docker Run'],
  'governance-daemon': ['Model Forecast', 'Scoring Daemon', 'Verification Gate', 'Audit Logs'],
  'content-ops': ['Strategy Input', 'BullMQ Queues', 'Render Engine', 'PostgreSQL DB'],
  'health-intel': ['Wearable XML', 'ETL Parser', 'DuckDB Queries', 'Next.js UI'],
  'career-ops': ['Job Posting URL', 'Playwright Crawl', 'Weighted Matrix', 'Tailored PDF'],
  'second-brain': ['Raw Ingestion', 'Agent Rules', 'Wiki Synthesis', 'Obsidian Graph'],
}

const TONE_ORDER = ['emerald', 'amber', 'cyan'] as const
type Tone = typeof TONE_ORDER[number]

const TONE_THEMES: Record<Tone, { container: string; dot: string; text: string }> = {
  emerald: {
    container: 'text-emerald border-emerald/30 bg-emerald/10',
    dot: 'bg-emerald',
    text: 'text-emerald',
  },
  amber: {
    container: 'text-amber border-amber/30 bg-amber/10',
    dot: 'bg-amber',
    text: 'text-amber',
  },
  cyan: {
    container: 'text-cyan border-cyan/30 bg-cyan/10',
    dot: 'bg-cyan',
    text: 'text-cyan',
  },
}

export function LabProjectCard({ project, index }: LabProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  // Color theme mapping
  const tone = TONE_ORDER[index % 3]
  const theme = TONE_THEMES[tone]

  // Render a customized miniature flowchart depending on the project
  const renderFlowchart = () => {
    const flowSteps = PIPELINE_STEPS[project.id] || ['Input', 'Process', 'Output']

    return (
      <div className="mt-5 rounded-lg border border-white/5 bg-black/40 p-4">
        <h4 className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
          <Cpu size={12} className={theme.text} />
          Data & System Pipeline
        </h4>
        <div className="flex flex-col flex-wrap gap-2 md:flex-row md:items-center justify-between">
          {flowSteps.map((step, idx) => (
            <div key={step} className="flex flex-1 items-center justify-between md:justify-start gap-2">
              <div
                className={cn(
                  'flex-1 text-center rounded-md border py-1.5 px-2 text-[10px] font-mono font-semibold',
                  idx === flowSteps.length - 1
                    ? theme.container
                    : 'border-white/10 bg-white/[0.02] text-ink'
                )}
              >
                {step}
              </div>
              {idx < flowSteps.length - 1 && (
                <ArrowRight size={14} className="text-muted shrink-0 rotate-90 md:rotate-0 self-center mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <motion.article layout="position" className="h-full">
      <GlassPanel
        accent={tone}
        className={cn(
          "group flex h-full flex-col p-5 transition-all duration-300 hover:border-line/30",
          isExpanded ? "shadow-glow hover:shadow-glow border-line/25" : "hover:shadow-glow/5"
        )}
      >
        <div className="flex items-start justify-between">
          <IconBadge icon={project.icon} tone={tone} />
          <Badge tone={tone} className="text-[10px]">
            {project.status}
          </Badge>
        </div>

        <div className="mt-4 flex-1">
          <h3 className="text-base font-semibold text-ink leading-snug">{project.title}</h3>
          <p className="mt-0.5 text-[11px] font-semibold text-muted/90">{project.subtitle}</p>
          <p className="mt-3 text-sm leading-6 text-muted/90">{project.description}</p>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                {/* Visual Pipeline Flowchart */}
                {renderFlowchart()}

                {/* Architecture Checklist */}
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">System Architecture</h4>
                  <ul className="space-y-1.5 text-xs text-muted/95 leading-relaxed">
                    {project.architecture.map((arch) => (
                      <li key={arch} className="flex items-start gap-2">
                        <span className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', theme.dot)} />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engineering & Resume Signals */}
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2 font-mono">Key Capabilities</h4>
                  <ul className="space-y-1.5 text-xs text-muted/95 leading-relaxed">
                    {project.resumeSignals.map((sig) => (
                      <li key={sig} className="flex items-start gap-2">
                        <span className="text-emerald mt-0.5 shrink-0">✓</span>
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Privacy Sandbox */}
                <div className="mt-4 flex items-start gap-3 rounded-md border border-amber/15 bg-amber/[0.04] p-3.5 text-xs text-amber leading-relaxed">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 opacity-80" />
                  <div>
                    <span className="font-bold">Privacy Sandbox: </span>
                    {project.privacyNote}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tag}
              tone={TONE_ORDER[tagIndex % 3]}
              className="text-[10px] py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <button
          type="button"
          className="mt-4 inline-flex w-fit items-center gap-1.5 pt-3 text-xs font-bold tracking-wide uppercase text-cyan hover:text-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald transition"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? 'Collapse Blueprint' : 'Expand Blueprint'}
          <ChevronDown
            className={cn('transition duration-300 transform', isExpanded && 'rotate-180')}
            size={14}
            aria-hidden="true"
          />
        </button>
      </GlassPanel>
    </motion.article>
  )
}
