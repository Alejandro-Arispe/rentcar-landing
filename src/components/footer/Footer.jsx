import { CONTACT_INFO } from '../../constants/contact'
import Container from '../common/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-100 bg-neutral-50 py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-brand-900">ABR</p>
          <p className="mt-1 text-sm text-neutral-600">
            {CONTACT_INFO.city}, {CONTACT_INFO.country}
          </p>
        </div>

        <div className="text-sm text-neutral-600">
          <p>{CONTACT_INFO.schedule.days} · {CONTACT_INFO.schedule.hours}</p>
          <p>{CONTACT_INFO.phone} · {CONTACT_INFO.email}</p>
        </div>

        <p className="text-xs text-neutral-500">© {year} RentCar. Todos los derechos reservados.</p>
      </Container>
    </footer>
  )
}
