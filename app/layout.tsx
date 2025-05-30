import 'keen-slider/keen-slider.min.css'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { WhatsappButton } from '@/app/components/whatsapp'
import { BackToTop } from '@/app/components/back-to-top'
import { Header } from '@/app/components/header'
import { ContactForm } from '@/app/components/contact-form'
import { FooterAtacado } from '@/app/components/pages/home/contato'
import { getPageDataBySlug } from '@/app/utils/get-page-data-query'

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
  const { page: pageData } = await getPageDataBySlug('home')
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        {
          //<Toaster />
          //<WhatsappButton />
          //<BackToTop />
          //<Header />
        }
        {children}

        {
          //<ContactForm />
          //<FooterAtacado contato={pageData.contato} />
        }
      </body>
    </html>
  )
}
