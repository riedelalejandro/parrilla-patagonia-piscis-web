import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    turbo: {},
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default config
