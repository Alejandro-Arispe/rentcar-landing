import { useTranslation } from 'react-i18next'
import { NAV_LINKS } from '../../constants/navigation'

export default function NavLinks({ className = '', onNavigate }) {
  const { t } = useTranslation()

  return (
    <ul className={`flex gap-8 ${className}`}>
      {NAV_LINKS.map((link) => (
        <li key={link.key}>
          <a
            href={`${link.href}${link.hash}`}
            onClick={onNavigate}
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-700"
          >
            {t(`nav.${link.key}`)}
          </a>
        </li>
      ))}
    </ul>
  )
}
