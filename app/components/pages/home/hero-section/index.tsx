'use client'

import { Button } from '@/app/components/button'
import Carrosel from '@/app/components/carrosel'
import { CMSIcon } from '@/app/components/cms-icon'
import Tabloides from '@/app/components/tabloide'
import { HomePageInfo } from '@/app/types/page-info'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full h-full bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px] bg-blue-950">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row bg-blue-950">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Carrosel imagem={homeInfo.image}></Carrosel>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, i) => (
                <a
                  href={contact.url}
                  key={`contact-${i}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>

          <Tabloides tabloide={homeInfo.tabloide}></Tabloides>
        </motion.div>
      </div>
    </section>
  )
}
