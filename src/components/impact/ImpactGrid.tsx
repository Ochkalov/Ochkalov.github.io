import { motion } from 'motion/react'
import { impactItems } from '../../data/impact'
import { ImpactCard } from './ImpactCard'

export function ImpactGrid() {
  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
    >
      {impactItems.map((item) => (
        <ImpactCard key={item.title} item={item} />
      ))}
    </motion.div>
  )
}
