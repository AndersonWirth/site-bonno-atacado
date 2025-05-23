'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { contato } from '@/app/types/projects'
import { IoLogoWhatsapp, IoMdClock, IoMdHeart } from 'react-icons/io'
import { Link } from '@/app/components/link'
import { MdLocationPin } from 'react-icons/md'
import { IoDocumentAttach } from 'react-icons/io5'

type FooterProps = {
  contato: contato
}

export const FooterAtacado = ({ contato }: FooterProps) => {
  const {
    nomeEmpresa,
    copyright,
    email,
    telefone,
    telefoneTelevendas,
    endereco,
    horario,
    documentos,
  } = contato

  return (
    <motion.footer className="bg-blue-900 text-gray-300 px-4 sm:px-6 md:px-12 py-12 mt-20">
      <motion.div className="container max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contato */}
        <motion.div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-300">
              Contatos
            </h4>
            <IoLogoWhatsapp className="text-yellow-300 mb-2 text-2xl" />
          </div>
          <p className="text-sm sm:text-base">
            Email:{' '}
            <a
              href={`mailto:${email}`}
              className="underline hover:text-emerald-400 transition"
            >
              {email}
            </a>
          </p>
          <p className="text-sm sm:text-base mt-1">
            Telefone:{' '}
            <a
              href={`https://wa.me/${telefone}?text=Olá%20gostaria%20de%20mais%20informações`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-400 transition"
            >
              {telefone}
            </a>
          </p>
          <p className="text-sm sm:text-base mt-1">
            Televendas:{' '}
            <a
              href={`https://wa.me/${telefoneTelevendas}?text=Olá%20gostaria%20de%20mais%20informações`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-400 transition"
            >
              {telefoneTelevendas}
            </a>
          </p>
        </motion.div>

        {/* Horário */}
        <motion.div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-300">
              Horario
            </h4>
            <IoMdClock className="text-yellow-300 mb-2 text-2xl" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5">
            <div className="text-sm sm:text-base flex items-center h-20 gap-3 mt-3 sm:mt-0">
              <p className="whitespace-pre-line">{horario}</p>
            </div>
          </div>
        </motion.div>

        {/* Endereço */}
        <motion.div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-300">
              Endereço
            </h4>
            <MdLocationPin className="text-yellow-300 mb-2 text-2xl" />
          </div>
          <a
            href="https://g.co/kgs/PT8JA4j"
            className="text-sm sm:text-base whitespace-pre-line underline hover:text-emerald-400 transition"
          >
            {endereco}
          </a>
        </motion.div>

        {/* Documentos */}
        <motion.div>
          {documentos && documentos.length > 0 && (
            <>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-yellow-300">
                  Declarações
                </h4>
                <IoDocumentAttach className="text-yellow-300 mb-2 text-2xl" />
              </div>
              <ul className="text-sm sm:text-base space-y-1">
                {documentos.map((doc) => (
                  <li key={doc.url}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-emerald-400 transition"
                      download
                    >
                      {doc.fileName}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Footer bottom text */}
      <motion.span className="pt-5 w-full flex justify-center items-center gap-1 text-xs sm:text-sm font-mono text-gray-400">
        Made with
        <IoMdHeart size={13} className="text-emerald-500" />
        by
        <Link
          href="https://www.linkedin.com/in/anderson-engel-wirth/"
          target="_blank"
          className="font-medium text-emerald-600 hover:text-emerald-400 transition"
        >
          Anderson Wirth
        </Link>
      </motion.span>

      <motion.div className="w-full flex justify-center items-center text-xs sm:text-sm font-mono text-gray-400">
        <p className="text-sm whitespace-pre-line">{copyright}</p>
      </motion.div>
    </motion.footer>
  )
}
