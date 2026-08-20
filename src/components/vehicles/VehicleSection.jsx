import { useRef, useState } from 'react'
import { VEHICLES } from '../../constants/vehicles'
import Container from '../common/Container'
import SectionTitle from '../common/SectionTitle'
import Reveal from '../common/Reveal'
import VehicleCard from './VehicleCard'

function ArrowIcon({ direction = 'left' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${direction === 'right' ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

const SWIPE_THRESHOLD = 50

export default function VehicleSection() {
  const [index, setIndex] = useState(0)
  const total = VEHICLES.length
  const touchStartX = useRef(null)

  const goTo = (i) => setIndex((i + total) % total)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > SWIPE_THRESHOLD) prev()
    else if (delta < -SWIPE_THRESHOLD) next()
    touchStartX.current = null
  }

  return (
    <section id="vehiculos" className="section">
      <Container>
        <SectionTitle
          eyebrow="Flota disponible"
          title="Elige el vehículo para tu viaje"
          description="Unidades revisadas y listas para entrega inmediata."
        />

        <Reveal className="mt-10 sm:mt-12" threshold={0.1}>
          <div className="relative mx-auto max-w-md sm:max-w-lg">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {VEHICLES.map((vehicle) => (
                  <div key={vehicle.id} className="w-full flex-shrink-0">
                    <VehicleCard vehicle={vehicle} />
                  </div>
                ))}
              </div>
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Vehículo anterior"
                  onClick={prev}
                  className="absolute left-2 top-[35%] flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-neutral-800 shadow-md transition-colors hover:bg-white hover:text-brand-700"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  aria-label="Siguiente vehículo"
                  onClick={next}
                  className="absolute right-2 top-[35%] flex -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-neutral-800 shadow-md transition-colors hover:bg-white hover:text-brand-700"
                >
                  <ArrowIcon direction="right" />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {VEHICLES.map((vehicle, i) => (
                <button
                  key={vehicle.id}
                  type="button"
                  aria-label={`Ver ${vehicle.model}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-brand-700' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
