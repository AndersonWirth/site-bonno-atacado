'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Tabloide } from "@/app/types/projects"

type Tabloides = {
    tabloide: Tabloide
}


export default function Tabloides({ tabloide }: Tabloides) {
    debugger
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
                {tabloide.map((src, i) => (
                    <Image
                        src={src.capa.url}
                        alt={`Slide ${i}`}
                        width={1600}
                        height={450}
                        className="w-full h-auto object-cover"
                        priority
                    />
                ))}
            </Swiper>
        </div>
    )
}
