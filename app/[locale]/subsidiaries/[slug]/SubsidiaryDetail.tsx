'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import type { Subsidiary } from '@/types'
import SubsidiaryCard from '@/components/cards/SubsidiaryCard'

interface SubsidiaryDetailProps {
  subsidiary: Subsidiary
  relatedCompanies: Subsidiary[]
  locale: string
}

function coverSrc(sub: Subsidiary): string {
  return sub.coverImageUrl ?? sub.logoUrl
}

export default function SubsidiaryDetail({ subsidiary, relatedCompanies, locale }: SubsidiaryDetailProps) {
  const lang = locale as 'en' | 'ar'
  const name = subsidiary.name[lang]
  const img = coverSrc(subsidiary)
  const tagline = subsidiary.tagline?.[lang]
  const bodyText = subsidiary.body?.[lang] ?? subsidiary.description[lang]
  const paragraphs = bodyText
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
  const features = subsidiary.highlights[lang]

  const backLabel =
    locale === 'ar' ? 'العودة إلى الشركات' : 'Back to Companies'
  const featuresTitle = locale === 'ar' ? 'المميزات' : 'Highlights'

  return (
    <>
      <section className="relative min-h-[min(52vh,420px)] pt-16">
        <div className="absolute inset-0">
          <Image
            src={img}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,12,10,0.72)_0%,rgba(13,12,10,0.35)_42%,rgba(13,12,10,0.82)_100%)]"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pb-12 pt-6 lg:px-10 lg:pb-14 lg:pt-8">
          <Link
            href={`/${locale}/subsidiaries`}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/25 bg-black/25 px-3 py-2 text-[0.8rem] font-medium text-white backdrop-blur-sm transition-colors hover:border-[#C09040]/55 hover:bg-black/35"
          >
            <span className="rtl:rotate-180" aria-hidden>
              ‹
            </span>
            {backLabel}
          </Link>
          <div className="mt-10 lg:mt-14">
            {tagline && (
              <p className="text-[0.95rem] font-medium leading-snug text-[#D4B56A] md:text-[1rem] lg:max-w-2xl">
                {tagline}
              </p>
            )}
            <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[2.65rem]">
              {name}
            </h1>
          </div>
        </div>
      </section>

      <section
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className="relative z-10 -mt-6 bg-[#FAF8F4] pb-16 pt-10 lg:-mt-8 lg:pb-24 lg:pt-14"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_12px_50px_-24px_rgba(13,12,10,0.2)] ring-1 ring-black/[0.04]"
          >
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              <div className="space-y-[1.1rem] px-8 py-9 text-start lg:col-span-7 lg:p-11 lg:pe-10 lg:ps-11">
                {paragraphs.map((para, idx) => (
                  <motion.p
                    key={`${subsidiary.id}-p-${idx}`}
                    variants={fadeUp}
                    className="text-[0.975rem] leading-[1.9] text-brand-gray-dark md:text-[1.035rem]"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
              <div className="border-t border-stone-200/80 bg-stone-100/70 lg:col-span-5 lg:border-s lg:border-t-0 lg:border-stone-200/80 rtl:border-s-0 rtl:border-e">
                <div className="relative mx-auto aspect-[5/6] max-h-[300px] w-full overflow-hidden lg:sticky lg:top-28 lg:m-0 lg:aspect-auto lg:max-h-none lg:min-h-[340px]">
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {features.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 lg:mt-14"
            >
              <div className="overflow-hidden rounded-2xl border border-stone-200/95 bg-white px-8 py-9 shadow-[0_10px_44px_-22px_rgba(13,12,10,0.16)] ring-1 ring-black/[0.035] lg:px-11 lg:py-11">
                <h2 className="font-display text-xl font-semibold tracking-tight text-brand-dark md:text-2xl">
                  {featuresTitle}
                </h2>
                <div
                  className="mt-[0.875rem] h-[2px] w-12 rounded-[1px] bg-[#C09040]"
                  aria-hidden
                />
                <ul className="mt-[1.5rem] space-y-[0.8rem] text-start lg:columns-2 lg:gap-x-12">
                  {features.map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-[0.8rem] inline-block w-full break-inside-avoid text-[0.93rem] leading-relaxed text-brand-gray-dark lg:leading-[1.8]"
                    >
                      <span className="ms-0 inline-flex gap-3">
                        <span
                          className="mt-[0.58em] h-1 w-6 shrink-0 rounded-full bg-[#C09040]/85"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {subsidiary.website && (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-10 text-start">
              <a
                href={subsidiary.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#C09040]/50 px-5 py-3 text-[0.9rem] font-medium text-[#8B6224] underline-offset-4 transition-colors hover:border-[#C09040] hover:bg-[#C09040]/08"
              >
                {locale === 'ar' ? 'زيارة الموقع' : 'Visit website'} ↗
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {relatedCompanies.length > 0 && (
        <section className="bg-brand-offwhite py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="font-heading text-2xl font-semibold text-brand-dark">
                {locale === 'ar' ? 'شركات ذات صلة' : 'Related Companies'}
              </h2>
              <div className="mt-3 flex justify-start gap-2">
                <span className="block h-0.5 w-8 bg-[#C09040]" />
                <span className="block h-0.5 w-2 bg-[#C09040]" />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {relatedCompanies.slice(0, 3).map((sub) => (
                <SubsidiaryCard key={sub.id} subsidiary={sub} locale={locale} />
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
