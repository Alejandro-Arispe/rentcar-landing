import { HOW_IT_WORKS } from '../../constants/howItWorks'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import StepCard from './StepCard'

export default function HowItWorksSection() {
  return (
    <section className="section">
      <Container>
        <SectionTitle align="center" eyebrow="Proceso" title="Cómo funciona" />

        <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:gap-6">
          {HOW_IT_WORKS.map((step, index) => (
            <Reveal key={step.step} delay={index * 100} threshold={0.2} className="flex flex-1">
              <StepCard step={step} isLast={index === HOW_IT_WORKS.length - 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
