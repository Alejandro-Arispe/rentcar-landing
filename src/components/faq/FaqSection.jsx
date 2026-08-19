import { FAQ_ITEMS } from '../../constants/faq'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import FaqItem from './FaqItem'

export default function FaqSection() {
  return (
    <section id="preguntas-frecuentes" className="section">
      <Container className="max-w-3xl">
        <SectionTitle align="center" eyebrow="Ayuda" title="Preguntas frecuentes" />

        <div className="mt-10">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
