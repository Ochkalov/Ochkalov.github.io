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
    title: 'OpenAI Codex',
    description:
      'Repository-aware planning, implementation support, debugging, verification checklists, refactor decomposition, and review-ready change summaries.',
    icon: Bot,
  },
  {
    title: 'GitHub Copilot',
    description:
      'Editor-native acceleration for implementation, local refactoring, API usage discovery, repetitive code paths, and code navigation during production feature work.',
    icon: Sparkles,
  },
  {
    title: 'Claude Code',
    description:
      'Agentic repository work for implementation, debugging, testing, documentation, and review preparation.',
    icon: CodeXml,
  },
  {
    title: 'Cloud Code',
    description:
      'AI-assisted development loops for context gathering, implementation acceleration, codebase orientation, and multi-step task breakdowns.',
    icon: Braces,
  },
  {
    title: 'Google Gemini',
    description:
      'Model-assisted research, technical synthesis, architectural comparison, and cross-checking of implementation assumptions.',
    icon: BrainCircuit,
  },
  {
    title: 'Google Antigravity',
    description:
      'Multi-step agent workflows for repository exploration, implementation planning, and human-reviewed execution.',
    icon: Network,
  },
  {
    title: 'Windsurf',
    description:
      'Editor-native assistance for code navigation, focused implementation, refactoring, and validation-oriented iteration.',
    icon: Microscope,
  },
  {
    title: 'OpenCode & OpenClaw',
    description:
      'Open agent workflows for tool orchestration, task decomposition, code changes, and structured delivery support.',
    icon: ClipboardList,
  },
  {
    title: 'Hermes Agent',
    description:
      'Agent-assisted local workflows for implementation, review preparation, diagnostics, and structured repository operations.',
    icon: FileText,
  },
  {
    title: 'MCP & local LLM workflows',
    description:
      'Tool-connected and local-model workflows for controlled research, automation, model routing, and human-reviewed engineering.',
    icon: GitPullRequestArrow,
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
