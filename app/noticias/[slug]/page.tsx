import { ProjectDetails } from '@/app/components/pages/noticia/noticia-details'
import { ProjectSections } from '@/app/components/pages/noticia/noticia-sections'
import { ProjectPageData, ProjectsPageStaticData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery {
    noticia(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      socialMidia
      description {
        raw
        text
      }
    }
  }
  `
  const data = fetchHygraphQuery<ProjectPageData>(
    query,
    60, // 1 minuto
  )

  return data
}

export default async function Noticia({ params: { slug } }: ProjectProps) {
  const { noticia } = await getProjectDetails(slug)

  if (!noticia?.title) return notFound()

  return (
    <>
      <ProjectDetails noticia={noticia} />
      <ProjectSections sections={noticia.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      noticias(first: 100) {
        slug
      }
    }
  `
  const { noticias } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return noticias
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const noticia = data.noticia
  return {
    title: noticia.title,
    description: noticia.description.text,
    openGraph: {
      images: [
        {
          url: noticia.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
