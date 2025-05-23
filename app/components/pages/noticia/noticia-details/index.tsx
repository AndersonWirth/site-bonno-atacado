'use client'

import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { fadeUpAnimation } from '@/app/lib/animations'
import { Noticia } from '@/app/types/projects'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'

type ProjectDetailsProps = {
  noticia: Noticia
}

export const ProjectDetails = ({ noticia }: ProjectDetailsProps) => {
  const embedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!noticia.socialMidia || !embedRef.current) return

    const socialHtml = noticia.socialMidia.toLowerCase()

    // Instagram
    if (socialHtml.includes('instagram.com')) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }

    // Facebook
    if (socialHtml.includes('facebook.com')) {
      const script = document.createElement('script')
      script.src =
        'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v17.0'
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }

    // Aqui você pode adicionar suporte a outros serviços no futuro
  }, [noticia.socialMidia])

  return (
    <section
      role="region"
      aria-labelledby="noticia-title"
      className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-4 sm:px-6 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(/images/hero-bg.png), url(${noticia.pageThumbnail.url})`,
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'center, center',
          backgroundSize: 'cover, cover',
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        title={noticia.title}
        className="text-center items-center sm:[&>h3]:text-4xl pt-11"
      />

      <motion.div
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText
          content={noticia.description.raw}
          renderers={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold">{children}</h2>
            ),
            p: ({ children }) => <p className="mb-4">{children}</p>,
            bold: ({ children }) => <strong>{children}</strong>,
          }}
        />
      </motion.div>

      {noticia.socialMidia && (
        <div
          ref={embedRef}
          className="my-6 w-full max-w-2xl mx-auto flex justify-center"
          dangerouslySetInnerHTML={{ __html: noticia.socialMidia }}
        />
      )}

      <Link
        href="/noticias"
        aria-label="Voltar para página de notícias"
        className="flex items-center gap-2 mt-8 text-gray-400 hover:text-gray-200 transition"
      >
        <HiArrowNarrowLeft size={20} />
        Voltar às notícias
      </Link>
    </section>
  )
}
