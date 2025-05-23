'use client'

import { ImageCarrosel } from '@/app/types/projects'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Imagens = {
  imagem: ImageCarrosel[]
}

export default function Carrosel({ imagem }: Imagens) {
  return (
    <div className="w-full mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="rounded-xl overflow-hidden"
      >
        {imagem.map((src, i) => (
          <SwiperSlide
            key={i}
            className="w-full flex items-center justify-center "
          >
            <div className="relative w-full max-h-[630px] aspect-video">
              <Image
                src={src.image.url}
                alt={`Slide ${i}`}
                fill
                className=""
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
