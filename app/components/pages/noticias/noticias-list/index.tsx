'use client'

import { Noticia } from '@/app/types/projects'
import { NoticiaCard } from './noticia-card'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUpAnimation } from '@/app/lib/animations'

type ProjectsListProps = {
  noticias: Noticia[]
}

export const ProjectsList = ({ noticias }: ProjectsListProps) => {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {noticias.map((noticia, i) => (
        <motion.div
          key={i}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/noticias/${noticia.slug}`}>
            <NoticiaCard noticia={noticia} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
