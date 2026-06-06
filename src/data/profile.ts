export interface Profile {
  name: string
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
    dates: string
  }
}

export const profile: Profile = {
  name: 'Yurii Ochkalov',
  initials: 'YO',
  role: 'Senior Software Engineer',
  location: 'New York, USA',
  linkedInUrl: 'https://www.linkedin.com/in/ochkalov',
  github: {
    label: 'GitHub',
    url: 'https://github.com/YOUR_GITHUB_USERNAME',
    isPlaceholder: true,
  },
  hero: {
    eyebrow: 'Senior Software Engineer',
    headline: 'I build scalable software systems that create measurable impact.',
    highlightedPhrase: 'measurable impact',
    subheadline:
      '10 years delivering enterprise web, backend, and mobile applications across finance, banking, retail, healthcare, warehouse management, and media.',
  },
  brief: [
    'Senior Software Engineer with 10 years of experience designing, building, and modernizing enterprise web, backend, and mobile applications across finance, banking, retail, healthcare, warehouse management, and media domains.',
    'Strong frontend engineering depth with practical full-stack delivery experience across Angular, React, TypeScript, JavaScript, Node.js, Express, REST APIs, .NET Web APIs, C#, Java/Spring Boot-based services, SQL Server, cloud platforms, and CI/CD.',
    'Known for translating complex business workflows into scalable, maintainable software solutions, collaborating across product, UX, backend, QA, and multiple engineering teams, and applying AI-assisted engineering workflows to accelerate discovery, implementation, debugging, refactoring, testing, and documentation while maintaining code review and production-quality standards.',
  ],
  capabilities: [
    'Full-Stack Feature Delivery',
    'Enterprise Frontend Architecture',
    'Data-Intensive Applications',
    'Production Quality & Reliability',
  ],
  contact: {
    title: 'Let’s connect',
    copy: 'I’m open to senior frontend, full-stack, enterprise UI architecture, and AI-assisted engineering opportunities.',
  },
  education: {
    institutionLabel: 'University',
    credential: 'Master’s Degree',
    focus: 'Engineering / Finance',
    dates: 'Sep 2002 – Jan 2010',
  },
}
