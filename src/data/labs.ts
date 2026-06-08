import {
  Brain,
  Cpu,
  LineChart,
  FolderGit2,
  Activity,
  Network,
  FileSearch,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface LabProject {
  id: string
  title: string
  subtitle: string
  status: string
  description: string
  architecture: string[]
  resumeSignals: string[]
  tags: string[]
  icon: LucideIcon
  privacyNote: string
}

export const labProjects: LabProject[] = [
  {
    id: 'interview-os',
    title: 'AI Interview Preparation Platform',
    subtitle: 'Multimodal Study Factory & Hybrid Portal',
    status: 'Active Development',
    description:
      'Designed a pack-based learning platform that converts complex technical domains and source documentation into isolated study packs, multimodal artifacts (flashcards, mock interviews), and transcripts using source-scoped generation.',
    architecture: [
      'Filesystem as the single source of truth for all materials and metadata',
      'NotebookLM generation pipeline with source isolation constraints to prevent context pollution',
      'Dual-mode runtime: desktop study portal (Angular/Express) and cloud deployment (Cloudflare Pages/D1 database)',
    ],
    resumeSignals: [
      'Designed a study platform with structured prompt pipelines and custom audio transcript timeline tools.',
      'Solved LLM context contamination by implementing strict source-scoped artifact validation.',
      'Created secure offline-first storage patterns synchronized to a private edge database (Cloudflare D1).',
    ],
    tags: ['Angular', 'Express.js', 'RxJS', 'Cloudflare Pages', 'D1 SQLite', 'NotebookLM', 'Node.js'],
    icon: Brain,
    privacyNote: 'Abstracted proprietary learning domains, custom API endpoints, and cloud keys.',
  },
  {
    id: 'research-runtime',
    title: 'Autonomous Research Runtime',
    subtitle: 'Agentic Execution & Shadow Validation Engine',
    status: 'Production Prototype',
    description:
      'A multi-service research runtime featuring a daemon-managed experimentation loop, typed job contracts, and a central operator control panel.',
    architecture: [
      'Multi-service container orchestration (API service, worker daemon, and gateway)',
      'Deterministic default mode paired with explicit LLM bridge provider routes',
      'State isolation: runtime execution databases are decoupled from build images and code contexts',
    ],
    resumeSignals: [
      'Built a multi-service daemon architecture for automated forecasting and research execution.',
      'Designed structured agent contracts using schema validations to prevent unauthorized repository modification.',
      'Implemented validation gates (shadow validation, null-control runs) to identify false positives.',
    ],
    tags: ['React', 'Node.js', 'Docker Compose', 'SQLite', 'Zustand', 'AJV Schema', 'TS Services'],
    icon: Cpu,
    privacyNote: 'Forecasting strategies, formulas, advisor entities, and database volume structures are abstracted.',
  },
  {
    id: 'governance-daemon',
    title: 'Model Governance & Evaluation Daemon',
    subtitle: 'Leakage-Proof Prospective Model Auditing Daemon',
    status: 'Active Development',
    description:
      'Autonomous daemon built to score and audit prospective forecasting models, preventing look-ahead leakage and keeping model lifecycle metrics fully transparent.',
    architecture: [
      'Prospective-only scheduling to block historical look-ahead bias',
      'Provenance-aware journaling spanning logs, database events, and Markdown audits',
      'Dynamic performance ranking compared to random baselines to retire weak models',
    ],
    resumeSignals: [
      'Created an autonomous model auditor with frozen pre-event outputs, delayed validation, and score audits.',
      'Designed self-documenting research logs and Markdown journal generators.',
      'Managed long-running service lifecycles with process monitors and telemetry reporting.',
    ],
    tags: ['Node.js 24', 'better-sqlite3', 'Commander CLI', 'node-cron', 'Pino', 'Vitest', 'Zod'],
    icon: LineChart,
    privacyNote: 'Model IDs, source forecast APIs, and alert routing tokens are stripped.',
  },
  {
    id: 'content-ops',
    title: 'AI Content Operations Platform',
    subtitle: 'Full-Stack Collaborative Production & Strategy Workspace',
    status: 'Active Development',
    description:
      'A comprehensive content strategy, brief preparation, and automated generation workplace with built-in editorial approval gates and role-based permissions.',
    architecture: [
      'NestJS API backend with Prisma ORM and PostgreSQL persistence',
      'Queue-based media rendering and generation utilizing Redis and BullMQ',
      'Built-in review loops and policy compliance checks before publication',
    ],
    resumeSignals: [
      'Designed a collaborative queue-based AI content editor with BullMQ and Next.js.',
      'Enforced publishing constraints through robust multi-step permission checks.',
      'Integrated object storage for secure asset caching.',
    ],
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Redis', 'BullMQ', 'MinIO'],
    icon: FolderGit2,
    privacyNote: 'Client workspace profiles, brand strategies, and published credentials are abstracted.',
  },
  {
    id: 'health-intel',
    title: 'Health Intelligence Platform',
    subtitle: 'Wearable ETL & Analytics Pipeline',
    status: 'Active Development',
    description:
      'A data pipeline that aggregates wearable device exports, processes them through an idempotent ETL pipeline, and generates analytical reports.',
    architecture: [
      'Idempotent ingestion parser designed to handle raw XML/JSON device data',
      'Embedded DuckDB database for lightning-fast analytical processing',
      'Next.js dashboard combined with automatic PDF/Markdown report engines',
    ],
    resumeSignals: [
      'Built health analytics pipeline with DuckDB and FastAPI.',
      'Created idempotent data ingestion rules to parse raw XML wearable logs.',
      'Designed automated markdown reporting models to highlight telemetry trends.',
    ],
    tags: ['Next.js', 'FastAPI', 'Python', 'DuckDB', 'Tailwind CSS', 'Pandas', 'Matplotlib'],
    icon: Activity,
    privacyNote: 'Personal telemetry databases and clinical metrics are abstracted.',
  },
  {
    id: 'career-ops',
    title: 'AI Career Operations Platform',
    subtitle: 'Job Search Pipeline & Document Engine',
    status: 'Active Development',
    description:
      'An agentic workflow system for job-search operations, including sourcing, structured fit scoring, and tailored document packaging.',
    architecture: [
      'Playwright-based browser automation for scanning ATS portals and JDs',
      'A-F weighted grading matrices that evaluate postings against the candidate\'s profile',
      'HTML/CSS-to-PDF compiler for rendering clean, tailored CVs using headless Chromium',
    ],
    resumeSignals: [
      'Designed Playwright automation for scanning career portals and extracting JDs.',
      'Created human-in-the-loop review checks to verify CV generation quality.',
      'Built status normalization, data boundaries, and deduplication layers in the tracker.',
    ],
    tags: ['Node.js ESM', 'Playwright', 'Headless Chromium', 'Markdown', 'Go TUI', 'YAML'],
    icon: Network,
    privacyNote: 'Target opportunities, specific applications, and compensation logs are omitted.',
  },
  {
    id: 'second-brain',
    title: 'Agent-Maintained Second Brain',
    subtitle: 'Durable Personal Knowledge Graph & Operating System',
    status: 'Active Development',
    description:
      'An Obsidian-based knowledge system using structured LLM Wiki templates to maintain linked, source-backed technical documentation.',
    architecture: [
      'Raw/Processed directory separation to keep intake material immutable',
      'Structured frontmatter and wiki-links for automated backlink mapping',
      'Agent operations instruction files (agents.md) defining safe edit rules',
    ],
    resumeSignals: [
      'Designed an agent-compatible knowledge system with raw intake and processed wiki boundaries.',
      'Created instruction specifications allowing LLM agents to safely modify markdown notes.',
      'Built templates, domain indexes, and logs for technical interview prep and CRM logs.',
    ],
    tags: ['Obsidian', 'Markdown', 'Shell scripts', 'Git Ingestion', 'Knowledge Graphs', 'LLM Wiki'],
    icon: FileSearch,
    privacyNote: 'Relationship contacts, private notes, and raw developer journals are excluded.',
  },
]
