import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Parrilla Patagonia Piscis | Restaurante en San Martín de los Andes',
  description:
    'Cordero al asador, ciervo patagónico y truchas. La parrilla con más de 6.000 reseñas en Google en San Martín de los Andes, Neuquén.',
  keywords: [
    'parrilla San Martín de los Andes',
    'restaurante patagónico',
    'cordero al asador Neuquén',
    'donde comer San Martín de los Andes',
    'mejor parrilla Patagonia',
    'ciervo patagónico',
    'trucha San Martín',
  ],
  openGraph: {
    title: 'Parrilla Patagonia Piscis | Restaurante en San Martín de los Andes',
    description:
      'Cordero al asador, ciervo patagónico y truchas. La parrilla con más de 6.000 reseñas en Google en San Martín de los Andes, Neuquén.',
    images: ['/images/og-image.png'],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parrilla Patagonia Piscis | Restaurante en San Martín de los Andes',
    description:
      'Cordero al asador, ciervo patagónico y truchas. La parrilla con más de 6.000 reseñas en Google.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
