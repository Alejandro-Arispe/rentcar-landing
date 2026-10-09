import { BRANDS } from '../../constants/brands'
import Container from '../common/Container'

export default function BrandsSection() {
  return (
    <section className="section-tight border-y border-neutral-100 bg-neutral-50">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-neutral-500">
          Trabajamos con flas principales marcas
        </p>

        <div className="mt-8 grid grid-cols-3 items-center gap-6 sm:grid-cols-4 sm:gap-8 lg:grid-cols-8">
          {BRANDS.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              decoding="async"
              width="120"
              height="32"
              className="mx-auto h-8 w-auto grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
