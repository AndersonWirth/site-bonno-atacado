import type { RichTextContent } from '@graphcms/rich-text-types'


export type ProjectSection = {
  title: string
  image: {
    url: string
  }
}

export type Noticia = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
    text: string
  }
  liveProjectUrl?: string
  githubUrl?: string
}

export type ImageCarrosel = {
  name: string
  image: {
    url: string
  }
}

export type contato = {
  nomeEmpresa: string
  copyright: string
  email: string
  telefone: string
  telefoneTelevendas: string
  endereco: string
  horario: string
  documentos: {
    url: string
    fileName: string
    mimeType: string
    size: number
  }[]
}

export type Tabloide = {
  nome: string
  imagens: {
    url: string
  }[]
  capa: {
    url: string
  }
}

