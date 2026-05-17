'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { subsidiaries } from '@/data/subsidiaries'
import type { Subsidiary } from '@/types'

function cardImageUrl(sub: Subsidiary): string | null {
  return sub.coverImageUrl ?? sub.logoUrl ?? null
}

function cardTeaser(sub: Subsidiary, locale: string): string {
  const lang = locale as 'en' | 'ar'
  return sub.cardTeaser?.[lang] ?? sub.description[lang]
}

interface CompanyCardProps {
  subsidiary: Subsidiary
  locale: string
}

function CompanyCard({ subsidiary, locale }: CompanyCardProps) {
  const lang = locale as 'en' | 'ar'
  const name = subsidiary.name[lang]
  const teaser = cardTeaser(subsidiary, locale)
  const imgSrc = cardImageUrl(subsidiary)
  const detailsLabel = locale === 'ar' ? 'التفاصيل' : 'Details'

  return (
    <motion.div variants={fadeUp} className="overflow-visible">
      <Link
        href={`/${locale}/subsidiaries/${subsidiary.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_40px_-18px_rgba(13,12,10,0.14)] ring-1 ring-black/[0.035] transition-shadow duration-300 hover:shadow-[0_14px_48px_-16px_rgba(13,12,10,0.2)]"
      >
        <div className="relative h-[178px] w-full overflow-hidden">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-[#EDE8DF]">
              <span className="font-heading text-xl font-semibold text-[#C09040]/40">
                {name
                  .split(/\s/)
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 3)}
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col px-6 pb-6 pt-6 text-start">
          <h3 className="font-heading text-[1.05rem] font-semibold leading-snug text-brand-dark md:text-[1.125rem]">
            {name}
          </h3>
          <p className="mt-3 line-clamp-2 flex-1 text-[0.9rem] leading-relaxed text-brand-gray-dark">
            {teaser}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.82rem] font-medium tracking-wide text-[#C09040] transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
            {detailsLabel}
            <span className="text-base rtl:rotate-180" aria-hidden>
              ›
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function SubsidiariesSection() {
  const t = useTranslations('subsidiariesSection')
  const locale = useLocale()

  return (
    <section className="bg-[#F5F0E8] py-20">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl text-brand-dark lg:text-4xl">
            {t('title')}
          </h2>
          <div
            className="mx-auto mb-4 h-[3px] w-12 bg-[#C09040]"
            aria-hidden
          />
          <p className="mx-auto max-w-xl text-base text-brand-gray-dark">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {subsidiaries.slice(0, 4).map((sub) => (
            <CompanyCard key={sub.id} subsidiary={sub} locale={locale} />
          ))}
        </motion.div>

        <div
          className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {subsidiaries.slice(4).map((sub) => (
            <CompanyCard key={sub.id} subsidiary={sub} locale={locale} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/subsidiaries`}
            className="inline-flex items-center justify-center bg-[#C09040] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#A88038]"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  )
}
