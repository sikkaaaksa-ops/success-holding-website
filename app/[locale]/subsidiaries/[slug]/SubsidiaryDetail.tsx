'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { useLocale } from 'next-intl'
import type { Subsidiary } from '@/types'
import SubsidiaryCard from '@/components/cards/SubsidiaryCard'

interface SubsidiaryDetailProps {
  subsidiary: Subsidiary
  relatedCompanies: Subsidiary[]
  locale: string
}

export default function SubsidiaryDetail({ subsidiary, relatedCompanies, locale }: SubsidiaryDetailProps) {
  const lang = locale as 'en' | 'ar'
  const name = subsidiary.name[lang]
  const description = subsidiary.description[lang]
  const highlights = subsidiary.highlights[lang]
  const BackArrow = locale === 'ar' ? ArrowRight : ArrowLeft

  return (
    <>
      {/* Cover image area */}
      <section className="relative flex min-h-[35vh] items-end bg-brand-charcoal pt-16">
        <div className="absolute inset-0 flex items-center justify-center bg-brand-beige/5">
          <span className="text-sm uppercase tracking-widest text-brand-gray/40">
            {locale === 'ar' ? 'صورة الغلاف' : 'Cover Image'}
          </span>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 lg:px-12">
          <Link
            href={`/${locale}/subsidiaries`}
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-brand-gold transition-colors mb-4"
          >
            <BackArrow size={16} />
            {locale === 'ar' ? 'العودة إلى الشركات' : 'Back to Companies'}
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-brand-offwhite px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-gold">
                {subsidiary.sector}
              </span>
              <h1 className="mt-4 font-heading text-3xl font-semibold text-brand-dark md:text-5xl">
                {name}
              </h1>
              {subsidiary.founded && (
                <p className="mt-2 text-sm text-brand-gray-dark">
                  {locale === 'ar' ? `تأسست عام ${subsidiary.founded}` : `Founded ${subsidiary.founded}`}
                </p>
              )}
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeUp} className="mt-8 max-w-3xl">
              <p className="text-lg leading-relaxed text-brand-gray-dark">
                {description}
              </p>
            </motion.div>

            {/* Highlights */}
            {highlights.length > 0 && (
              <motion.div variants={fadeUp} className="mt-12">
                <h2 className="font-heading text-xl font-semibold text-brand-dark">
                  {locale === 'ar' ? 'أبرز الإنجازات' : 'Key Highlights'}
                </h2>
                <ul className="mt-4 space-y-3">
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 block h-2 w-2 shrink-0 bg-brand-gold" />
                      <span className="text-base text-brand-gray-dark">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Website link */}
            {subsidiary.website && (
              <motion.div variants={fadeUp} className="mt-8">
                <a
                  href={subsidiary.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-gold-light transition-colors"
                >
                  <ExternalLink size={16} />
                  {locale === 'ar' ? 'زيارة الموقع' : 'Visit Website'}
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Related Companies */}
      {relatedCompanies.length > 0 && (
        <section className="bg-brand-offwhite py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
              <h2 className="font-heading text-2xl font-semibold text-brand-dark">
                {locale === 'ar' ? 'شركات ذات صلة' : 'Related Companies'}
              </h2>
              <div className="mt-3 flex items-center gap-2">
                <span className="block h-0.5 w-8 bg-brand-gold" />
                <span className="block h-0.5 w-2 bg-brand-gold" />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {relatedCompanies.map((sub) => (
                <SubsidiaryCard key={sub.id} subsidiary={sub} locale={locale} />
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
