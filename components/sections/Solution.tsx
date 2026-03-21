'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Flame, ChefHat, Wine, Utensils, Package, CalendarCheck } from 'lucide-react'
import { siteConfig } from '@/lib/content'

const { solution } = siteConfig

const iconMap: Record<string, React.ElementType> = {
  Flame,
  ChefHat,
  Wine,
  Utensils,
  Package,
  CalendarCheck,
}

export default function Solution() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="nosotros-2"
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
            Por qué Piscis
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {solution.title}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            {solution.subtitle}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Flame
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
                whileHover={{ scale: 1.02, boxShadow: '0 6px 28px rgba(0,0,0,0.10)' }}
                className="rounded-2xl p-6"
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'var(--accent-light)' }}
                >
                  <Icon size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <h3
                  className="font-bold text-lg mb-3 leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {feature.name}
                </h3>
                <p className="text-sm leading-[1.75]" style={{ color: 'var(--text-secondary)' }}>
                  {feature.benefit}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
