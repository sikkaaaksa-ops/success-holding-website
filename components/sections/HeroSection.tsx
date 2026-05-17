'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import Button from '@/components/ui/Button'
import { heroContent, siteConfig } from '@/data/siteContent'

const DEFAULT_HERO_IMAGE = '/images/hero/success-hero.png'

/** Optional CMS fields (imagePath, cta hrefs) — read safely until added to siteContent types */
type HeroContentFields = typeof heroContent & {
  imagePath?: string
  cta1Href?: string
  cta2Href?: string
}

/**
 * Split headline (reference layout). Message keys `hero.tagline` / `hero.subtext` stay the source
 * for supporting copy; these lines match the reference emphasis pattern until CMS provides fields.
 */
const HEADLINE_BY_LOCALE = {
  en: { line1: 'We invest in opportunities', line2: 'to create lasting impact' },
  ar: { line1: 'نستثمر في الفرص', line2: 'لنصنع أثراً مستداماً' },
} as const

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const hero = heroContent as HeroContentFields
  const HERO_IMAGE = hero.imagePath?.trim()
  const heroUrl = (HERO_IMAGE || DEFAULT_HERO_IMAGE).replace(/'/g, "\\'")
  const cta1Href = hero.cta1Href?.trim() || `/${locale}/sectors`
  const cta2Href = hero.cta2Href?.trim() || `/${locale}/about`
  const headline = locale === 'ar' ? HEADLINE_BY_LOCALE.ar : HEADLINE_BY_LOCALE.en
  const eyebrow =
    locale === 'ar' ? heroContent.labelAr : heroContent.labelEn
  const gradientDir = locale === 'ar' ? 'to right' : 'to left'

  return (
    <section className="relative min-h-[100svh] md:min-h-screen overflow-hidden flex flex-col justify-end md:block">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${heroUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.80) 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          background: `linear-gradient(${gradientDir}, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.65) 100%)`,
        }}
        aria-hidden
      />

      {/* dir="ltr" keeps image visually left and content right regardless of document direction */}
      <div className="relative z-[10] min-h-screen">
        <div
          className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,47fr)_minmax(0,53fr)]"
          dir="ltr"
        >
          <div
            className="relative min-h-[50vh] w-full lg:min-h-screen"
            aria-hidden
          />

          <div
            className="relative flex flex-col justify-center bg-transparent px-[clamp(1.25rem,4vw,3.5rem)] pt-8 pb-16 md:py-16 lg:py-24 md:pt-0"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="relative w-fit min-w-0 max-w-[min(100%,540px)]">
                  <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="relative z-10 flex max-w-xl flex-col text-start pb-6 md:pb-52 mb-8 md:mb-0"
            >
            <motion.div variants={fadeUp}>
              <p className="font-heading text-[10px] md:text-[10.5px] uppercase tracking-[0.28em] text-brand-gold text-shadow-[0_1px_2px_rgba(0,0,0,0.85),0_2px_8px_rgba(0,0,0,0.55),0_0_20px_rgba(0,0,0,0.35)]">
                {eyebrow}
              </p>
              <p className="mt-2 font-heading text-[11px] uppercase tracking-[0.22em] text-brand-gold/65 text-shadow-[0_1px_2px_rgba(0,0,0,0.8),0_2px_8px_rgba(0,0,0,0.5),0_0_16px_rgba(0,0,0,0.3)]">
                {locale === 'ar' ? siteConfig.taglineAr : siteConfig.taglineEn}
              </p>
              <div
                className="mt-4 h-px w-14 bg-brand-gold"
                aria-hidden
              />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className={`mt-8 font-display text-[28px] md:text-[clamp(46px,6.8vw,96px)] font-semibold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.65),0_6px_28px_rgba(0,0,0,0.45),0_12px_48px_rgba(0,0,0,0.28)] ${
                locale === 'ar' ? 'leading-[1.22]' : 'leading-tight'
              }`}
            >
              <span style={{ display: 'block' }}>{headline.line1}</span>
              <span style={{ display: 'block' }} className="text-brand-gold">
                {headline.line2}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 font-body text-[12px] md:text-[clamp(14px,1.35vw,17px)] line-clamp-3 md:line-clamp-none max-w-full md:max-w-[480px] pb-4 md:pb-0 leading-relaxed text-white/85 text-shadow-[0_1px_2px_rgba(0,0,0,0.75),0_2px_10px_rgba(0,0,0,0.55),0_5px_24px_rgba(0,0,0,0.38)]"
            >
              {t('subtext')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col md:flex-row gap-3 w-full md:w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
            >
              <Button
                href={cta1Href}
                variant="primary"
                size="lg"
                className="w-full md:w-auto justify-center py-3 text-[12px] md:py-4 md:text-base !bg-gradient-to-b !from-brand-gold-light !to-brand-gold !text-white shadow-sm hover:!from-brand-gold-light/92 hover:!to-brand-gold/95"
              >
                {t('ctaExplore')}
              </Button>
              <Button
                href={cta2Href}
                variant="outline"
                size="lg"
                className="w-full md:w-auto justify-center py-3 text-[12px] md:py-4 md:text-base gap-2 !border-2 !border-white/35 !text-white hover:!border-brand-gold hover:!bg-white/5 hover:!text-brand-gold"
              >
                {t('ctaAbout')}
                <ChevronRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </Button>
            </motion.div>

          </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.55, ease: 'easeOut' }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          aria-hidden
        >
          <ChevronDown className="h-6 w-6 text-brand-gold/75" />
        </motion.div>
      </div>
    </section>
  )
}
