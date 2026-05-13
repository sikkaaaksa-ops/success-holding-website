'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { staggerContainer } from '@/lib/motionVariants'
import { subsidiaries } from '@/data/subsidiaries'
import SectionHeader from '@/components/ui/SectionHeader'
import SubsidiaryCard from '@/components/cards/SubsidiaryCard'
import Button from '@/components/ui/Button'

export default function SubsidiariesSection() {
  const t = useTranslations('subsidiariesSection')
  const locale = useLocale()
  const displayed = subsidiaries.slice(0, 6)

  return (
    <section className="py-20 lg:py-28">
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
          {displayed.map((sub) => (
            <SubsidiaryCard key={sub.id} subsidiary={sub} locale={locale} />
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Button href={`/${locale}/subsidiaries`} variant="primary">
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}
