'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Quote, Star } from 'lucide-react'
import { siteConfig } from '@/lib/content'

const { socialProof } = siteConfig

function Counter({
  value,
  suffix = '',
  prefix = '',
  decimal = false,
  isInView,
}: {
  value: number
  suffix?: string
  prefix?: string
  decimal?: boolean
  isInView: boolean
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) =>
    decimal ? v.toFixed(1) : Math.round(v).toLocaleString('es-AR')
  )

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
    })
    return controls.stop
  }, [isInView, count, value])

  return (
    <motion.span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
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
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Lo que dicen los que ya vinieron
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Más de 6.000 comensales no pueden estar equivocados
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {socialProof.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <p
                className="text-3xl sm:text-4xl font-extrabold mb-2"
                style={{ color: 'var(--accent)' }}
              >
                <Counter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={'prefix' in metric ? metric.prefix : ''}
                  decimal={'decimal' in metric ? (metric as { decimal?: boolean }).decimal : false}
                  isInView={isInView}
                />
              </p>
              <p className="text-sm font-medium leading-snug" style={{ color: 'var(--text-secondary)' }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {socialProof.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 + i * 0.12 }}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 28px rgba(0,0,0,0.10)' }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <Quote size={20} style={{ color: 'var(--accent)' }} />
              <p
                className="text-base leading-[1.75] flex-1 italic"
                style={{ color: 'var(--text-primary)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'var(--accent)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {/* TODO: reemplazar con nombres reales de reseñas */}
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {t.role} · {t.city}
                  </p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="#f59e0b" className="text-amber-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
