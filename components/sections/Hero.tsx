'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ChevronDown } from 'lucide-react'
import Badge from '@/components/ui/Badge'
import { siteConfig } from '@/lib/content'

const { hero } = siteConfig

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* TODO: reemplazar con foto real del asador/local. Ruta: /public/images/hero.jpg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #1a0a04 0%, #3d1a08 30%, #6b2c10 60%, #3d2b1f 100%)',
          }}
        />
        {/*
          Cuando tengas la imagen real, reemplazá el div anterior por:
          <Image
            src="/images/hero.jpg"
            alt="Cordero al asador en Parrilla Patagonia Piscis"
            fill
            priority
            className="object-cover object-center"
          />
        */}
      </div>

      {/* Overlay gradient para legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* Noise texture para profundidad */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl flex flex-col items-start gap-6">
          {/* Badge */}
          <motion.div {...fadeUp(0)}>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border"
              style={{
                background: 'rgba(212,104,30,0.2)',
                borderColor: 'rgba(212,104,30,0.5)',
                color: '#f5a86e',
              }}
            >
              <Star size={12} fill="currentColor" />
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight text-white"
          >
            {hero.headline.split(' ').map((word, i) => {
              const isAccent = word.toLowerCase().replace(/[^a-záéíóúüñ]/gi, '') === 'patagónica'
              return (
                <span key={i}>
                  {isAccent ? (
                    <span style={{ color: '#f5a86e' }}>{word}</span>
                  ) : (
                    word
                  )}
                  {' '}
                </span>
              )
            })}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg leading-[1.75] text-white/70 max-w-xl"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
            <Link
              href={hero.ctaPrimary.href}
              className="inline-flex items-center px-7 py-3.5 rounded-[10px] text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 4px 20px rgba(212,104,30,0.45)',
              }}
            >
              {hero.ctaPrimary.text}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-[10px] text-base font-semibold text-white border border-white/30 transition-all duration-200 hover:border-white/60 hover:bg-white/10"
            >
              {hero.ctaSecondary.text}
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center gap-2 text-sm text-white/60"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < 4 ? 'text-amber-400' : 'text-amber-400/50'}
                  fill="currentColor"
                />
              ))}
            </div>
            <span>{hero.socialProof}</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
