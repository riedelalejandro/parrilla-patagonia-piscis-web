'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/lib/content'

const { faq } = siteConfig

function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const id = `faq-answer-${index}`

  return (
    <div
      className="border-b last:border-b-0 transition-colors duration-200"
      style={{ borderColor: 'var(--border)' }}
    >
      <button
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-base font-semibold leading-snug"
          style={{ color: 'var(--text-primary)' }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            background: isOpen ? 'var(--accent)' : 'var(--surface)',
            color: isOpen ? '#fff' : 'var(--text-secondary)',
          }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-5 text-base leading-[1.75]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Preguntas frecuentes
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Todo lo que necesitás saber antes de venir
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            padding: '0 1.5rem',
          }}
        >
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Post-FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-14 text-center rounded-2xl p-10"
          style={{
            background: 'linear-gradient(135deg, var(--secondary) 0%, #6b3a20 100%)',
          }}
        >
          <p className="text-white/70 text-sm font-medium mb-3 uppercase tracking-widest">
            ¿Listo para la experiencia?
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Más de 6.000 personas ya comieron con nosotros.
          </h3>
          <p className="text-white/70 text-lg mb-8">¿Y vos?</p>
          <Link
            href="#contacto"
            className="inline-flex items-center px-8 py-4 rounded-[10px] text-base font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 4px 16px rgba(212,104,30,0.4)',
            }}
          >
            Reservar mi mesa ahora
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
