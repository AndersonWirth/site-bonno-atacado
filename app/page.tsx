import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
  debugger
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
        }
        image {
          name
          image {
            url
          }
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Home() {
  const { page: pageData } = await getPageData()
debugger
  return (
    console.log(pageData),
    <>
      <HeroSection homeInfo={pageData} />
      <HighlightedProjects projects={pageData.highlightProjects} />
    </>
  )
}
