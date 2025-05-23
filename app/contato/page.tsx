import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Metadata } from 'next'
import { getPageData } from '../utils/get-page-data-query'

export const metadata: Metadata = {
  title: 'Contato - Bonno Freeshop',
}

function formatPhone(phone: string) {
  const cleaned = phone.replace(/\D/g, '')
  const localNumber = cleaned.startsWith('55') ? cleaned.slice(2) : cleaned
  return localNumber.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2-$3')
}

export default async function ContatoPage() {
  const { page } = await getPageData()
  const contato = page.contato

  return (
    <main className="max-w-6xl mx-auto px-4 pt-32">
      <h1 className="text-5xl font-bold text-center text-emerald-400 mb-12">
        Entre em Contato
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Bloco de informações */}
        <section className="shadow-xl rounded-2xl p-8 space-y-6 border">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            Informações do Bonno Freeshop
          </h2>
          <ul className="space-y-4 text-emerald-400 text-base">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-green-600" />
              <span>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contato.email}`} className="hover:underline">
                  {contato.email}
                </a>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-green-600" />
              <span>
                <strong>Telefone:</strong>{' '}
                <a
                  href={`https://wa.me/${contato.telefone}?text=Olá,%20gostaria%20de%20mais%20informações.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {formatPhone(contato.telefone)}
                </a>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-green-600" />
              <span>
                <strong>Televendas:</strong>{' '}
                <a
                  href={`https://wa.me/${contato.telefoneTelevendas}?text=Olá,%20gostaria%20de%20comprar%20no%20atacado.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {formatPhone(contato.telefoneTelevendas)}
                </a>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-green-600" />
              <span>
                <strong>Telefone fixo:</strong>{' '}
                <a href={`tel:${contato.telfixo}`} className="hover:underline">
                  {formatPhone(contato.telfixo)}
                </a>
              </span>
            </li>
          </ul>
        </section>

        {/* Endereço e horário */}
        <section className="shadow-xl rounded-2xl p-8 space-y-6 border">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            Faça uma visita presencial :)
          </h2>
          <ul className="space-y-4 text-emerald-400 text-base">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-green-600" />
              <span>
                <strong>Endereço:</strong> {contato.endereco}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-6 h-6 mt-1 text-green-600" />
              <span>
                <strong>Atendimento:</strong> {contato.horario}
              </span>
            </li>
          </ul>
        </section>
      </div>

      {/* Mapa */}
      <div className="mt-12 w-full flex items-center justify-center bg-blue-950">
        <div className="w-full">
          <iframe
            className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228517.62110843236!2d-53.73993204082461!3d-26.50121272477639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f09b0c5ef60d87%3A0x91addafea4459246!2sBonno%20Free%20Shop!5e0!3m2!1spt-BR!2sbr!4v1747852915980!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  )
}
