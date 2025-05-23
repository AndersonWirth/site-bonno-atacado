import { ProjectsList } from '../components/pages/noticias/noticias-list'
import { PageIntroduction } from '../components/pages/noticias/page-introduction'
import { ProjectsPageData } from '../types/page-info'
import { fetchHygraphQuery } from '../utils/fetch-hygraph-query'

export const metadata = {
  title: 'Notícias',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      noticias {
        shortDescription
        socialMidia
        slug
        title
        thumbnail {
          url
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Noticias() {
  const { noticias } = await getPageData()
  return (
    <>
      <PageIntroduction />
      <ProjectsList noticias={noticias} />
    </>
  )
}
