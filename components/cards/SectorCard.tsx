'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { Sector } from '@/types'

interface SectorCardProps {
  sector: Sector
  locale: string
  index: number
}

function sectorTitle(sector: Sector, locale: string, t: (key: string) => string) {
  if (locale === 'ar' && sector.nameAr) return sector.nameAr
  if (sector.nameEn) return sector.nameEn
  return t(sector.titleKey.replace('sectors.', ''))
}

function sectorDescription(
  sector: Sector,
  locale: string,
  t: (key: string) => string,
) {
  if (locale === 'ar' && sector.descAr) return sector.descAr
  if (sector.descEn) return sector.descEn
  return t(sector.descriptionKey.replace('sectors.', ''))
}

export default function SectorCard({ sector, locale, index }: SectorCardProps) {
  const t = useTranslations('sectors')
  const imgSrc = sector.image || sector.imageUrl || ''
  const displayIndex = String(index + 1).padStart(2, '0')
  const title = sectorTitle(sector, locale, t)
  const description = sectorDescription(sector, locale, t)
  const ctaLabel = locale === 'ar' ? 'عرض القطاع' : 'View Sector'

  return (
    <Link
      href={`/${locale}/sectors#${sector.slug}`}
      className="group relative block h-full min-h-0 overflow-hidden rounded-xl bg-brand-charcoal"
    >
        {imgSrc ? (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={imgSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
            />
          </div>
        ) : null}

        <div
          className="pointer-events-none absolute inset-0 bg-black/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35"
          aria-hidden
        />

        <div className="absolute start-4 top-4 z-20">
          <span
            className="inline-flex min-w-[2.25rem] items-center justify-center rounded-md px-2 py-1 font-heading text-sm font-semibold tabular-nums text-white"
            style={{ backgroundColor: '#C09040' }}
          >
            {displayIndex}
          </span>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end p-4 text-start md:p-5 lg:p-6">
          <h3 className="font-heading text-lg font-semibold text-white md:text-xl lg:text-2xl">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
            {description}
          </p>
          <span className="mt-3 inline-flex text-sm font-medium text-brand-gold transition-colors group-hover:text-white">
            {ctaLabel}
            <span
              className="ms-1 inline transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              aria-hidden
            >
              →
            </span>
          </span>
        </div>
    </Link>
  )
}
