'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import PageBanner from '@/components/layout/PageBanner'

export default function SectorsContent() {
  const locale = useLocale()
  const [activeId, setActiveId] = useState<string | null>(null)
  const isRtl = locale === 'ar'

  const scrollTo = (slug: string) => {
    setActiveId(slug)
    const el = document.getElementById(slug)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
            {locale === 'ar' ? 'قطاعاتنا' : 'Our Sectors'}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
          >
            {locale === 'ar'
              ? 'ستة ركائز للنمو تقود رؤية مجموعة نجاح إلى الأمام.'
              : 'Six pillars of growth driving the SUCCESS vision forward.'}
          </motion.p>
        </motion.div>
      </PageBanner>

      {/* Mobile pill bar */}
      <div className="sticky top-16 z-30 overflow-x-auto border-b border-brand-gray/10 bg-brand-offwhite lg:hidden">
        <div className="flex gap-2 px-6 py-3">
          {sectors.map((sector) => (
            <button
              key={sector.slug}
              onClick={() => scrollTo(sector.slug)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-medium transition-colors ${
                activeId === sector.slug
                  ? 'bg-brand-gold text-white'
                  : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
              }`}
            >
              {locale === 'ar' ? sector.nameAr : sector.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Sector details */}
      <section className="py-16 lg:py-[5.25rem]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-12 lg:gap-14"
          >
            {sectors.map((sector) => {
              const heading = locale === 'ar' ? sector.nameAr : sector.nameEn
              const subtitle = locale === 'ar' ? sector.descAr : sector.descEn
              const body = locale === 'ar' ? sector.longDescAr : sector.longDescEn
              const paragraphs = (body ?? '')
                .split(/\n\n+/)
                .map((p) => p.trim())
                .filter(Boolean)

              return (
                <motion.article
                  key={sector.id}
                  id={sector.slug}
                  variants={fadeUp}
                  dir={isRtl ? 'rtl' : 'ltr'}
                  className="scroll-mt-32 overflow-hidden rounded-2xl border border-stone-200/95 bg-white shadow-[0_10px_50px_-18px_rgba(13,12,10,0.18)] ring-1 ring-black/[0.035]"
                >
                  <div className="border-b border-stone-200/70 px-8 pb-8 pt-9 lg:px-11 lg:pb-10 lg:pt-10">
                    <h2 className="font-display text-[1.35rem] font-semibold tracking-tight text-brand-dark md:text-[1.625rem] md:leading-snug lg:text-[1.875rem]">
                      {heading}
                    </h2>
                    <div
                      className="mt-[1.125rem] h-[2px] w-12 rounded-[1px]"
                      style={{ backgroundColor: sector.color ?? '#C09040' }}
                    />
                  </div>

                  <div className="flex flex-col gap-9 px-8 py-9 lg:flex-row lg:items-stretch lg:gap-11 lg:px-11 lg:py-10 xl:gap-12">
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.9375rem] font-medium leading-snug text-[#C09040] md:text-base lg:leading-relaxed">
                        {subtitle}
                      </p>
                      <div className="mt-[1.35rem] space-y-[1.15rem]">
                        {paragraphs.map((para, idx) => (
                          <p
                            key={`${sector.id}-${idx}`}
                            className="text-[0.9625rem] leading-[1.9] text-brand-gray-dark md:text-[1rem] md:leading-[1.88]"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mx-auto shrink-0 lg:mx-0 lg:w-[clamp(208px,32%,268px)]">
                      <div className="relative overflow-hidden rounded-xl border border-stone-200/80 bg-stone-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ring-1 ring-black/[0.04]">
                        <div className="relative mx-auto aspect-[5/6] max-h-[220px] w-full max-w-[220px] sm:max-h-[236px] sm:max-w-[236px] lg:mx-0 lg:max-h-none lg:max-w-none lg:aspect-auto lg:h-[clamp(216px,32vh,268px)]">
                          <Image
                            src={
                              sector.image ??
                              sector.imageUrl ??
                              '/images/sectors/incubation.jpg'
                            }
                            alt={heading || 'Sector'}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 268px, 236px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}
