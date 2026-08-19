import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { WHATSAPP_LINK } from '../../constants/contact'
import Container from '../common/Container'
import Button from '../common/Button'
import NavLinks from './NavLinks'

export default function Navbar() {
  const { t } = useTranslation()
  const scrolled = useScrollPosition()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/90 backdrop-blur'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-brand-900">
          RentCar
        </a>

        <NavLinks className="hidden lg:flex" />

        <Button
          as="a"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="hidden lg:inline-flex"
        >
          {t('nav.cta')}
        </Button>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menú</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-neutral-900" />
            <span className="h-0.5 w-6 bg-neutral-900" />
            <span className="h-0.5 w-6 bg-neutral-900" />
          </div>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-neutral-100 bg-white transition-all duration-300 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-6 py-6">
            <NavLinks className="flex-col gap-4" onNavigate={() => setOpen(false)} />
            <Button as="a" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" variant="primary">
              {t('nav.cta')}
            </Button>
          </Container>
        </div>
      </div>
    </header>
  )
}
