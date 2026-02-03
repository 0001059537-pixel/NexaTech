'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppButton() {
  const phoneNumber = '5511999999999'
  const message = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre os serviços da NexaTech.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-[#25D366] p-0 shadow-lg transition-transform hover:scale-110 hover:bg-[#20BD5A]"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </a>
  )
}
