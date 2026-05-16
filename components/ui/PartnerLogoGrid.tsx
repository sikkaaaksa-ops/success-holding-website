'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { partners as allPartners } from '@/data/partners'
import type { Partner } from '@/types'

interface PartnerLogoGridProps {
  partners?: Partner[]
  limit?: number
  variant?: 'home' | 'marquee'
}

function GoldDiamondDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-6 flex items-center justify-center gap-3"
      aria-hidden
    >
      <span className="h-px w-10 bg-[#C09040]/70 sm:w-14" />
      <span className="text-[10px] leading-none text-[#C09040]">◆</span>
      <span className="h-px w-10 bg-[#C09040]/70 sm:w-14" />
    </motion.div>
  )
}

function LogoCard({ partner }: { partner: Partner }) {
  const blendStyle = partner.hasBg
    ? { mixBlendMode: 'multiply' as const }
    : partner.hasDarkBg
      ? { mixBlendMode: 'lighten' as const }
      : undefined

  const card = (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.25 }}
      className="flex h-[140px] w-[220px] shrink-0 items-center justify-center"
    >
      <Image
        src={partner.logoUrl}
        alt={partner.name}
        width={220}
        height={140}
        className="mx-auto block object-contain object-center"
        style={{
          width: '90%',
          height: '90%',
          maxWidth: '90%',
          maxHeight: '90%',
          ...blendStyle,
        }}
        sizes="220px"
      />
    </motion.div>
  )

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        {card}
      </a>
    )
  }

  return card
}

function MarqueeRows({ displayed }: { displayed: Partner[] }) {
  const tripled = <T,>(arr: T[]) => [...arr, ...arr, ...arr]
  const half = Math.ceil(displayed.length / 2)
  const row1 = displayed.slice(0, half)
  const row2 = displayed.slice(half)
  const row1Tripled = tripled(row1)
  const row2Tripled = tripled(row2)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="partners-row partners-row--spaced"
        style={{ direction: 'ltr' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="partners-track-right"
          style={{ direction: 'ltr' }}
        >
          {row1Tripled.map((p, i) => (
            <LogoCard key={`row1-${p.id}-${i}`} partner={p} />
          ))}
        </motion.div>
      </motion.div>

      <div className="partners-row" style={{ direction: 'ltr' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="partners-track-left"
          style={{ direction: 'ltr' }}
        >
          {row2Tripled.map((p, i) => (
            <LogoCard key={`row2-${p.id}-${i}`} partner={p} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

function PartnersHeader() {
  const t = useTranslations('partnersSection')

  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="relative z-10 mx-auto mb-14 max-w-3xl px-6 text-center lg:mb-16"
    >
      <GoldDiamondDivider />
      <p className="mb-3 font-heading text-xs uppercase tracking-[0.28em] text-[#C09040]">
        {t('title')}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {t('title')}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
        {t('subtitle')}
      </p>
    </motion.header>
  )
}

export default function PartnerLogoGrid({
  partners: partnersProp,
  limit,
  variant,
}: PartnerLogoGridProps) {
  const locale = useLocale()
  const isHome = variant === 'home' || (!partnersProp && variant !== 'marquee')
  const source = partnersProp ?? allPartners
  const displayed = limit ? source.slice(0, limit) : source

  const viewAllLabel =
    locale === 'ar' ? 'عرض جميع الشركاء' : 'View All Partners'

  const marquees = <MarqueeRows displayed={displayed} />

  if (!isHome) {
    return marquees
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#0D0C0A] py-20 sm:py-[100px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/images/hero/success-hero.png"
          alt=""
          fill
          className="object-cover opacity-[0.18]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0D0C0A_72%)]" />
        <div className="absolute inset-0 bg-[#0D0C0A]/35" />
      </div>

      <motion.div className="relative z-10">
        <PartnersHeader />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative z-10"
        >
          {marquees}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative z-10 mt-12 text-center sm:mt-14"
        >
          <Link
            href={`/${locale}/partners`}
            className="inline-flex items-center justify-center rounded-full border border-[#C09040]/60 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-[#F5F0E8] transition-colors hover:border-[#C09040] hover:bg-[#C09040]/12"
          >
            {viewAllLabel}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
