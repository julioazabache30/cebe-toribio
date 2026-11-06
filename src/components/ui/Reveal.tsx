import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react'

export type RevealVariant = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.12,
  once = true,
  className = '',
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={`reveal-item reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
