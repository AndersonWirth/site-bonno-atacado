'use client'

import { fadeUpAnimation } from '@/app/lib/animations'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { z } from 'zod'
import { Button } from '../button'
import { SectionTitle } from '../section-title'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  phone: z.string().min(9).max(15),
  email: z.string().email(),
  message: z.string().min(1).max(500),
  file: z.any().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('phone', data.phone)
      formData.append('email', data.email)
      formData.append('message', data.message)

      const fileInput = (document.querySelector('#file') as HTMLInputElement)
      const file = fileInput?.files?.[0]
      if (file) {
        formData.append('file', file)
      }

      await axios.post('/api/contact', formData)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <section
      className="px-6 md:pt-32 flex items-center justify-center bg-blue-950"
      id="contact"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register('name')}
          />
          <input
            placeholder="Telefone"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register('phone')}
          />
          <input
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            type="email"
            {...register('email')}
          />
          <textarea placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register('message')}
          />

          <input
            id="file"
            type="file"
            accept=".pdf,.jpg,.png,.doc,.docx"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />

          <div className="relative w-max mx-auto mt-6">
            <Button className="z-[2] relative" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-emerald-600 blur-2xl opacity-20" />
          </div>
        </motion.form>
      </div>
    </section>
  )
}
