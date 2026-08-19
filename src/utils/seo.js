export const SITE_CONFIG = {
  siteName: 'RentCar',
  baseUrl: 'https://rentcar-scz.vercel.app',
  defaultTitle: 'RentCar | Alquiler de vehículos en Santa Cruz de la Sierra, Bolivia',
  defaultDescription:
    'Alquiler de vehículos seguros y confiables en Santa Cruz de la Sierra. Camionetas y sedanes para clientes particulares, turistas y empresas. Reserva por WhatsApp.',
  defaultImage: '/images/hero.jpg',
  locale: 'es_BO',
  twitterHandle: '@rentcar_scz',
}

export function buildMeta({ title, description, path = '/', image } = {}) {
  return {
    title: title ? `${title} | ${SITE_CONFIG.siteName}` : SITE_CONFIG.defaultTitle,
    description: description ?? SITE_CONFIG.defaultDescription,
    url: `${SITE_CONFIG.baseUrl}${path}`,
    image: `${SITE_CONFIG.baseUrl}${image ?? SITE_CONFIG.defaultImage}`,
  }
}
