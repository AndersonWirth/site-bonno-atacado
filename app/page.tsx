import { ContactForm } from './components/contact-form'
import { Mapa } from './components/mapa'
import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-noticias'
import { getPageData } from './utils/get-page-data-query'

export const metadata = {
  title: 'Home',
}

export default async function Home() {
  const { page: pageData } = await getPageData()
  return (
    (
      <>
        <HeroSection homeInfo={pageData} />
        <HighlightedProjects noticias={pageData.highlightNoticias} />
        <Mapa />

      </>
    )
  )
}
