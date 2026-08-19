export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-display-sm text-neutral-900 sm:text-display-md">{title}</h2>
      {description && <p className="mt-4 text-neutral-700">{description}</p>}
    </div>
  )
}
