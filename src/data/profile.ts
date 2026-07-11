import { formatExperienceYearsPlus } from '../utils/experienceDuration'

export interface Profile {
  initials: string
  role: string
  location: string
  linkedInUrl: string
  github: {
    label: string
    url: string
    isPlaceholder: boolean
  }
  hero: {
    eyebrow: string
    headline: string
    highlightedPhrase: string
    experiencePhrase: string
    subheadline: string
  }
  brief: string[]
  capabilities: string[]
  contact: {
    title: string
    copy: string
  }
  education: {
    institutionLabel: string
    credential: string
    focus: string
  }
}

const experienceYearsPlus = formatExperienceYearsPlus()

export const profile: Profile = {
  initials: 'YO',
  role: 'Senior Software Engineer | Angular & Enterprise Frontend',
  location: 'New York, USA',
  linkedInUrl: 'https://www.linkedin.com/in/ochkalov',
  github: {
    label: 'GitHub',
    url: 'https://github.com/Ochkalov',
    isPlaceholder: false,
  },
  hero: {
    eyebrow: 'Senior Software Engineer · Angular & Enterprise Frontend',
    headline: 'I build enterprise frontend systems for complex, data-intensive workflows.',
    highlightedPhrase: 'enterprise frontend systems',
    experiencePhrase: experienceYearsPlus,
    subheadline: `${experienceYearsPlus} delivering Angular, TypeScript, and frontend-heavy full-stack applications across banking, finance, healthcare, retail, warehouse management, and media.`,
  },
  brief: [
    `Senior Software Engineer with ${experienceYearsPlus} of experience designing, building, and modernizing enterprise web, backend-connected, and mobile applications across banking, finance, healthcare, retail, warehouse management, e-commerce, and media.`,
    'Primary depth in Angular, TypeScript, RxJS, NgRx, enterprise frontend architecture, and data-intensive UI, complemented by React and frontend-heavy full-stack delivery with Node.js, .NET/C#, Java/Spring Boot, REST/OpenAPI, SQL, cloud platforms, and CI/CD.',
    'Experienced in 0→production delivery, legacy modernization, modular frontend foundations, API integration, performance, testing, and cross-team engineering. Uses AI-assisted workflows for discovery, implementation, debugging, refactoring, testing, and documentation while retaining human review and production-quality standards.',
  ],
  capabilities: [
    'Enterprise Frontend Architecture',
    'Data-Intensive UI & API Delivery',
    'Frontend-Heavy Full-Stack Delivery',
    'AI-Assisted Engineering',
  ],
  contact: {
    title: 'Let’s connect',
    copy: 'I’m open to senior software engineering roles focused on Angular, enterprise frontend architecture, data-intensive systems, and frontend-heavy full-stack delivery.',
  },
  education: {
    institutionLabel: 'University',
    credential: 'Master’s Degree',
    focus: 'Engineering / Finance',
  },
}
