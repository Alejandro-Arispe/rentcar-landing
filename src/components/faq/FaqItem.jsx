export default function FaqItem({ item }) {
  return (
    <details className="group border-b border-neutral-100 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-left text-sm font-semibold text-neutral-900">
        {item.question}
        <span className="ml-4 text-brand-500 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm text-neutral-600">{item.answer}</p>
    </details>
  )
}
