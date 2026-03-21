interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'neutral'
  className?: string
}

export default function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  const styles = {
    accent: 'bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)] border-opacity-20',
    neutral: 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
