import { CONTACT_INFO, WHATSAPP_LINK } from '../../constants/contact'
import Container from '../common/Container'
import Button from '../common/Button'

export default function ContactSection() {
  return (
    <section id="contacto" className="section">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">Contacto</span>
          <h2 className="mt-2 text-display-sm text-neutral-900 sm:text-display-md">
            Coordinemos tu próximo alquiler
          </h2>

          <dl className="mt-8 space-y-4 text-sm text-neutral-700">
            <div>
              <dt className="font-medium text-neutral-900">Ubicación</dt>
              <dd>{CONTACT_INFO.zone}, {CONTACT_INFO.city}, {CONTACT_INFO.country}</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900">Teléfono</dt>
              <dd>{CONTACT_INFO.phone}</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900">Correo</dt>
              <dd>{CONTACT_INFO.email}</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-900">Horario</dt>
              <dd>{CONTACT_INFO.schedule.days} · {CONTACT_INFO.schedule.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col items-start gap-6 rounded-2xl bg-neutral-50 p-10">
          <p className="text-neutral-700">
            Escríbenos directamente y confirma disponibilidad en minutos.
          </p>
          <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="whatsapp" className="w-full sm:w-auto">
            Contactar por WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  )
}
