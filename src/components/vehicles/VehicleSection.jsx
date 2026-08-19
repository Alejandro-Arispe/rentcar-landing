import { VEHICLES } from '../../constants/vehicles'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import VehicleCard from './VehicleCard'

export default function VehicleSection() {
  return (
    <section id="vehiculos" className="section">
      <Container>
        <SectionTitle
          eyebrow="Flota disponible"
          title="Elige el vehículo para tu viaje"
          description="Unidades revisadas y listas para entrega inmediata."
        />

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {VEHICLES.map((vehicle, index) => (
            <Reveal key={vehicle.id} delay={index * 100} threshold={0.1}>
              <VehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
