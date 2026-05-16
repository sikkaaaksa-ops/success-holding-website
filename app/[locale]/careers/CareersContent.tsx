'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { ChevronDown, Users, Rocket, Heart, MapPin, Briefcase } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { careers } from '@/data/careers'
import Button from '@/components/ui/Button'
import PageBanner from '@/components/layout/PageBanner'

const cultureValues = [
  { icon: Rocket, key: 'growth' },
  { icon: Users, key: 'teamwork' },
  { icon: Heart, key: 'impact' },
]

export default function CareersContent() {
  const t = useTranslations('careers')
  const locale = useLocale()
  const lang = locale as 'en' | 'ar'
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      {/* Page Hero */}
      <PageBanner className="min-h-[50vh] items-center justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center lg:px-12"
        >
          <motion.p
            variants={fadeUp}
            className="font-heading text-sm uppercase tracking-[0.3em] text-brand-gold"
          >
            {t('hero.label')}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>
      </PageBanner>

      {/* Culture Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14 text-center">
            <h2 className="font-display text-3xl font-semibold text-brand-dark md:text-4xl">
              {t('culture.title')}
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="block h-0.5 w-8 bg-brand-gold" />
              <span className="block h-0.5 w-2 bg-brand-gold" />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {cultureValues.map((v) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.key}
                  variants={fadeUp}
                  className="bg-white p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                >
                  <Icon className="mx-auto mb-4 text-brand-gold" size={32} />
                  <h3 className="font-heading text-lg font-semibold text-brand-dark">
                    {t(`culture.${v.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-dark">
                    {t(`culture.${v.key}.description`)}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-brand-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14 text-center">
            <h2 className="font-display text-3xl font-semibold text-brand-dark md:text-4xl">
              {t('positions.title')}
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="block h-0.5 w-8 bg-brand-gold" />
              <span className="block h-0.5 w-2 bg-brand-gold" />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {careers.map((career) => {
              const isOpen = openId === career.id
              return (
                <motion.div key={career.id} variants={fadeUp} className="bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
                  <button
                    onClick={() => toggle(career.id)}
                    className="flex w-full items-center justify-between p-6 text-start transition-colors hover:bg-brand-beige/50"
                  >
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-brand-dark">
                        {career.title[lang]}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-brand-gray-dark">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} className="text-brand-gold" />
                          {career.department[lang]}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-brand-gold" />
                          {career.location[lang]}
                        </span>
                        <span className="bg-brand-offwhite px-2 py-0.5 text-xs font-medium">
                          {career.type[lang]}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-gray-dark transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-brand-gray/10 px-6 pb-6 pt-4">
                          <p className="text-base leading-relaxed text-brand-gray-dark">
                            {career.description[lang]}
                          </p>
                          <div className="mt-6">
                            <Button
                              href={`/${locale}/contact?subject=Careers&position=${encodeURIComponent(career.title.en)}`}
                              variant="primary"
                              size="sm"
                            >
                              {locale === 'ar' ? 'تقدم الآن' : 'Apply Now'}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}
