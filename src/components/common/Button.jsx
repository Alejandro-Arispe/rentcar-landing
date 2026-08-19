const VARIANTS = {
  primary: 'bg-brand-900 text-white hover:bg-brand-700',
  secondary: 'border border-neutral-300 text-neutral-900 hover:border-brand-500 hover:text-brand-700',
  whatsapp: 'bg-brand-500 text-white hover:bg-brand-400',
}

export default function Button({ as: Tag = 'button', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
