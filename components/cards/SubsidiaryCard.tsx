'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp } from '@/lib/motionVariants'
import type { Subsidiary } from '@/types'

interface SubsidiaryCardProps {
  subsidiary: Subsidiary
  locale: string
}

export default function SubsidiaryCard({ subsidiary, locale }: SubsidiaryCardProps) {
  const name = subsidiary.name[locale as 'en' | 'ar']
  const description = subsidiary.description[locale as 'en' | 'ar']

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/${locale}/subsidiaries/${subsidiary.slug}`}
        className="group block bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
      >
        <div className="flex aspect-[16/9] items-center justify-center bg-brand-beige">
          <span className="text-2xl font-heading font-semibold text-brand-gray-dark/40">
            {name.split(' ').map(w => w[0]).join('').slice(0, 3)}
          </span>
        </div>

        <div className="p-6">
          <span className="mb-2 inline-block rounded-none bg-brand-offwhite px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-brand-gold">
            {subsidiary.sector}
          </span>
          <h3 className="font-heading text-lg font-semibold text-brand-dark">
            {name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-gray-dark">
            {description}
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-brand-gold transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {locale === 'ar' ? '← عرض التفاصيل' : 'View Details →'}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
