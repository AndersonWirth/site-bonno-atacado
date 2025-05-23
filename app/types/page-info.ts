import type { RichTextContent } from '@graphcms/rich-text-types'
import { ImageCarrosel, Noticia, contato, Tabloide } from './projects'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  profilePicture: {
    url: string
  }
  socials: Social[]
  highlightNoticias: Noticia[]
  image: ImageCarrosel[]
  contato: contato
  tabloide: Tabloide[]
}

export type ProjectPageData = {
  noticia: Noticia
}

export type ProjectsPageData = {
  noticias: Noticia[]
}

export type ProjectsPageStaticData = {
  noticias: {
    slug: string
  }[]
}

export type HomePageData = {
  page: HomePageInfo
}
