import { AIFluency } from '../components/ai/AIFluency'
import { ContactPanel } from '../components/contact/ContactPanel'
import { ExperienceTimeline } from '../components/experience/ExperienceTimeline'
import { Hero } from '../components/hero/Hero'
import { ImpactGrid } from '../components/impact/ImpactGrid'
import { Section } from '../components/layout/Section'
import { CapabilityHighlights } from '../components/overview/CapabilityHighlights'
import { ProfessionalBrief } from '../components/overview/ProfessionalBrief'
import { FeaturedProjects } from '../components/projects/FeaturedProjects'
import { TechStack } from '../components/skills/TechStack'
import { AppLayout } from './AppLayout'

export default function App() {
  return (
    <AppLayout>
      <Hero />
      <Section id="overview" title="Engineering Brief">
        <ProfessionalBrief />
        <CapabilityHighlights />
      </Section>
      <Section
        id="impact"
        title="How I Create Impact"
        intro="General career impact themes across enterprise delivery, frontend architecture, API integration, product collaboration, and AI-assisted engineering."
      >
        <ImpactGrid />
      </Section>
      <Section
        id="ai-fluency"
        title="AI Fluency & Engineering Acceleration"
        intro="AI-assisted engineering workflows are used to move faster without moving loosely."
      >
        <AIFluency />
      </Section>
      <Section id="skills" title="Technical Stack">
        <TechStack />
      </Section>
      <Section id="experience" title="Experience">
        <ExperienceTimeline />
      </Section>
      <Section id="projects" title="Featured Projects">
        <FeaturedProjects />
      </Section>
      <Section id="contact" title="Contact">
        <ContactPanel />
      </Section>
    </AppLayout>
  )
}
