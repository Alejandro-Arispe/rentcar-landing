import { WHATSAPP_LINK } from '../../constants/contact'
import Container from '../common/Container'
import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <Container className="grid items-center gap-10 py-16 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="order-2 animate-fadeUp lg:order-1">
          <h1 className="text-display-sm text-neutral-900 sm:text-display-md lg:text-display-lg">
            Vehículos seguros, cómodos y listos para tu próximo destino.
          </h1>
          <p className="mt-5 max-w-lg text-base text-neutral-700 sm:mt-6 sm:text-lg">
            Alquiler de vehículos en Santa Cruz de la Sierra para clientes particulares, turistas y empresas,
            con atención personalizada y entrega flexible.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="whatsapp">
              Contactar por WhatsApp
            </Button>
            <Button as="a" href="#vehiculos" variant="secondary">
              Ver vehículos
            </Button>
          </div>
        </div>

        <div className="order-1 relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:aspect-[4/3] lg:order-2 lg:aspect-square">
          <img
            src="/images/logo.png"
            alt="Vehículo RentCar listo para viaje"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="960"
            height="720"
          />
        </div>
      </Container>
    </section>
  )
}
