// app/contato/page.tsx

import { getPageData } from "../utils/get-page-data-query"

export const metadata = {
    title: 'Contato',
}

export default async function ContatoPage() {
    const { page } = await getPageData()
    const contato = page.contato

    return (
        <main className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>

            <section className="space-y-4">
                <p><strong>Empresa:</strong> {contato.nomeEmpresa}</p>
                <p><strong>Email:</strong> <a href={`mailto:${contato.email}`} className="text-blue-600 underline">{contato.email}</a></p>
                <p><strong>Telefone:</strong> <a href={`tel:${contato.telefone}`} className="text-blue-600 underline">{contato.telefone}</a></p>
                <p><strong>Televendas:</strong> <a href={`tel:${contato.telefoneTelevendas}`} className="text-blue-600 underline">{contato.telefoneTelevendas}</a></p>
                <p><strong>Endereço:</strong> {contato.endereco}</p>
                <p><strong>Horário de atendimento:</strong> {contato.horario}</p>

                {contato.documentos && contato.documentos.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold mt-6 mb-2">Documentos</h2>
                        <ul className="list-disc list-inside">
                            {contato.documentos.map((doc) => (
                                <li key={doc.url}>
                                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                        {doc.fileName} ({Math.round(doc.size / 1024)} KB)
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </main>
    )
}
