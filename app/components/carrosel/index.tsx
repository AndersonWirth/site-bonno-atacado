'use client'

import { ImageCarrosel } from "@/app/types/projects"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

type Imagens = {
    imagem: ImageCarrosel[]
}

export default function Carrosel({ imagem }: Imagens) {
    return (
        <div className="w-full max-w-6xl mx-auto">
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
                spaceBetween={10}
                slidesPerView={1}
                className="aspect-[16/9] rounded overflow-hidden"
            >
                {imagem.map((src, i) => (
                    <SwiperSlide
                        key={i}
                        className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center"
                    >
                        <Image
                            src={src.image.url}
                            alt={`Slide ${i}`}
                            width={1600}
                            height={450}
                            className="h-full object-contain"
                            priority
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}
