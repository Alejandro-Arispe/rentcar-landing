import { WHY_US } from '../../constants/whyUs'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'

export default function WhyUsSection() {
  return (
    <section className="section bg-brand-900 text-white">
      <Container>
        <SectionTitle
          eyebrow="Nuestro compromiso"
          title="¿Por qué elegir RentCar?"
          description="Confianza construida en cada entrega."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, index) => (
            <Reveal key={item.id} delay={index * 80} threshold={0.2}>
              <div className="border-l-2 border-brand-500 pl-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
