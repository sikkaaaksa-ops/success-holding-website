'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import { subsidiaries } from '@/data/subsidiaries'
import SubsidiaryCard from '@/components/cards/SubsidiaryCard'

export default function SubsidiariesContent() {
  const t = useTranslations('sectors')
  const st = useTranslations('subsidiariesSection')
  const locale = useLocale()
  const [activeSector, setActiveSector] = useState<string>('all')

  const filtered =
    activeSector === 'all'
      ? subsidiaries
      : subsidiaries.filter((s) => s.sector === activeSector)

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-brand-charcoal pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,151,58,0.06)_0%,transparent_70%)]" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center lg:px-12"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-semibold text-white md:text-5xl"
          >
            {st('title')}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
          >
            {st('subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-brand-offwhite border-b border-brand-gray/10 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex gap-2 py-4">
            <button
              onClick={() => setActiveSector('all')}
              className={`whitespace-nowrap px-5 py-2 text-sm font-medium transition-colors ${
                activeSector === 'all'
                  ? 'bg-brand-gold text-white'
                  : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
              }`}
            >
              {locale === 'ar' ? 'الكل' : 'All'}
            </button>
            {sectors.map((sector) => (
              <button
                key={sector.slug}
                onClick={() => setActiveSector(sector.slug)}
                className={`whitespace-nowrap px-5 py-2 text-sm font-medium transition-colors ${
                  activeSector === sector.slug
                    ? 'bg-brand-gold text-white'
                    : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
                }`}
              >
                {t(sector.titleKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((sub) => (
              <SubsidiaryCard key={sub.id} subsidiary={sub} locale={locale} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-brand-gray-dark">
              {locale === 'ar' ? 'لا توجد شركات في هذا القطاع.' : 'No companies found in this sector.'}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
