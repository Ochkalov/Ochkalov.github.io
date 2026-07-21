import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '../ui/cn'

export interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface ScreenshotGalleryProps {
  title: string
  images: GalleryImage[]
}

function mediaUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`
}

export function ScreenshotGallery({ title, images }: ScreenshotGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length)
  }

  return (
    <figure
      aria-label={`${title} screenshots`}
      aria-roledescription="carousel"
      className="overflow-hidden border border-line/20 bg-black shadow-panel"
    >
      <div data-gallery-controls="top" className="border-b border-line/15 bg-charcoal/95">
        <div className="flex min-h-14 items-center justify-between gap-3 px-3 py-2 sm:px-4">
          <figcaption aria-live="polite" className="min-w-0 text-xs font-medium text-white sm:text-sm">
            <span className="mr-2 font-mono text-[10px] text-cyan">
              {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            {activeImage.caption}
          </figcaption>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={showPrevious}
              className="grid size-9 place-items-center border border-white/20 bg-black/65 text-white transition hover:border-emerald/70 hover:text-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald sm:size-10"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={showNext}
              className="grid size-9 place-items-center border border-white/20 bg-black/65 text-white transition hover:border-emerald/70 hover:text-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald sm:size-10"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 px-2 pb-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show screenshot ${index + 1}: ${image.caption}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-1.5 bg-line/20 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald',
                index === activeIndex ? 'bg-emerald' : 'hover:bg-cyan/55',
              )}
            />
          ))}
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={activeImage.src}
            src={mediaUrl(activeImage.src)}
            alt={activeImage.alt}
            className="absolute inset-0 size-full object-cover"
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          />
        </AnimatePresence>
      </div>
    </figure>
  )
}
