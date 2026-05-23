import {
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  ClipboardCheck,
  Code2,
  DatabaseZap,
  GitBranch,
  Handshake,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Metric {
  label: string
  value?: number
  prefix?: string
  suffix?: string
  staticValue?: string
  icon: LucideIcon
}

export interface ImpactItem {
  title: string
  description: string
  icon: LucideIcon
  metric?: {
    value?: number
    prefix?: string
    suffix?: string
    staticValue?: string
  }
}

export const heroMetrics: Metric[] = [
  { label: 'Years Experience', value: 10, icon: Boxes },
  { label: 'Attribute Workflows', value: 200, suffix: '+', icon: DatabaseZap },
  { label: 'Engineering Teams Collaborated', value: 6, suffix: '+', icon: GitBranch },
  { label: 'Greenfield Micro-frontends', value: 3, icon: Layers3 },
  { label: 'FCP Improvement', value: 2, prefix: '~', suffix: 's', icon: ChartNoAxesCombined },
  { label: 'AI-Assisted Engineering', staticValue: 'AI', icon: BrainCircuit },
]

export const impactItems: ImpactItem[] = [
  {
    title: '0 → Production Delivery',
    description:
      'Delivered greenfield systems and business capabilities from initial implementation to production release, including micro-frontends, backend-integrated workflows, validation, testing, and rollout readiness.',
    icon: Rocket,
    metric: { staticValue: '0 → Prod Delivery' },
  },
  {
    title: 'Enterprise Feature Ownership',
    description:
      'Owned complex enterprise features across frontend implementation, backend/API integration, validation, data mapping, error handling, testing, and release readiness.',
    icon: ClipboardCheck,
  },
  {
    title: 'Micro-Frontend Architecture',
    description:
      'Built modular frontend systems using Module Federation / Native Federation, shared libraries, reusable patterns, and independently deployable business capabilities.',
    icon: Layers3,
    metric: { value: 3, suffix: ' greenfield micro-frontends' },
  },
  {
    title: 'Data-Intensive UI Engineering',
    description:
      'Built operational and analytical workflows with large datasets, advanced filtering, drill-down behavior, custom rendering, visualizations, and URL-driven reproducible state.',
    icon: DatabaseZap,
    metric: { value: 200, suffix: '+ attribute workflows' },
  },
  {
    title: 'Performance Modernization',
    description:
      'Modernized legacy applications by improving architecture, state management, lazy loading, rendering performance, and maintainability.',
    icon: ChartNoAxesCombined,
    metric: { value: 2, prefix: '~', suffix: 's FCP improvement' },
  },
  {
    title: 'API & Backend Integration',
    description:
      'Integrated RESTful APIs, OpenAPI/Swagger contracts, typed clients, service-layer interactions, request/response validation, and database-backed workflows.',
    icon: Code2,
  },
  {
    title: 'Cross-Platform Delivery',
    description:
      'Delivered web, Android, and iOS functionality using Ionic, Cordova, Capacitor, iOS, Android, Xcode, Android Studio, TestFlight, and App Store delivery processes.',
    icon: Smartphone,
  },
  {
    title: 'Engineering Quality',
    description:
      'Improved production readiness through code reviews, testing, debugging, API contract validation, defect resolution, security practices, CI/CD collaboration, and maintainable delivery across the SDLC.',
    icon: ShieldCheck,
  },
  {
    title: 'Technical Collaboration',
    description:
      'Partnered across product, UX, backend, QA, architecture, and multiple engineering teams to align requirements, contracts, implementation standards, and release scope.',
    icon: Handshake,
    metric: { value: 6, suffix: ' engineering teams' },
  },
  {
    title: 'AI-Assisted Engineering',
    description:
      'Applied GitHub Copilot, OpenAI Codex, Cloud Code, Gemini-based workflows, and agent-assisted development to improve productivity while preserving human review, engineering judgment, and production quality.',
    icon: BrainCircuit,
  },
]
