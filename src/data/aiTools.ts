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

export interface AIOutcome {
  title: string
  description: string
  signal: string
  icon: LucideIcon
}

export const aiTools: AITool[] = [
  {
    title: 'GitHub Copilot',
    description:
      'Editor-native acceleration for implementation, local refactoring, API usage discovery, repetitive code paths, and code navigation during production feature work.',
    icon: Sparkles,
  },
  {
    title: 'OpenAI Codex',
    description:
      'Repository-aware planning, implementation support, debugging, verification checklists, refactor decomposition, and review-ready change summaries.',
    icon: Bot,
  },
  {
    title: 'Cloud Code',
    description:
      'AI-assisted development loops for context gathering, implementation acceleration, codebase orientation, and multi-step engineering task breakdowns.',
    icon: Braces,
  },
  {
    title: 'Gemini-based workflows',
    description:
      'Alternative model workflows for exploration, synthesis, architectural comparison, documentation review, and cross-checking technical assumptions.',
    icon: BrainCircuit,
  },
  {
    title: 'AI-assisted debugging',
    description:
      'Faster fault isolation, hypothesis generation, reproduction planning, log interpretation, and targeted validation while keeping final diagnosis human-owned.',
    icon: Microscope,
  },
  {
    title: 'Test scaffolding',
    description:
      'Initial test outlines, edge-case discovery, regression coverage prompts, fixture ideas, and risk-oriented test planning before final engineer review.',
    icon: ClipboardList,
  },
  {
    title: 'Refactoring support',
    description:
      'Safe decomposition ideas, naming review, maintainability checks, migration sequencing, and focused cleanup plans for legacy or complex UI code.',
    icon: CodeXml,
  },
  {
    title: 'Documentation acceleration',
    description:
      'Readable technical summaries, onboarding notes, implementation rationale, API behavior notes, and release-support documentation drafts.',
    icon: FileText,
  },
  {
    title: 'Code review preparation',
    description:
      'Diff summaries, risk checks, behavioral notes, reviewer context, and clearer explanation of implementation decisions before team review.',
    icon: GitPullRequestArrow,
  },
  {
    title: 'Architecture exploration',
    description:
      'Tradeoff mapping, interface sketches, contract alternatives, migration options, and system-design exploration before committing to implementation.',
    icon: Network,
  },
]

export const aiOutcomes: AIOutcome[] = [
  {
    title: 'Faster Discovery',
    description:
      'Accelerates codebase orientation, dependency tracing, API surface discovery, and first-pass understanding of unfamiliar enterprise workflows.',
    signal: 'Context gathering',
    icon: Microscope,
  },
  {
    title: 'Safer Refactoring',
    description:
      'Supports decomposition planning, naming review, risk spotting, and test ideas before refactors are finalized through human review.',
    signal: 'Maintainability',
    icon: CodeXml,
  },
  {
    title: 'Review-Ready Changes',
    description:
      'Helps prepare concise diff summaries, implementation rationale, edge-case notes, and reviewer context for cleaner collaboration.',
    signal: 'Code review prep',
    icon: GitPullRequestArrow,
  },
  {
    title: 'Architecture Exploration',
    description:
      'Speeds comparison of interface options, frontend boundaries, API contracts, and rollout strategies without replacing engineering judgment.',
    signal: 'Tradeoff mapping',
    icon: Network,
  },
  {
    title: 'Test Coverage Acceleration',
    description:
      'Improves early coverage planning by surfacing regression scenarios, data states, fixture ideas, and validation paths.',
    signal: 'Quality support',
    icon: ClipboardList,
  },
]
