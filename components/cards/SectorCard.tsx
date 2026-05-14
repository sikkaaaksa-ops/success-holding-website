'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp } from '@/lib/motionVariants'
import type { Sector } from '@/types'

interface SectorCardProps {
  sector: Sector
  locale: string
  className?: string
}

export default function SectorCard({ sector, locale, className }: SectorCardProps) {
  const t = useTranslations('sectors')
  const imgSrc = sector.image || sector.imageUrl || ''

  return (
    <motion.div variants={fadeUp} className={className}>
      <Link
        href={`/${locale}/subsidiaries?sector=${sector.id}`}
        className="group relative block h-full overflow-hidden bg-brand-charcoal"
      >
        {imgSrc && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={imgSrc}
              alt={sector.nameEn || t(sector.titleKey.replace('sectors.', ''))}
              fill
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
            {locale === 'ar' && sector.nameAr ? sector.nameAr : (sector.nameEn || t(sector.titleKey.replace('sectors.', '')))}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {locale === 'ar' && sector.descAr ? sector.descAr : (sector.descEn || t(sector.descriptionKey.replace('sectors.', '')))}
          </p>
          <span className="sector-read-more">
            {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
