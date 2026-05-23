import { ArrowDown, BriefcaseBusiness, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'
import { profile } from '../../data/profile'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { AnimatedEngineeringCore } from './AnimatedEngineeringCore'
import { HeroMetrics } from './HeroMetrics'

function renderHeadline() {
  const { headline, highlightedPhrase } = profile.hero
  const [beforeHighlight, afterHighlight] = headline.split(highlightedPhrase)

  return (
    <>
      {beforeHighlight}
      <span className="bg-gradient-to-r from-emerald via-cyan to-amber bg-clip-text text-transparent">
        {highlightedPhrase}
      </span>
      {afterHighlight}
    </>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 py-8 sm:py-10 lg:py-8">
      <Container className="flex flex-col">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald/25 bg-emerald/8 px-3 py-2 text-xs font-bold uppercase text-emerald">
              <span className="size-1.5 rounded-full bg-emerald shadow-glow" />
              {profile.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] text-ink sm:text-5xl xl:text-[3.65rem]">
              {renderHeadline()}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{profile.hero.subheadline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#projects" variant="primary" icon={<ArrowDown size={16} aria-hidden="true" />}>
                View My Work
              </Button>
              <Button href="#experience" variant="secondary" icon={<BriefcaseBusiness size={16} aria-hidden="true" />}>
                View Experience
              </Button>
              <Button
                href={profile.linkedInUrl}
                external
                variant="ghost"
                icon={<ExternalLink size={16} aria-hidden="true" />}
                ariaLabel="Connect with Yurii Ochkalov on LinkedIn"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>

          <AnimatedEngineeringCore />
        </div>
        <HeroMetrics />
      </Container>
    </section>
  )
}
