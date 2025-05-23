'use client'

import { Link } from '@/app/components/link'
import { fadeUpAnimation } from '@/app/lib/animations'
import { Noticia } from '@/app/types/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type NoticiaCardProps = {
  noticia: Noticia
}

export const NoticiaCard = ({ noticia }: NoticiaCardProps) => {
  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row group rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01] shadow-lg hover:shadow-emerald-500/20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/noticias/${noticia.slug}`} className="relative w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full block">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Image
            src={noticia.thumbnail.url}
            width={420}
            height={304}
            alt={`Thumbnail da notícia ${noticia.title}`}
            className="w-full h-full object-cover rounded-lg group-hover:brightness-75 transition duration-300"
          />

          {/* Sobreposição com texto “Ver Notícia” */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <span className="text-white text-lg font-semibold flex items-center gap-2">
              <HiArrowNarrowRight className="text-emerald-400" />
              Ver Notícia
            </span>
          </div>
        </motion.div>
      </Link>

      <div className="flex-1 lg:py-[18px] px-2 lg:px-0">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/noticia-title-icon.svg"
          />
          {noticia.title}
        </motion.h3>

        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {noticia.shortDescription}
        </motion.p>

        <div className="inline-block">
          <Link href={`/noticias/${noticia.slug}`} className="group/link text-emerald-400 hover:underline text-sm font-medium flex items-center gap-1 transition-colors">
            Ver notícia
            <HiArrowNarrowRight className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
