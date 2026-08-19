export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-lg border border-neutral-100 p-6 transition-colors duration-300 hover:border-brand-500">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-900/5 text-brand-700" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
        </svg>
      </span>
      <h3 className="text-sm font-semibold text-neutral-900">{service.title}</h3>
    </div>
  )
}
