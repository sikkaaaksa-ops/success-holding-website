'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, slideInLeft, slideInRight } from '@/lib/motionVariants'
import Button from '@/components/ui/Button'

export default function AboutSnippet() {
  const t = useTranslations('aboutSnippet')
  const locale = useLocale()

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">
              {t('label')}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-dark md:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray-dark">
              {t('description')}
            </p>
            <div className="mt-8">
              <Button href={`/${locale}/about`} variant="primary">
                {t('cta')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="flex aspect-[4/3] w-full items-center justify-center bg-brand-beige shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <span className="text-sm uppercase tracking-widest text-brand-gray">
                {locale === 'ar' ? 'صورة المجموعة' : 'Group Image'}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
