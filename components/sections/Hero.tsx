'use client'

import { motion } from 'framer-motion'
import { Star, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import { siteConfig } from '@/lib/content'

const { hero } = siteConfig

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function Hero() {
  const words = hero.headline.split(' ')

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Radial accent gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,104,30,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="flex flex-col items-start gap-6">
            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <Badge variant="accent">
                <Star size={12} fill="currentColor" />
                {hero.badge}
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {words.map((word, i) => {
                const isAccent = word.toLowerCase().replace(/[^a-záéíóúüñ]/gi, '') === 'patagónica'
                return (
                  <span key={i}>
                    {isAccent ? (
                      <span style={{ color: 'var(--accent)' }}>{word}</span>
                    ) : (
                      word
                    )}
                    {i < words.length - 1 ? ' ' : ''}
                  </span>
                )
              })}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-lg leading-[1.75]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
              <Link
                href={hero.ctaPrimary.href}
                className="inline-flex items-center px-7 py-3.5 rounded-[10px] text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'var(--accent)', boxShadow: '0 4px 16px rgba(212,104,30,0.3)' }}
              >
                {hero.ctaPrimary.text}
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-[10px] text-base font-semibold border transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border)',
                  background: 'var(--surface-2)',
                }}
              >
                {hero.ctaSecondary.text}
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-2 text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < 4 ? 'text-amber-500' : 'text-amber-300'}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span>{hero.socialProof}</span>
            </motion.div>
          </div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3d2b1f 0%, #6b3a20 40%, #8b2500 100%)',
                aspectRatio: '4/3',
                boxShadow: '0 24px 60px rgba(139,37,0,0.25)',
              }}
            >
              {/* Texture overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
              />
              {/* Glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 70%, rgba(212,104,30,0.4) 0%, transparent 60%)',
                }}
              />
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-8">
                <div className="text-7xl">🔥</div>
                <p className="text-white text-2xl font-bold leading-tight">
                  Cordero al asador
                  <br />
                  <span className="text-[#f5a86e] text-lg font-medium">a fuego lento</span>
                </p>
                <p className="text-white/60 text-sm">
                  {/* TODO: reemplazar con foto real del asador */}
                  Foto del asador — Gral. Villegas 598
                </p>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 rounded-2xl p-4 shadow-soft-lg"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                minWidth: 180,
              }}
            >
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                Calificación Google
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  4.1
                </span>
                <Star size={18} fill="#f59e0b" className="text-amber-500" />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  +6.000 reseñas
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--text-secondary)' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
