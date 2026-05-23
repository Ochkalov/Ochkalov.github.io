import type { AITool } from '../../data/aiTools'
import { GlassPanel } from '../ui/GlassPanel'
import { IconBadge } from '../ui/IconBadge'

interface AIToolCardProps {
  tool: AITool
  index: number
}

export function AIToolCard({ tool, index }: AIToolCardProps) {
  return (
    <GlassPanel accent={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'cyan' : 'emerald'} className="p-4">
      <IconBadge icon={tool.icon} tone={index % 3 === 1 ? 'amber' : index % 3 === 2 ? 'cyan' : 'emerald'} />
      <h3 className="mt-4 text-sm font-semibold text-ink">{tool.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{tool.description}</p>
    </GlassPanel>
  )
}
