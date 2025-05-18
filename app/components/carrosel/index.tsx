'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ImageCarrosel } from "@/app/types/projects"

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
                    delay: 3000, // 3 segundos entre slides
                    disableOnInteraction: false, // continua passando mesmo se o usuário clicar
                    pauseOnMouseEnter: true, // 🛑 PAUSA no hover
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                className="h-[300px] sm:h-[400px] md:h-[500px] rounded overflow-hidden"
            >
                {imagem.map((src, i) => (
                    <SwiperSlide key={i} className="w-full h-full flex items-center justify-center">
                        <Image
                            src={src.image.url}
                            alt={`Slide ${i}`}
                            width={1600}
                            height={450}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}
