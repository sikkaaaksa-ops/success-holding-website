'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  Building2,
  Cpu,
  HardHat,
  Hotel,
  TrendingUp,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import { fadeUp } from '@/lib/motionVariants'
import type { Sector } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Cpu,
  HardHat,
  Hotel,
  TrendingUp,
  Truck,
}

interface SectorCardProps {
  sector: Sector
  locale: string
}

export default function SectorCard({ sector, locale }: SectorCardProps) {
  const t = useTranslations('sectors')
  const Icon = iconMap[sector.icon]

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/${locale}/subsidiaries?sector=${sector.id}`}
        className="group block bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-l-4 hover:border-brand-gold hover:translate-x-1 rtl:hover:-translate-x-1 rtl:hover:border-l-0 rtl:hover:border-r-4"
      >
        {Icon && <Icon className="mb-5 text-brand-gold" size={32} />}
        <h3 className="font-heading text-xl font-semibold text-brand-dark">
          {t(sector.titleKey.replace('sectors.', ''))}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-gray-dark">
          {t(sector.descriptionKey.replace('sectors.', ''))}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-brand-gold transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
          {locale === 'ar' ? '← استكشف' : 'Explore →'}
        </span>
      </Link>
    </motion.div>
  )
}
