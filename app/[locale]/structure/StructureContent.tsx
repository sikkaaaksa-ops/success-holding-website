'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import GroupStructureDiagram from '@/components/sections/GroupStructureDiagram'
import Button from '@/components/ui/Button'

export default function StructureContent() {
  const t = useTranslations('groupStructure')
  const st = useTranslations('sectors')
  const locale = useLocale()

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

      {/* Diagram */}
      <GroupStructureDiagram />

      {/* Legend */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {sectors.map((sector) => (
              <motion.div
                key={sector.id}
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <span
                  className="block h-3 w-3"
                  style={{ backgroundColor: sector.color || '#B8973A' }}
                />
                <span className="text-sm text-brand-gray-dark">
                  {st(sector.titleKey)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <Button href={`/${locale}/subsidiaries`} variant="primary" size="lg">
            {locale === 'ar' ? 'استكشف شركاتنا ←' : 'Explore Our Companies →'}
          </Button>
        </div>
      </section>
    </>
  )
}
