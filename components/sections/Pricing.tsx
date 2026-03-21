'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, CreditCard, Phone } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/content'

const { menu } = siteConfig

export default function Pricing() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="menu"
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: 'var(--background)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Nuestros platos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {menu.sectionTitle}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {menu.sectionSubtitle}
          </p>
        </motion.div>

        {/* Dish highlights */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {menu.highlights.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl p-6"
              style={{
                background: dish.featured ? 'var(--secondary)' : 'var(--surface-2)',
                border: dish.featured
                  ? `2px solid var(--accent)`
                  : '1px solid var(--border)',
                boxShadow: dish.featured
                  ? '0 4px 24px rgba(212,104,30,0.2)'
                  : '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {dish.featured && (
                <span
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'var(--accent)' }}
                >
                  ★ La especialidad
                </span>
              )}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: dish.featured ? '#fff' : 'var(--text-primary)' }}
                  >
                    {dish.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: dish.featured ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)' }}
                  >
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Price range info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
          className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Star size={14} style={{ color: 'var(--accent)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                Precio estimado por persona: {menu.priceRange}
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {menu.pricePerPerson} — Plato principal + bebida. Postres y vinos aparte.
            </p>
          </div>
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            <CreditCard size={14} />
            <span>{menu.paymentMethods}</span>
          </div>
        </motion.div>

        {/* Note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            {menu.note}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={menu.cta.href}
              className="inline-flex items-center px-8 py-4 rounded-[10px] text-base font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 4px 16px rgba(212,104,30,0.3)',
              }}
            >
              {menu.cta.text}
            </Link>
            <a
              href={siteConfig.business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] text-base font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border)',
                background: 'var(--surface-2)',
              }}
            >
              <Phone size={16} />
              Consultar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
