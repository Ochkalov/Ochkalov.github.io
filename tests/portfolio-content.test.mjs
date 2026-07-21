import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('professional profile presents the current Angular-focused positioning', async () => {
  const profile = await readSource('src/data/profile.ts')

  assert.match(profile, /Angular & Enterprise Frontend/)
  assert.match(profile, /eyebrow: 'Senior Software Engineer · Angular & Enterprise Frontend'/)
  assert.match(profile, /RxJS, NgRx/)
  assert.match(profile, /data-intensive workflows/)
})

test('experience and project copy retain the verified enterprise delivery signals', async () => {
  const [experience, projects] = await Promise.all([
    readSource('src/data/experience.ts'),
    readSource('src/data/projects.ts'),
  ])

  assert.match(experience, /Angular, TypeScript, RxJS, NgRx/)
  assert.match(experience, /200\+ attributes/)
  assert.match(projects, /Angular Signals/)
  assert.match(projects, /Nx-based monorepo/)
  assert.match(projects, /Getty Images/)
})

test('experience begins with current independent AI-first product development', async () => {
  const [experience, item] = await Promise.all([
    readSource('src/data/experience.ts'),
    readSource('src/components/experience/ExperienceItem.tsx'),
  ])

  assert.ok(experience.indexOf("company: 'Independent'") < experience.indexOf("company: 'BNY Mellon'"))
  assert.match(experience, /Senior Software Engineer \| AI-First Product Development/)
  assert.match(experience, /Apr 2026 – Present/)
  assert.match(experience, /OpsProof/)
  assert.match(experience, /content automation pipelines/)
  assert.match(experience, /tool-driven agent workflows/)
  assert.match(experience, /deterministic simulation/)
  assert.match(item, /item\.highlights\?\.length/)
  assert.match(item, /item\.highlights\.map/)
})

test('AI tooling uses one expanded public toolchain across the site', async () => {
  const [tools, skills, impact] = await Promise.all([
    readSource('src/data/aiTools.ts'),
    readSource('src/data/skills.ts'),
    readSource('src/data/impact.ts'),
  ])
  const publicContent = `${tools}\n${skills}\n${impact}`
  const aiSkillGroup = skills.slice(skills.indexOf("title: 'AI / Productivity'"))

  assert.ok(tools.indexOf('OpenAI Codex') < tools.indexOf('GitHub Copilot'))
  assert.ok(aiSkillGroup.indexOf("'OpenAI Codex'") < aiSkillGroup.indexOf("'GitHub Copilot'"))

  for (const tool of [
    'OpenAI Codex',
    'Claude Code',
    'Cloud Code',
    'Google Gemini',
    'Google Antigravity',
    'Windsurf',
    'OpenCode',
    'OpenClaw',
    'Hermes Agent',
    'MCP & local LLM workflows',
  ]) {
    assert.match(publicContent, new RegExp(tool.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }

  assert.doesNotMatch(publicContent, /Gemini-based workflows/)
  assert.doesNotMatch(impact, /attribute workflows/)
  assert.match(impact, /suffix: '\+ attributes'/)
})

test('technical stack preserves Angular-first priority and current breadth', async () => {
  const skills = await readSource('src/data/skills.ts')

  assert.match(skills, /'Angular',\s*'TypeScript',\s*'JavaScript',\s*'RxJS',\s*'NgRx',\s*'React'/)

  for (const skill of [
    'Python',
    'FastAPI',
    'WebSockets',
    'SSE',
    'PostgreSQL',
    'Prisma',
    'Nx',
    'Monorepos',
    'Cloudflare',
    'Playwright',
    'Vitest',
    'Karma',
  ]) {
    assert.match(skills, new RegExp(`'${skill}'`))
  }
})

test('expanded independent-delivery technologies have specific portfolio context', async () => {
  const skills = await readSource('src/data/skills.ts')

  for (const skill of ['Nx', 'Python', 'FastAPI', 'PostgreSQL', 'Prisma', 'Playwright']) {
    assert.match(skills, new RegExp(`${skill}: \\{`))
  }
})

test('portfolio hierarchy makes evidence scannable before expanded labs', async () => {
  const [app, labs, header] = await Promise.all([
    readSource('src/app/App.tsx'),
    readSource('src/components/labs/LabProjectCard.tsx'),
    readSource('src/components/layout/Header.tsx'),
  ])

  assert.ok(app.indexOf('<ExperienceTimeline />') < app.indexOf('<AIFluency />'))
  assert.ok(app.indexOf('<FeaturedProjects />') < app.indexOf('<AILabs />'))
  assert.match(labs, /useState\(false\)/)
  assert.doesNotMatch(header, /\bMenu\b/)
})

test('independent product case studies lead with professional positioning and focused media', async () => {
  const [data, showcase, gallery, labs] = await Promise.all([
    readSource('src/data/independentProjects.ts'),
    readSource('src/components/labs/ProductShowcase.tsx'),
    readSource('src/components/labs/ScreenshotGallery.tsx'),
    readSource('src/components/labs/AILabs.tsx'),
  ])

  assert.match(data, /title: 'OpsProof'/)
  assert.match(data, /title: 'RELAY\/\/ZERO'/)
  assert.match(data, /Independent Product · Operations Decision Intelligence/)
  assert.match(data, /OpenAI Build Week · 2D Browser Game/)
  assert.match(data, /https:\/\/opsproof\.yooint\.chatgpt\.site/)
  assert.match(data, /https:\/\/relay-zero\.yooint\.chatgpt\.site/)
  assert.match(data, /100 fixed seeds/)
  assert.match(data, /468 unit tests/)
  assert.match(showcase, /<video/)
  assert.match(showcase, /aria-label={`Watch \${project\.title} demo`}/)
  assert.match(showcase, /<ScreenshotGallery/)
  assert.match(showcase, /Selected independent products/)
  assert.match(showcase, /Open live product/)
  assert.match(showcase, /Play live game/)
  assert.doesNotMatch(showcase, /jury demo/i)
  assert.doesNotMatch(showcase, /project\.demoUrl/)
  assert.doesNotMatch(showcase, /Built end to end for OpenAI Build Week/)
  assert.doesNotMatch(data, /LPtDtNgJIrg/)
  assert.doesNotMatch(data, /tntiVSlu58Q/)
  assert.doesNotMatch(showcase, /youtube-nocookie/)
  assert.match(data, /relay-zero-ricochet\.png/)
  assert.match(data, /relay-zero-signal-core\.png/)
  assert.match(data, /relay-zero-hound-chase\.png/)
  assert.match(data, /relay-zero-extraction\.png/)
  assert.match(gallery, /useState\(0\)/)
  assert.match(gallery, /AnimatePresence/)
  assert.match(gallery, /Previous screenshot/)
  assert.match(gallery, /Next screenshot/)
  assert.match(gallery, /aria-live="polite"/)
  assert.match(gallery, /data-gallery-controls="top"/)
  assert.doesNotMatch(gallery, /absolute inset-x-0 bottom-0/)
  assert.doesNotMatch(gallery, /setInterval|autoplay/i)
  assert.ok(labs.indexOf('<ProductShowcase />') < labs.indexOf('labProjects.map'))
})
