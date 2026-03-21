'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/content'

const navLinks = [
  { label: 'Menú', href: '#menu' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250, 246, 240, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--primary)' }}
          >
            Piscis
          </span>
          <span
            className="hidden sm:inline text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            Parrilla Patagónica
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors relative group"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full transition-all duration-200 group-hover:w-full"
                style={{ background: 'var(--accent)' }}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contacto"
            className="px-5 py-2.5 rounded-[10px] text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--accent)' }}
          >
            Reservar mesa
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden px-4 pb-4 pt-2"
          style={{ background: 'rgba(250, 246, 240, 0.97)', backdropFilter: 'blur(12px)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium border-b"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center px-5 py-3 rounded-[10px] text-base font-semibold text-white"
            style={{ background: 'var(--accent)' }}
          >
            Reservar mesa
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}
