'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { partners } from '@/data/partners'
import PartnerLogoGrid from '@/components/ui/PartnerLogoGrid'

export default function PartnersContent() {
  const t = useTranslations('partnersSection')
  const locale = useLocale()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = Array.from(new Set(partners.map((p) => p.category).filter(Boolean))) as string[]

  const filtered =
    activeCategory === 'all'
      ? partners
      : partners.filter((p) => p.category === activeCategory)

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
            {t('title')}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Category filter */}
      <div className="bg-brand-offwhite border-b border-brand-gray/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex gap-2 overflow-x-auto py-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`whitespace-nowrap px-5 py-2 text-sm font-medium capitalize transition-colors ${
                activeCategory === 'all'
                  ? 'bg-brand-gold text-white'
                  : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
              }`}
            >
              {locale === 'ar' ? 'الكل' : 'All'}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 text-sm font-medium capitalize transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-white'
                    : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <PartnerLogoGrid partners={filtered} />
        </div>
      </section>
    </>
  )
}
