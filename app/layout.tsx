import 'keen-slider/keen-slider.min.css'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BackToTop } from './components/back-to-top'
import { Header } from './components/header'
import { FooterAtacado } from './components/pages/home/contato'
import { Toaster } from './components/toaster'
import { WhatsappButton } from './components/whatsapp'
import './globals.css'
import { getPageData } from './utils/get-page-data-query'
import { ContactForm } from './components/contact-form'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Bonno Free shop',
  },
  icons: [
    {
      url: '/images/logo22.svg',
    },
  ],
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const { page: pageData } = await getPageData()
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <WhatsappButton />
        <BackToTop />
        <Header />
        {children}
        <ContactForm />
        <FooterAtacado contato={pageData.contato} />
      </body>
    </html>
  )
}
