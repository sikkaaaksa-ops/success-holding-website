'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import SectionHeader from '@/components/ui/SectionHeader'
import SectorCard from '@/components/cards/SectorCard'

const GRID_SPANS: Record<number, string> = {
  0: 'col-span-12 md:col-span-8',
  1: 'col-span-12 md:col-span-4',
  2: 'col-span-12 md:col-span-4',
  3: 'col-span-12 md:col-span-4',
  4: 'col-span-12 md:col-span-4',
  5: 'col-span-12 md:col-span-4',
  6: 'col-span-12 md:col-span-8',
  7: 'col-span-12 md:col-span-8',
  8: 'col-span-12 md:col-span-4',
  9: 'col-span-12 md:col-span-6',
  10: 'col-span-12 md:col-span-6',
}

export default function SectorsSection() {
  const t = useTranslations('sectorsSection')
  const locale = useLocale()

  return (
    <section className="bg-brand-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-4"
          style={{ gridAutoRows: '280px' }}
        >
          {sectors.map((sector, i) => (
            <SectorCard
              key={sector.id}
              sector={sector}
              locale={locale}
              className={GRID_SPANS[i] || 'col-span-12 md:col-span-4'}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
