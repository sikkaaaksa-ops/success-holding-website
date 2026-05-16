'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { subsidiaries } from '@/data/subsidiaries'
import SubsidiaryCard from '@/components/cards/SubsidiaryCard'
import PageBanner from '@/components/layout/PageBanner'

export default function SubsidiariesContent() {
  const st = useTranslations('subsidiariesSection')
  const locale = useLocale()

  return (
    <>
      {/* Page Hero */}
      <PageBanner className="min-h-[40vh] items-center justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center lg:px-12"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold text-white md:text-5xl"
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
      </PageBanner>

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
            {subsidiaries.map((sub) => (
              <SubsidiaryCard key={sub.id} subsidiary={sub} locale={locale} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
