import { Code2, MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import { cn } from '../ui/cn'
import { navItems } from './navItems'

interface SidebarNavProps {
  activeSection: string
}

export function SidebarNav({ activeSection }: SidebarNavProps) {
  return (
    <aside className="fixed inset-y-3 left-3 z-30 hidden w-[92px] rounded-lg border border-line bg-charcoal/78 shadow-panel backdrop-blur-xl lg:flex lg:flex-col">
      <a
        href="#home"
        aria-label="Portfolio home"
        className="mx-auto mt-6 flex size-12 items-center justify-center rounded-lg border border-amber/35 bg-amber/8 text-lg font-black text-amber shadow-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
      >
        {profile.initials}
      </a>

      <nav aria-label="Primary navigation" className="mt-10 flex flex-1 flex-col gap-2 px-3">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id

          return (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                'group relative flex h-11 items-center justify-center rounded-md border border-transparent text-muted transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald',
                isActive
                  ? 'border-emerald/25 bg-emerald/10 text-emerald'
                  : 'hover:border-white/12 hover:bg-white/[0.045] hover:text-ink',
              )}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
              <span className="pointer-events-none absolute left-[68px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-line bg-charcoal px-2 py-1 text-xs text-ink shadow-panel group-hover:block">
                {label}
              </span>
            </a>
          )
        })}
      </nav>

      <div className="border-t border-line px-3 py-5">
        <div className="flex flex-col items-center gap-3">
          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Connect on LinkedIn"
            className="flex size-9 items-center justify-center rounded-md border border-cyan/25 bg-cyan/8 text-cyan transition hover:border-cyan/55 hover:bg-cyan/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
          >
            <span aria-hidden="true" className="font-mono text-sm font-black">
              in
            </span>
          </a>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="View GitHub profile"
            className="flex size-9 items-center justify-center rounded-md border border-white/12 bg-white/[0.045] text-ink transition hover:border-amber/45 hover:text-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
          >
            <Code2 size={18} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-5 flex flex-col items-center gap-1 text-center text-[11px] leading-4 text-muted">
          <MapPin size={14} aria-hidden="true" />
          {profile.location}
        </p>
      </div>
    </aside>
  )
}
