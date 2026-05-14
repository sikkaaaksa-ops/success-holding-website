'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import Button from '@/components/ui/Button'
import { heroContent } from '@/data/siteContent'

const HERO_IMAGE = "" // Set to "/images/hero/hero.jpg" after uploading image

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="hero-bg absolute inset-0 z-0"
        style={HERO_IMAGE ? { ["--hero-image" as string]: `url("${HERO_IMAGE}")` } : undefined}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,151,58,0.08)_0%,transparent_70%)]" aria-hidden="true" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-12"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-[0.3em] text-brand-gold"
        >
          {heroContent.labelEn}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-heading text-5xl font-semibold leading-tight text-white md:text-7xl"
        >
          {t('tagline')}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg text-gray-300"
        >
          {t('subtext')}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={`/${locale}/sectors`} variant="primary" size="lg">
            {t('ctaExplore')}
          </Button>
          <Button href={`/${locale}/about`} variant="outline" size="lg">
            {t('ctaAbout')}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}
