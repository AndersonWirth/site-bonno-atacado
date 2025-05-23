'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsappButton() {
  const phoneNumber = '5549989037775' // Ex: 5548999998888
  const message =
    'Olá! Gostaria de mais informações sobre os produtos da Bonno Freeshop.'

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
