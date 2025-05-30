import { BackToTop } from '@/app/components/back-to-top'
import { ContactForm } from '@/app/components/contact-form'
import { Header } from '@/app/components/header'
import { Mapa } from '@/app/components/mapa'
import { FooterAtacado } from '@/app/components/pages/home/contato'
import { HeroSection } from '@/app/components/pages/home/hero-section'
import { HighlightedProjects } from '@/app/components/pages/home/highlighted-noticias'
import { WhatsappButton } from '@/app/components/whatsapp'
import { getPageDataBySlug } from '@/app/utils/get-page-data-query'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Toaster } from 'react-hot-toast'

// COLOCAR O generateMetadata NO PAGE INICIAL DEPOIS
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
            siteName: 'Bonno Free Shop',
            type: 'website',
        },
    }
}

export default async function FilialPage({ params }: { params: { slug: string } }) {
    const { page: pageData } = await getPageDataBySlug(params.slug)

    if (!pageData) return notFound()
    return (
        <>
            <Toaster />
            <WhatsappButton />
            <BackToTop />
            <Header />
            <HeroSection homeInfo={pageData} />
            <HighlightedProjects noticias={pageData.highlightNoticias} />
            <Mapa />
            <ContactForm />
            <FooterAtacado contato={pageData.contato} />
        </>
    )
}
