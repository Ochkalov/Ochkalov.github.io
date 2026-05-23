import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'
import type { Project } from '../../data/projects'
import { Badge } from '../ui/Badge'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'
import { cn } from '../ui/cn'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.article whileHover={{ y: -4 }} className="h-full">
      <GlassPanel
        accent={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'cyan' : 'emerald'}
        className="group flex h-full flex-col p-5 transition duration-200 hover:border-emerald/34 hover:shadow-glow"
      >
        <IconBadge icon={project.icon} tone={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'cyan' : 'emerald'} />
        <div className="mt-5">
          <h3 className="text-base font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-amber">{project.client}</p>
          <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
          {isExpanded ? <p className="mt-3 text-sm leading-6 text-muted">{project.detail}</p> : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tag} tone={tagIndex % 3 === 0 ? 'emerald' : tagIndex % 3 === 1 ? 'amber' : 'cyan'}>
              {tag}
            </Badge>
          ))}
        </div>
        <button
          type="button"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-cyan transition hover:text-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((current) => !current)}
        >
          View details
          <ChevronDown
            className={cn('transition duration-200', isExpanded && 'rotate-180')}
            size={16}
            aria-hidden="true"
          />
        </button>
      </GlassPanel>
    </motion.article>
  )
}
