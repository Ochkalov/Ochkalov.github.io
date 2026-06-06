import { useEffect, useState } from 'react'
import { Code2, Download, ExternalLink } from 'lucide-react'
import { profile } from '../../data/profile'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { GlassPanel } from '../ui/GlassPanel'

export function ContactPanel() {
  const [hasResume, setHasResume] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

    fetch(resumeUrl, { method: 'HEAD', signal: controller.signal })
      .then((response) => {
        const contentType = response.headers.get('content-type') ?? ''
        setHasResume(response.ok && contentType.includes('application/pdf'))
      })
      .catch(() => setHasResume(false))

    return () => controller.abort()
  }, [])

  return (
    <GlassPanel accent="emerald" className="p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <Badge tone="emerald">{profile.location}</Badge>
          <h2 className="mt-5 text-3xl font-black text-ink sm:text-4xl">{profile.contact.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{profile.contact.copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button
            href={profile.linkedInUrl}
            external
            variant="primary"
            icon={<ExternalLink size={16} aria-hidden="true" />}
            ariaLabel="Connect with Yurii Ochkalov on LinkedIn"
          >
            Connect on LinkedIn
          </Button>
          <Button
            href={profile.github.url}
            external
            variant="secondary"
            icon={<Code2 size={16} aria-hidden="true" />}
            ariaLabel="View Yurii Ochkalov GitHub profile placeholder"
          >
            View GitHub
          </Button>
          {hasResume ? (
            <Button
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              variant="ghost"
              icon={<Download size={16} aria-hidden="true" />}
              ariaLabel="Download Yurii Ochkalov resume"
            >
              Download Resume
            </Button>
          ) : null}
        </div>
      </div>
    </GlassPanel>
  )
}
