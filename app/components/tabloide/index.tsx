'use client'

import { Tabloide } from '@/app/types/projects'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { HorizontalDivider } from '../divider/horizontal'
import { SectionTitle } from '../section-title'

type TabloidesProps = {
  tabloide: Tabloide[]
}

export default function Tabloides({ tabloide }: TabloidesProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openGallery = (index: number) => {
    setActiveIndex(index)
    setIsOpen(true)
  }

  const closeGallery = () => {
    setIsOpen(false)
  }

  // Bloquear scroll do body quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Thumbnails */}
      <section>
        <SectionTitle
          title="Ofertas em Destaque"
          className="items-center text-emerald-400 text-center"
        />
        <HorizontalDivider className="mb-16" />
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tabloide.map((item, i) => (
            <div
              key={item.nome}
              className="cursor-pointer hover:opacity-80 transition"
              onClick={() => openGallery(i)}
            >
              <Image
                src={item.capa.url}
                alt={item.nome}
                width={1600}
                height={450}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center overflow-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              >
                ×
              </button>

              <div className="w-full max-w-6xl px-2 sm:px-6 max-h-screen">
                <Swiper
                  key={activeIndex} // <- força recriação
                  modules={[Navigation]}
                  navigation
                  initialSlide={0} // <- agora pode ser sempre 0, pois o conteúdo já é filtrado
                  className="w-full"
                >
                  {tabloide[activeIndex]?.imagens?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="w-full h-[60vh] sm:h-[80vh] flex items-center justify-center">
                        <Image
                          src={img.url}
                          alt={`${tabloide[activeIndex].nome} - imagem ${
                            i + 1
                          }`}
                          width={1600}
                          height={900}
                          className="max-w-full max-h-full object-contain rounded"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}
