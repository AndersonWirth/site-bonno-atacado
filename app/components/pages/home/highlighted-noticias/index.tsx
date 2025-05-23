import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { Noticia } from '@/app/types/projects'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { NoticiaCard } from './noticia-card'

type HighlightedProjectsProps = {
  noticias: Noticia[]
}

export const HighlightedProjects = ({ noticias }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle
        title="Notícias em destaque"
        className="items-center text-emerald-400 text-center" />
      <HorizontalDivider className="mb-16" />

      <div>
        {noticias?.map((noticia) => (
          <div key={noticia.slug}>
            <NoticiaCard noticia={noticia} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou nas notícias?</span>
          <Link href="/noticias" className="inline-flex">
            Ver todas
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
