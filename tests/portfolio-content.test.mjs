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
