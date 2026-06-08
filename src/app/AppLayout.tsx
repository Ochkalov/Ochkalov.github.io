import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { Header } from '../components/layout/Header'
import { SidebarNav } from '../components/layout/SidebarNav'
import { navItems } from '../components/layout/navItems'
import { BackgroundGrid } from '../components/ui/BackgroundGrid'
import { FloatingParticles } from '../components/ui/FloatingParticles'
import { ScrollProgress } from '../components/ui/ScrollProgress'
import { ScrollToTopButton } from '../components/ui/ScrollToTopButton'
import { useActiveSection } from '../hooks/useActiveSection'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen text-ink">
      <BackgroundGrid />
      <FloatingParticles />
      <ScrollProgress />
      <ScrollToTopButton />
      <SidebarNav activeSection={activeSection} />
      <Header activeSection={activeSection} />

      <main className="lg:pl-[116px]">{children}</main>
      <footer className="border-t border-line py-8 text-center text-xs text-muted lg:ml-[116px]">
        Built with React, TypeScript, Vite, and AI-assisted engineering workflows.
      </footer>
    </div>
  )
}
