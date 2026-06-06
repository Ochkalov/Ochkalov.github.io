export interface SkillDetail {
  name: string
  summary: string
  seniorUsage: string
  usedInProjects: string[]
  domains: string[]
  relatedSkills: string[]
  highlight?: boolean
}

export type SkillItem = string | SkillDetail

export interface SkillGroup {
  title: string
  skills: SkillItem[]
}

export const highlightedSkills = new Set([
  'React',
  'Angular',
  'TypeScript',
  'Micro-frontends',
  'AI-assisted engineering',
  'Ag-Grid',
  'OpenAPI/Swagger',
  'CI/CD',
  'Ionic',
  'Java/Spring Boot',
  '.NET Web APIs',
])

export const skillDetails: Record<string, SkillDetail> = {
  Angular: {
    name: 'Angular',
    summary:
      'Primary enterprise frontend framework for complex workflows, data grids, forms, routing, and modular UI.',
    seniorUsage:
      'Used to own production features across payments, finance analytics, servicing, warehouse, kiosk, and media workflows with reusable components, route guards, state patterns, and API-connected screens.',
    usedInProjects: [
      'Enterprise Payments Platform',
      'IPO Analysis Platform',
      'Credit Card Servicing',
      'Warehouse Application',
      'Product Lookup Kiosk',
      'Media Content Platform',
    ],
    domains: ['Finance', 'Banking', 'Retail', 'Warehouse Management', 'Media'],
    relatedSkills: ['TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'Ag-Grid', 'OpenAPI/Swagger'],
    highlight: true,
  },
  React: {
    name: 'React',
    summary:
      'Modern component-driven UI development with TypeScript and maintainable frontend composition.',
    seniorUsage:
      'Used as part of frontend engineering depth for reusable UI patterns, stateful product experiences, and modern TypeScript implementation practices.',
    usedInProjects: ['Enterprise web delivery', 'Portfolio implementation'],
    domains: ['Enterprise UI', 'Frontend Architecture'],
    relatedSkills: [
      'TypeScript',
      'Redux Toolkit',
      'React Router',
      'React Hook Form',
      'Tailwind CSS',
    ],
    highlight: true,
  },
  TypeScript: {
    name: 'TypeScript',
    summary: 'Strong typing for scalable frontend and full-stack implementation.',
    seniorUsage:
      'Applied to reduce integration risk, clarify UI contracts, improve refactoring safety, and support typed API-driven workflows across frontend and backend-connected features.',
    usedInProjects: [
      'Enterprise Payments Platform',
      'IPO Analysis Platform',
      'Credit Card Servicing',
      'Media Content Platform',
    ],
    domains: ['Finance', 'Banking', 'Retail', 'Media'],
    relatedSkills: ['Angular', 'React', 'OpenAPI/Swagger', 'Node.js'],
    highlight: true,
  },
  'Micro-frontends': {
    name: 'Micro-frontends',
    summary: 'Modular frontend architecture for independently deployable enterprise capabilities.',
    seniorUsage:
      'Delivered greenfield micro-frontends from scratch to production, using shared libraries and federation patterns to align teams around reusable business capabilities.',
    usedInProjects: ['Enterprise Payments Platform', 'LSEG Data & Analytics / Refinitiv'],
    domains: ['Banking', 'Finance', 'Enterprise Architecture'],
    relatedSkills: ['Module Federation', 'Native Federation', 'Shared Libraries', 'API Contracts'],
    highlight: true,
  },
  'Module Federation': {
    name: 'Module Federation',
    summary: 'Runtime composition pattern for modular frontend delivery.',
    seniorUsage:
      'Used in enterprise frontend architecture to support independently deployable UI surfaces, shared dependencies, and reusable integration conventions.',
    usedInProjects: ['Enterprise Payments Platform', 'LSEG Data & Analytics / Refinitiv'],
    domains: ['Finance', 'Enterprise Architecture'],
    relatedSkills: ['Micro-frontends', 'Native Federation', 'Shared Libraries'],
  },
  'Native Federation': {
    name: 'Native Federation',
    summary: 'Modern Angular federation approach for modular enterprise applications.',
    seniorUsage:
      'Used to establish scalable frontend composition for greenfield business capabilities and production-ready deployment boundaries.',
    usedInProjects: ['Enterprise Payments Platform'],
    domains: ['Banking', 'Enterprise Architecture'],
    relatedSkills: ['Angular', 'Micro-frontends', 'Shared Libraries'],
  },
  'Ag-Grid': {
    name: 'Ag-Grid',
    summary: 'Enterprise grid workflows for large operational and analytical datasets.',
    seniorUsage:
      'Built data-intensive screens with server-side row models, custom cell renderers, advanced filtering, drill-down workflows, editable states, and URL-driven reproducible analysis.',
    usedInProjects: ['Enterprise Payments Platform', 'Enterprise data workflows'],
    domains: ['Banking', 'Finance', 'Enterprise Operations'],
    relatedSkills: ['Angular', 'TypeScript', 'Highcharts', 'REST APIs'],
    highlight: true,
  },
  Highcharts: {
    name: 'Highcharts',
    summary: 'Financial and operational data visualization for analytical user experiences.',
    seniorUsage:
      'Integrated charts into data-heavy interfaces where users needed drill-down analysis, trend visibility, and business-friendly presentation of backend data.',
    usedInProjects: ['Enterprise Payments Platform', 'IPO Analysis Platform'],
    domains: ['Finance', 'Banking', 'Analytics'],
    relatedSkills: ['Ag-Grid', 'Angular', 'REST APIs', 'SQL'],
  },
  'OpenAPI/Swagger': {
    name: 'OpenAPI/Swagger',
    summary: 'API contract documentation and typed integration workflows.',
    seniorUsage:
      'Used to align frontend and backend teams, validate contracts, improve typed client generation, and reduce integration uncertainty in enterprise delivery.',
    usedInProjects: ['Enterprise Payments Platform', 'API-driven enterprise features'],
    domains: ['Banking', 'Finance', 'Enterprise Integration'],
    relatedSkills: ['REST APIs', 'Java/Spring Boot', '.NET Web APIs', 'TypeScript'],
    highlight: true,
  },
  'Java/Spring Boot': {
    name: 'Java/Spring Boot',
    summary: 'Backend service integration and API-driven enterprise workflows.',
    seniorUsage:
      'Worked with Java/Spring Boot-based services through REST APIs and OpenAPI contracts, contributing to validation, typed clients, and integration reliability.',
    usedInProjects: ['Enterprise Payments Platform', 'Enterprise backend integrations'],
    domains: ['Banking', 'Finance'],
    relatedSkills: ['REST APIs', 'OpenAPI/Swagger', 'API Contracts', 'SQL'],
    highlight: true,
  },
  '.NET Web APIs': {
    name: '.NET Web APIs',
    summary: 'C# backend APIs for full-stack financial workflow delivery.',
    seniorUsage:
      'Contributed to API-connected financial systems, combining frontend modernization with .NET/C# service interactions and SQL-backed workflows.',
    usedInProjects: ['IPO Analysis Platform'],
    domains: ['Finance', 'Analytics'],
    relatedSkills: ['C#', 'REST APIs', 'SQL Server', 'Highcharts'],
    highlight: true,
  },
  'Node.js': {
    name: 'Node.js',
    summary: 'Backend and integration support for full-stack feature delivery.',
    seniorUsage:
      'Used for API-connected workflows, proxy services, backend interactions, and full-stack delivery where frontend features required service-layer support.',
    usedInProjects: ['Credit Card Servicing', 'Warehouse Application', 'Event Ticketing Platform'],
    domains: ['Retail', 'Warehouse Management', 'Events'],
    relatedSkills: ['Express.js', 'REST APIs', 'Docker', 'JavaScript'],
  },
  Ionic: {
    name: 'Ionic',
    summary: 'Cross-platform mobile delivery from a shared codebase.',
    seniorUsage:
      'Delivered Android, iOS, and web-facing mobile functionality with shared implementation patterns, native tooling, API integration, and production release workflows.',
    usedInProjects: ['Credit Card Servicing', 'Warehouse Application', 'Product Lookup Kiosk'],
    domains: ['Finance', 'Retail', 'Warehouse Management'],
    relatedSkills: ['Cordova', 'Capacitor', 'Android', 'iOS', 'Angular'],
    highlight: true,
  },
  Cordova: {
    name: 'Cordova',
    summary: 'Hybrid mobile runtime for Android device-integrated applications.',
    seniorUsage:
      'Used in Android-oriented enterprise mobile applications involving barcode scanning, kiosk experiences, and backend-connected operational workflows.',
    usedInProjects: ['Warehouse Application', 'Product Lookup Kiosk'],
    domains: ['Retail', 'Warehouse Management'],
    relatedSkills: ['Ionic', 'Android', 'Barcode Scanning', 'REST APIs'],
  },
  Capacitor: {
    name: 'Capacitor',
    summary: 'Modern hybrid mobile runtime for iOS healthcare delivery.',
    seniorUsage:
      'Used in mobile release workflows where app delivery required native tooling, TestFlight/App Store processes, and production-quality mobile practices.',
    usedInProjects: ['Health Tracking App'],
    domains: ['Healthcare', 'Mobile'],
    relatedSkills: ['Ionic', 'iOS', 'Xcode', 'TestFlight'],
  },
  Android: {
    name: 'Android',
    summary:
      'Android application delivery for kiosk, warehouse, and cross-platform servicing workflows.',
    seniorUsage:
      'Delivered Android functionality connected to backend APIs, barcode scanning, device workflows, and operational retail/warehouse use cases.',
    usedInProjects: ['Credit Card Servicing', 'Warehouse Application', 'Product Lookup Kiosk'],
    domains: ['Finance', 'Retail', 'Warehouse Management'],
    relatedSkills: ['Ionic', 'Cordova', 'Android Studio', 'REST APIs'],
  },
  iOS: {
    name: 'iOS',
    summary: 'iOS mobile delivery with native release and QA processes.',
    seniorUsage:
      'Delivered iOS functionality through native tooling and release workflows, including TestFlight/App Store-oriented practices for healthcare and servicing apps.',
    usedInProjects: ['Credit Card Servicing', 'Health Tracking App'],
    domains: ['Finance', 'Healthcare'],
    relatedSkills: ['Ionic', 'Capacitor', 'Xcode', 'TestFlight'],
  },
  Docker: {
    name: 'Docker',
    summary: 'Containerized support services and deployment-ready backend workflows.',
    seniorUsage:
      'Used for Node.js proxy/service deployment support in operational applications where frontend workflows depended on backend integration layers.',
    usedInProjects: ['Warehouse Application'],
    domains: ['Warehouse Management', 'Retail'],
    relatedSkills: ['Node.js', 'Express.js', 'CI/CD'],
  },
  'CI/CD': {
    name: 'CI/CD',
    summary: 'Delivery collaboration for production-ready enterprise releases.',
    seniorUsage:
      'Worked with automated delivery practices, code reviews, quality gates, defect resolution, and release readiness across complex enterprise teams.',
    usedInProjects: [
      'Enterprise Payments Platform',
      'Media Content Platform',
      'Enterprise web/mobile delivery',
    ],
    domains: ['Banking', 'Finance', 'Media', 'Retail'],
    relatedSkills: ['Git', 'GitHub', 'Jira', 'Testing'],
    highlight: true,
  },
  'AI-assisted engineering': {
    name: 'AI-assisted engineering',
    summary: 'AI-supported engineering workflows with human review and production judgment.',
    seniorUsage:
      'Applied AI to accelerate discovery, implementation, debugging, refactoring, test scaffolding, documentation, and review preparation while preserving architecture ownership.',
    usedInProjects: [
      'Enterprise Payments Platform',
      'Portfolio implementation',
      'Modern engineering workflows',
    ],
    domains: ['Enterprise Software', 'Frontend Architecture', 'Full-stack Delivery'],
    relatedSkills: ['GitHub Copilot', 'OpenAI Codex', 'Cloud Code', 'Gemini-based workflows'],
    highlight: true,
  },
}

export function getSkillName(skill: SkillItem) {
  return typeof skill === 'string' ? skill : skill.name
}

export function getSkillDetail(skill: SkillItem, groupTitle = 'Engineering') {
  if (typeof skill !== 'string') {
    return skill
  }

  return (
    skillDetails[skill] ?? {
      name: skill,
      summary: `${skill} is part of the ${groupTitle.toLowerCase()} toolkit.`,
      seniorUsage:
        'Used as part of enterprise delivery across frontend, backend, mobile, testing, integration, or production-readiness workflows.',
      usedInProjects: ['Enterprise delivery work'],
      domains: ['Enterprise Software'],
      relatedSkills: [],
    }
  )
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'NgRx',
      'Redux Toolkit',
      'React Router',
      'React Hook Form',
      'Material UI',
      'Tailwind CSS',
      'Angular Material',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'SCSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'OpenAPI/Swagger',
      '.NET Web APIs',
      'C#',
      'Java/Spring Boot',
      'Maven',
      'SQL',
      'SQL Server',
    ],
  },
  {
    title: 'Data & Visualization',
    skills: ['Ag-Grid', 'Highcharts', 'Leaflet.js'],
  },
  {
    title: 'Architecture',
    skills: [
      'Micro-frontends',
      'Module Federation',
      'Native Federation',
      'Shared Libraries',
      'API Contracts',
      'Enterprise UI Architecture',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Git', 'GitHub', 'Jira'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Cypress', 'Jasmine', 'Mocha', 'Sinon.js'],
  },
  {
    title: 'Mobile',
    skills: [
      'Ionic',
      'Cordova',
      'Capacitor',
      'iOS',
      'Android',
      'Xcode',
      'Android Studio',
      'TestFlight',
    ],
  },
  {
    title: 'Security / Auth',
    skills: ['Okta', 'SSO', 'Route Guards', 'Role-Based Access'],
  },
  {
    title: 'AI / Productivity',
    skills: [
      'GitHub Copilot',
      'OpenAI Codex',
      'Cloud Code',
      'Gemini-based workflows',
      'AI-assisted engineering',
      'Agent-assisted development',
    ],
  },
]
