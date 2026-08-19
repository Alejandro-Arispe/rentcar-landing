import { SERVICES } from '../../constants/services'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  return (
    <section id="servicios" className="section">
      <Container>
        <SectionTitle eyebrow="Servicios" title="Todo lo que necesitas para tu alquiler" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 60} threshold={0.1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
