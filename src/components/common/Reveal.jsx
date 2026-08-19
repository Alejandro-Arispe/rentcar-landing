import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Reveal({ children, className = '', delay = 0, threshold = 0.15 }) {
  const [ref, visible] = useScrollReveal({ threshold })

  return (
    <div
      ref={ref}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
      className={`${visible ? 'animate-fadeUp' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
