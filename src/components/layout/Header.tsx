import { Code2 } from 'lucide-react'
import { profile } from '../../data/profile'
import { cn } from '../ui/cn'
import { navItems } from './navItems'

interface HeaderProps {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-obsidian/86 backdrop-blur-xl lg:hidden">
      <div className="flex h-16 items-center gap-3 px-4">
        <a
          href="#home"
          aria-label="Portfolio home"
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-amber/35 bg-amber/8 text-sm font-black text-amber"
        >
          {profile.initials}
        </a>
        <nav
          aria-label="Primary navigation"
          className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-3"
        >
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                'whitespace-nowrap rounded-md border px-3 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald',
                activeSection === id
                  ? 'border-emerald/40 bg-emerald/10 text-emerald'
                  : 'border-transparent text-muted hover:border-white/12 hover:bg-white/[0.045] hover:text-ink',
              )}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Connect on LinkedIn"
            className="hidden size-9 items-center justify-center rounded-md border border-cyan/25 bg-cyan/8 text-cyan min-[420px]:flex"
          >
            <span aria-hidden="true" className="font-mono text-xs font-black">
              in
            </span>
          </a>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="View GitHub profile"
            className="hidden size-9 items-center justify-center rounded-md border border-white/12 bg-white/[0.045] text-ink min-[520px]:flex"
          >
            <Code2 size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
