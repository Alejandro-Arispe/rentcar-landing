export default function StepCard({ step, isLast }) {
  return (
    <div className="relative flex flex-1 flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-900 text-sm font-semibold text-white">
          {step.step}
        </span>
        {!isLast && <span className="hidden h-px flex-1 bg-neutral-200 sm:block" aria-hidden="true" />}
      </div>
      <h3 className="text-sm font-semibold text-neutral-900">{step.title}</h3>
      <p className="text-sm text-neutral-600">{step.description}</p>
    </div>
  )
}
