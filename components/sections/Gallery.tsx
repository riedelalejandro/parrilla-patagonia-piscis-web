'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/lib/content'

const { gallery } = siteConfig

// Gradient placeholders by index — warm food photography tones
const placeholderGradients = [
  'linear-gradient(135deg, #3d1a08 0%, #8b2500 50%, #d4681e 100%)',
  'linear-gradient(135deg, #1a2a0a 0%, #3d5c1f 50%, #6b8c3a 100%)',
  'linear-gradient(135deg, #0a1a2a 0%, #1f3d5c 50%, #3a6b8c 100%)',
  'linear-gradient(135deg, #2a1a0a 0%, #5c3d1f 50%, #8c6b3a 100%)',
  'linear-gradient(135deg, #1a0a2a 0%, #3d1f5c 50%, #6b3a8c 100%)',
  'linear-gradient(135deg, #0a2a1a 0%, #1f5c3d 50%, #3a8c6b 100%)',
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const featured = gallery.images.find((img) => img.featured)
  const rest = gallery.images.filter((img) => !img.featured)

  return (
    <section
      id="galeria"
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: 'var(--secondary)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#f5a86e' }}
          >
            Galería
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {gallery.sectionTitle}
          </h2>
          <p className="mt-3 text-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {gallery.sectionSubtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Featured image — spans 2 cols + 2 rows on desktop */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
              className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group"
              style={{ aspectRatio: '4/3' }}
            >
              {/* TODO: reemplazar con foto real. Ruta: /public/images/gallery/cordero-asador.jpg */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: placeholderGradients[0] }}
              />
              {/*
                Cuando tengas la imagen, reemplazá el div anterior por:
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                  style={{ background: 'rgba(212,104,30,0.85)' }}>
                  ★ {featured.caption}
                </span>
              </div>
            </motion.div>
          )}

          {/* Rest of images */}
          {rest.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + i * 0.08 }}
              className="relative overflow-hidden rounded-2xl group"
              style={{ aspectRatio: '1/1' }}
            >
              {/* TODO: reemplazar con foto real. Ruta: {img.src} */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: placeholderGradients[(i + 1) % placeholderGradients.length] }}
              />
              {/*
                Cuando tengas la imagen, reemplazá el div anterior por:
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about real photos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 text-center text-sm"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          {/* TODO: eliminar este párrafo cuando se agreguen las fotos reales */}
          Las fotos se agregarán antes del lanzamiento en <code className="text-xs">/public/images/gallery/</code>
        </motion.p>
      </div>
    </section>
  )
}
