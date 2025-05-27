import { ContactForm } from './components/contact-form'
import { Mapa } from './components/mapa'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-noticias'
import { getPageData } from './utils/get-page-data-query'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
    description:
      'Descubra os melhores produtos importados: perfumes, bebidas, eletrônicos e muito mais na Bonno Free Shop.',
    robots: 'index, follow',
    openGraph: {
      title: 'Bonno Free Shop',
      description: 'Produtos importados com qualidade e preço justo.',
      url: 'https://www.bonnofreeshop.com.br',
      siteName: 'Bonno FreeShop',
      type: 'website',
    },
  }
}

export default async function Home() {
  const { page: pageData } = await getPageData()
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <HighlightedProjects noticias={pageData.highlightNoticias} />
      <Mapa />
    </>
  )
}
