import { NextResponse } from 'next/server'

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const name = formData.get('name')?.toString() || ''
    const phone = formData.get('phone')?.toString() || ''
    const email = formData.get('email')?.toString() || ''
    const message = formData.get('message')?.toString() || ''
    const file = formData.get('file') as File | null

    const discordBody = new FormData()

    const payload = {
      embeds: [
        {
          title: 'Mensagem de Contato',
          color: 0x4983f5,
          fields: [
            { name: 'Nome', value: name, inline: true },
            { name: 'Telefone', value: phone, inline: true },
            { name: 'E-mail', value: email, inline: true },
            { name: 'Mensagem', value: message },
          ],
        },
      ],
    }

    discordBody.append('payload_json', JSON.stringify(payload))

    if (file) {
      discordBody.append('file', file, file.name)
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      body: discordBody,
    })

    if (!response.ok) throw new Error('Erro ao enviar para o Discord')

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 },
    )
  }
}
