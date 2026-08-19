import { WHATSAPP_LINK } from '../../constants/contact'
import Button from '../common/Button'

export default function VehicleCard({ vehicle }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className="group overflow-hidden rounded-xl border border-neutral-100 bg-white transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={vehicle.image}
          alt={vehicle.model}
          itemProp="image"
          loading="lazy"
          decoding="async"
          width="640"
          height="480"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 itemProp="name" className="text-lg font-semibold text-neutral-900">{vehicle.model}</h3>
        <p className="mt-1 text-sm text-neutral-500">{vehicle.type}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2 text-xs text-neutral-700">
          <div>
            <dt className="font-medium text-neutral-500">Transmisión</dt>
            <dd>{vehicle.transmission}</dd>
          </div>
          <div>
            <dt className="font-medium text-neutral-500">Combustible</dt>
            <dd>{vehicle.fuel}</dd>
          </div>
          <div>
            <dt className="font-medium text-neutral-500">Capacidad</dt>
            <dd>{vehicle.capacity}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm text-neutral-700">{vehicle.description}</p>

        <Button
          as="a"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="mt-6 w-full"
        >
          Consultar disponibilidad
        </Button>
      </div>
    </article>
  )
}
