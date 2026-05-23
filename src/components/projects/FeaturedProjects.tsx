import { motion } from 'motion/react'
import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects() {
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
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <ProjectCard project={project} index={index} />
        </motion.div>
      ))}
    </motion.div>
  )
}
