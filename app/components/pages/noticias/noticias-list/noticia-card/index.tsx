import { Noticia } from '@/app/types/projects'
import Image from 'next/image'

type NoticiaCardProps = {
  noticia: Noticia
}

export const NoticiaCard = ({ noticia }: NoticiaCardProps) => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden group transition-all border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
          alt={`Thumbnail do projeto ${noticia.title}`}
          src={noticia.thumbnail.url}
          unoptimized
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          {noticia.title}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          {noticia.shortDescription}
        </p>
      </div>
    </div>
  )
}
