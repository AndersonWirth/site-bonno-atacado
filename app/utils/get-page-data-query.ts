import { HomePageData } from '../types/page-info'
import { fetchHygraphQuery } from './fetch-hygraph-query'

export const getPageData = async (): Promise<HomePageData> => {
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
        highlightNoticias {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          socialMidia
        }
        image {
          name
          image {
            url
          }
        }
        contato {
          nomeEmpresa
          copyright
          email
          telefone
          telefoneTelevendas
          telfixo
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
    1000 * 60, // 1 minuto
  )
}
