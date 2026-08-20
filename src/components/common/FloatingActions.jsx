import { WHATSAPP_LINK } from '../../constants/contact'

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="#vehiculos"
        aria-label="Ver vehículos disponibles"
        className="flex items-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-brand-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M18.92 6.01A2 2 0 0 0 17 4.5H7a2 2 0 0 0-1.92 1.51L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8zM6.5 9.5 7.4 6.5h9.2l.9 3zM6 15.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 11l.01-.01L5 11z" />
        </svg>
        Ver vehículos
      </a>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.36.66 4.56 1.8 6.44L4 29l7.73-1.75a12.9 12.9 0 0 0 4.28.73h.01c6.63 0 12.01-5.38 12.01-12.01C28 8.38 22.64 3 16.01 3m0 21.94h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-3.79.86.81-3.7-.24-.38a9.9 9.9 0 0 1-1.53-5.3c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.03 7.03 2.92a9.86 9.86 0 0 1 2.91 7.03c0 5.48-4.46 9.95-9.94 9.95m5.45-7.45c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17-.35.22-.65.07a8.15 8.15 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3 0-.45.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35" />
        </svg>
      </a>
    </div>
  )
}
