'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] shadow-sm',
  secondary:
    'bg-white text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] shadow-soft',
  ghost:
    'bg-transparent text-[var(--accent)] hover:bg-[var(--accent-light)]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  loading = false,
  disabled = false,
  children,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-[10px] font-semibold transition-all duration-200 cursor-pointer select-none'
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading ? (
        <span className="animate-spin mr-2">⟳</span>
      ) : null}
      {children}
    </motion.button>
  )
}
