'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Notícias', href: '/noticias' },
  { label: 'Contato', href: '/contato' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 z-10 w-full bg-blue-950"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between h-24 px-4">
        <Link href="/">
          <Image
            width={130}
            height={130}
            src="/images/logo22.svg"
            alt="Logo Bonno Free Shop"
            className="object-contain"
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden sm:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>

        {/* Botão hamburguer mobile */}
        <button
          className="sm:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="sm:hidden bg-blue-950 px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-2 text-white hover:text-emerald-400"
              onClick={() => setMenuOpen(false)} // fecha menu ao clicar
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </motion.header>
  )
}
