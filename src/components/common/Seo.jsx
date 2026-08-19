import { Helmet } from 'react-helmet-async'
import { CONTACT_INFO } from '../../constants/contact'
import { SITE_CONFIG, buildMeta } from '../../utils/seo'

export default function Seo({ title, description, path, image }) {
  const meta = buildMeta({ title, description, path, image })

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: SITE_CONFIG.siteName,
    image: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultImage}`,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.zone,
      addressCountry: 'BO',
    },
    openingHours: 'Mo-Su 08:00-20:00',
    url: SITE_CONFIG.baseUrl,
  }

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
