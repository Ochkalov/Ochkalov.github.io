export interface SkillGroup {
  title: string
  skills: string[]
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
])

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
    skills: ['Ionic', 'Cordova', 'Capacitor', 'iOS', 'Android', 'Xcode', 'Android Studio', 'TestFlight'],
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
