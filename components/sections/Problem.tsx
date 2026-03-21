'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, HelpCircle, FileText, Users } from 'lucide-react'
import { siteConfig } from '@/lib/content'

const { problems } = siteConfig

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Clock,
  HelpCircle,
  FileText,
  Users,
}

export default function Problem() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: 'var(--surface)' }}
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
            Lo que sabemos que te pasa
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Elegir dónde comer en un destino nuevo no debería ser un juego de azar
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => {
            const Icon = iconMap[problem.icon] ?? MapPin
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
                whileHover={{ scale: 1.02, boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
                className="rounded-2xl p-6 transition-shadow duration-200"
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--accent-light)' }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3
                  className="font-bold text-lg mb-2 leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
