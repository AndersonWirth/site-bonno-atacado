import { ContactForm } from './components/contact-form'
import { Mapa } from './components/mapa'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { FooterAtacado } from './components/pages/home/rodape'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import { Footer } from './components/footer'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
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
        rodape {
          nomeEmpresa
          copyright
          email
          telefone
          telefoneTelevendas
          endereco
          horario
          documentos {
            url
            fileName
            mimeType
            size
          }
        }
        tabloide {
          nome
          imagens {
            url
          }
          capa {
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
  return (
    console.log(pageData),
    <>
      <HeroSection homeInfo={pageData} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <Mapa />
      <ContactForm />
      <FooterAtacado rodape={pageData.rodape} />

    </>
  )
}
