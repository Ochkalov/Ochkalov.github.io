import { motion } from 'motion/react'
import { labProjects } from '../../data/labs'
import { LabProjectCard } from './LabProjectCard'
import { HackathonShowcase } from './HackathonShowcase'

export function AILabs() {
  return (
    <>
      <HackathonShowcase />
      <motion.div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-8% 0px' }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {labProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="h-full"
          >
            <LabProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
