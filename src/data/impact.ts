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
import { getExperienceYears } from '../utils/experienceDuration'

export interface Metric {
  label: string
  value?: number
  prefix?: string
  suffix?: string
  staticValue?: string
  description?: string
  icon: LucideIcon
}

export interface ImpactItem {
  title: string
  description: string
  icon: LucideIcon
  proofPoints?: string[]
  metric?: {
    value?: number
    prefix?: string
    suffix?: string
    staticValue?: string
  }
}

const experienceYears = getExperienceYears()

export const heroMetrics: Metric[] = [
  {
    label: 'Years Experience',
    value: experienceYears,
    suffix: '+',
    description: 'Calculated from first frontend role',
    icon: Boxes,
  },
  { label: 'Attribute Workflows', value: 200, suffix: '+', description: 'Large data-heavy enterprise UI workflows', icon: DatabaseZap },
  { label: 'Engineering Teams Collaborated', value: 6, suffix: '+', description: 'Cross-team delivery and API alignment', icon: GitBranch },
  { label: 'Greenfield Micro-frontends', value: 3, description: 'From initial implementation to production', icon: Layers3 },
  { label: 'FCP Improvement', value: 2, prefix: '~', suffix: 's', description: 'Legacy platform modernization result', icon: ChartNoAxesCombined },
  { label: 'AI-Assisted Engineering', staticValue: 'AI', description: 'Accelerated with human review and ownership', icon: BrainCircuit },
]

export const impactItems: ImpactItem[] = [
  {
    title: '0 → Production Delivery',
    description:
      'Delivered greenfield systems and business capabilities from initial implementation to production release, including micro-frontends, backend-integrated workflows, validation, testing, rollout readiness, and production-quality handoff.',
    icon: Rocket,
    proofPoints: ['Greenfield delivery', 'Validation and rollout readiness', 'Production handoff'],
    metric: { staticValue: '0 → Prod Delivery' },
  },
  {
    title: 'Enterprise Feature Ownership',
    description:
      'Owned complex enterprise features across frontend implementation, backend/API integration, validation, data mapping, error handling, testing, release readiness, and cross-team coordination.',
    icon: ClipboardCheck,
  },
  {
    title: 'Micro-Frontend Architecture',
    description:
      'Built modular frontend systems using Module Federation / Native Federation, shared libraries, reusable patterns, integration conventions, and independently deployable business capabilities.',
    icon: Layers3,
    proofPoints: ['Federated architecture', 'Shared libraries', 'Team-aligned patterns'],
    metric: { value: 3, suffix: ' greenfield micro-frontends' },
  },
  {
    title: 'Data-Intensive UI Engineering',
    description:
      'Built operational and analytical workflows with large datasets, server-side models, advanced filtering, drill-down behavior, custom rendering, visualizations, and URL-driven reproducible state.',
    icon: DatabaseZap,
    proofPoints: ['Server-side row model', 'Drill-down analysis', 'URL-driven state'],
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
      'Integrated RESTful APIs, OpenAPI/Swagger contracts, typed clients, Java/Spring Boot and .NET Web API interactions, request/response validation, and database-backed workflows.',
    icon: Code2,
    proofPoints: ['Typed clients', 'Contract validation', 'Backend service integration'],
  },
  {
    title: 'Cross-Platform Delivery',
    description:
      'Delivered web, Android, and iOS functionality from shared Ionic-based codebases using Cordova, Capacitor, native tooling, Xcode, Android Studio, TestFlight, and App Store delivery processes.',
    icon: Smartphone,
    proofPoints: ['Web + Android + iOS', 'Ionic/Cordova/Capacitor', 'Native release tooling'],
  },
  {
    title: 'Engineering Quality',
    description:
      'Improved production readiness through code reviews, testing, debugging, API contract validation, defect resolution, security practices, CI/CD collaboration, and maintainable delivery across the SDLC in enterprise environments.',
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
      'Applied GitHub Copilot, OpenAI Codex, Cloud Code, Gemini-based workflows, and agent-assisted development to accelerate delivery while preserving architecture ownership, human review, engineering judgment, and production quality.',
    icon: BrainCircuit,
  },
  {
    title: 'Device-Integrated Mobile Workflows',
    description:
      'Built mobile and kiosk-style operational workflows involving Android devices, barcode scanning, receipt printer interactions, backend APIs, and retail or warehouse execution paths.',
    icon: Smartphone,
    proofPoints: ['Barcode scanner workflows', 'Receipt printer interactions', 'Kiosk and warehouse operations'],
  },
]
