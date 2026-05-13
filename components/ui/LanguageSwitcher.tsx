'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-brand-gold transition-colors duration-200"
      aria-label="Switch language"
    >
      <Globe size={16} />
      <span>{locale === 'en' ? 'العربية' : 'English'}</span>
    </button>
  )
}
