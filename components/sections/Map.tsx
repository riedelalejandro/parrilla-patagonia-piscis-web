'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { siteConfig } from '@/lib/content'

const { location, business } = siteConfig

export default function Map() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="ubicacion"
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
          className="mb-12"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Cómo llegar
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Encontranos en el centro de San Martín
          </h2>
        </motion.div>

        {/* Map + info layout */}
        <div className="grid md:grid-cols-5 gap-6 items-stretch">
          {/* Map iframe — 3/5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="md:col-span-3 rounded-2xl overflow-hidden shadow-soft-lg"
            style={{ border: '1px solid var(--border)', minHeight: 320 }}
          >
            <iframe
              src={location.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Parrilla Patagonia Piscis en Google Maps"
            />
          </motion.div>

          {/* Contact info — 2/5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {/* Address card */}
            <div
              className="rounded-2xl p-5 flex-1"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--accent-light)' }}
                >
                  <MapPin size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Dirección
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {location.address}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {location.reference}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--accent-light)' }}
                >
                  <Phone size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Teléfono
                  </p>
                  <a
                    href={`tel:${business.phone.replace(/\s/g, '')}`}
                    className="text-sm transition-colors hover:text-[var(--accent)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--accent-light)' }}
                >
                  <Clock size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    Horarios
                  </p>
                  {/* TODO: reemplazar con horarios reales */}
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Consultanos por WhatsApp para horarios actualizados.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href={location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-[10px] text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'var(--accent)' }}
              >
                <MapPin size={16} />
                Abrir en Google Maps
                <ExternalLink size={13} />
              </a>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-[10px] text-sm font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border)',
                  background: 'var(--surface-2)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
