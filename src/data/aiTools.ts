import {
  Bot,
  Braces,
  BrainCircuit,
  ClipboardList,
  CodeXml,
  FileText,
  GitPullRequestArrow,
  Microscope,
  Network,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface AITool {
  title: string
  description: string
  icon: LucideIcon
}

export const aiTools: AITool[] = [
  {
    title: 'GitHub Copilot',
    description: 'Editor-native assistance for implementation, refactoring, and code navigation.',
    icon: Sparkles,
  },
  {
    title: 'OpenAI Codex',
    description: 'Repository-aware planning, implementation support, debugging, and verification workflows.',
    icon: Bot,
  },
  {
    title: 'Cloud Code',
    description: 'AI-assisted development loops for context gathering and implementation acceleration.',
    icon: Braces,
  },
  {
    title: 'Gemini-based workflows',
    description: 'Alternative model workflows for exploration, synthesis, and technical comparison.',
    icon: BrainCircuit,
  },
  {
    title: 'AI-assisted debugging',
    description: 'Faster fault isolation, hypothesis generation, and reproduction planning.',
    icon: Microscope,
  },
  {
    title: 'Test scaffolding',
    description: 'Initial test outlines, edge-case discovery, and regression coverage prompts.',
    icon: ClipboardList,
  },
  {
    title: 'Refactoring support',
    description: 'Safe decomposition ideas, naming review, and maintainability checks.',
    icon: CodeXml,
  },
  {
    title: 'Documentation acceleration',
    description: 'Readable technical summaries, onboarding notes, and implementation rationale.',
    icon: FileText,
  },
  {
    title: 'Code review preparation',
    description: 'Diff summaries, risk checks, and review-ready explanation drafts.',
    icon: GitPullRequestArrow,
  },
  {
    title: 'Architecture exploration',
    description: 'Tradeoff mapping, interface sketches, and system-design alternatives.',
    icon: Network,
  },
]
