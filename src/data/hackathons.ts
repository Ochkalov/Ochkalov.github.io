export interface HackathonProject {
  id: 'opsproof' | 'relay-zero'
  title: string
  category: string
  description: string
  proof: string[]
  signals: string[]
  tags: string[]
  liveUrl: string
  demoUrl: string
  media:
    | { kind: 'local'; src: string; poster: string; duration: string }
    | { kind: 'youtube'; videoId: string; poster: string; duration: string }
}

export const hackathonProjects: HackathonProject[] = [
  {
    id: 'opsproof',
    title: 'OpsProof',
    category: 'OpenAI Build Week · Work & Productivity',
    description:
      'A browser-first decision system that turns compatible operational event logs into a transparent simulation, stress-tests disruptions, and finds the lowest-cost tested recovery that restores an SLA—or refuses to invent a plan when the evidence is insufficient.',
    proof: [
      'Built FlowTwin, a deterministic discrete-event simulation engine with FIFO queues, capacity constraints, outages, Monte Carlo experiments, and bounded optimization.',
      'Designed a local event-log workflow with reviewed Operation Packs, visible provenance, strict validation, and auditable Decision Proof exports.',
      'Compared normal, stress, and recovery scenarios across the same 100 fixed seeds for reproducible evidence.',
    ],
    signals: ['Deterministic engine', '100 fixed seeds', 'Local-first data'],
    tags: ['Next.js', 'TypeScript', 'Web Workers', 'Zod', 'Vitest', 'Playwright'],
    liveUrl: 'https://opsproof.yooint.chatgpt.site/',
    demoUrl: 'https://youtu.be/LPtDtNgJIrg',
    media: {
      kind: 'local',
      src: 'media/opsproof-public-explainer.mp4',
      poster: 'media/opsproof-hero-poster.jpg',
      duration: '76 sec product explainer',
    },
  },
  {
    id: 'relay-zero',
    title: 'RELAY//ZERO',
    category: 'OpenAI Build Week · Browser Game',
    description:
      'A handcrafted 2D cinematic stealth-action platformer built around one returning ricochet tool. The same Vector Blade controls light, sound, cameras, doors, enemy routes, sabotage, and the final lockdown escape.',
    proof: [
      'Implemented a shared typed raycast and vector-reflection solver so trajectory previews and real throws stay in exact agreement.',
      'Separated deterministic gameplay from Phaser presentation with explicit visibility, bounded sound evidence, and typed enemy state machines.',
      'Shipped one complete browser mission backed by 468 unit tests, 62 Chromium scenarios, cross-browser smoke, lifecycle, and performance checks.',
    ],
    signals: ['One complete mission', '468 unit tests', 'Deterministic systems'],
    tags: ['Phaser 4', 'TypeScript', 'Vite', 'Vitest', 'Playwright', 'Web Audio'],
    liveUrl: 'https://relay-zero.yooint.chatgpt.site/',
    demoUrl: 'https://youtu.be/tntiVSlu58Q',
    media: {
      kind: 'youtube',
      videoId: 'tntiVSlu58Q',
      poster: 'media/relay-zero-demo-poster.png',
      duration: 'Build Week demo',
    },
  },
]
