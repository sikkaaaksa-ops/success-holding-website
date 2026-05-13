'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Target, Eye, Shield, Users, Lightbulb, Heart } from 'lucide-react'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/motionVariants'

const values = [
  { icon: Shield, key: 'integrity' },
  { icon: Lightbulb, key: 'innovation' },
  { icon: Users, key: 'collaboration' },
  { icon: Heart, key: 'excellence' },
]

const leaders = [
  { nameKey: 'ceo.name', roleKey: 'ceo.role' },
  { nameKey: 'coo.name', roleKey: 'coo.role' },
  { nameKey: 'cfo.name', roleKey: 'cfo.role' },
  { nameKey: 'cto.name', roleKey: 'cto.role' },
]

export default function AboutContent() {
  const t = useTranslations('about')
  const locale = useLocale()

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-brand-charcoal pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,151,58,0.06)_0%,transparent_70%)]" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center lg:px-12"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-semibold text-white md:text-6xl"
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
      </section>

      {/* Company Story */}
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
                {t('story.label')}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-brand-dark md:text-4xl">
                {t('story.title')}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-dark">
                {t('story.paragraph1')}
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-gray-dark">
                {t('story.paragraph2')}
              </p>
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
                  {locale === 'ar' ? 'صورة الشركة' : 'Company Image'}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-beige py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              className="bg-white p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            >
              <Eye className="mb-4 text-brand-gold" size={36} />
              <h3 className="font-heading text-2xl font-semibold text-brand-dark">
                {t('vision.title')}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-gray-dark">
                {t('vision.text')}
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-white p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            >
              <Target className="mb-4 text-brand-gold" size={36} />
              <h3 className="font-heading text-2xl font-semibold text-brand-dark">
                {t('mission.title')}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-gray-dark">
                {t('mission.text')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-semibold text-brand-dark md:text-4xl">
              {t('values.title')}
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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.key}
                  variants={fadeUp}
                  className="bg-white p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="mx-auto mb-4 text-brand-gold" size={32} />
                  <h4 className="font-heading text-lg font-semibold text-brand-dark">
                    {t(`values.${v.key}.title`)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-dark">
                    {t(`values.${v.key}.description`)}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-brand-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-semibold text-brand-dark md:text-4xl">
              {t('leadership.title')}
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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.nameKey}
                variants={fadeUp}
                className="bg-white p-6 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-beige">
                  <span className="text-sm font-medium text-brand-gray-dark">
                    {locale === 'ar' ? 'صورة' : 'Photo'}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-semibold text-brand-dark">
                  {t(`leadership.${leader.nameKey}`)}
                </h4>
                <p className="mt-1 text-sm text-brand-gold">
                  {t(`leadership.${leader.roleKey}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
