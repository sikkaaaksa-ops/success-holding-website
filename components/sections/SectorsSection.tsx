'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import SectionHeader from '@/components/ui/SectionHeader'
import SectorCard from '@/components/cards/SectorCard'

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
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {sectors.map((sector) => (
            <SectorCard key={sector.id} sector={sector} locale={locale} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
