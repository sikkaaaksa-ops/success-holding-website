'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import {
  Building2, Cpu, HardHat, Hotel, TrendingUp, Truck,
  type LucideIcon,
} from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'

const iconMap: Record<string, LucideIcon> = {
  Building2, Cpu, HardHat, Hotel, TrendingUp, Truck,
}

export default function SectorsContent() {
  const t = useTranslations('sectors')
  const locale = useLocale()
  const [activeId, setActiveId] = useState<string | null>(null)

  const scrollTo = (slug: string) => {
    setActiveId(slug)
    const el = document.getElementById(slug)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-brand-charcoal pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,151,58,0.06)_0%,transparent_70%)]" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center lg:px-12"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-semibold text-white md:text-5xl"
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
      </section>

      {/* Mobile pill bar */}
      <div className="sticky top-16 z-30 bg-brand-offwhite border-b border-brand-gray/10 lg:hidden overflow-x-auto">
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
              {t(sector.titleKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Sector details */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-16"
          >
            {sectors.map((sector) => {
              const Icon = iconMap[sector.icon]
              return (
                <motion.div
                  key={sector.id}
                  id={sector.slug}
                  variants={fadeUp}
                  className="scroll-mt-32 grid grid-cols-1 gap-8 bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] lg:grid-cols-3 lg:p-12"
                >
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="text-brand-gold" size={28} />}
                      <h2 className="font-heading text-2xl font-semibold text-brand-dark md:text-3xl">
                        {t(sector.titleKey)}
                      </h2>
                    </div>
                    <div
                      className="mt-3 h-1 w-12"
                      style={{ backgroundColor: sector.color || '#B8973A' }}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-base leading-relaxed text-brand-gray-dark">
                      {t(sector.descriptionKey)}
                    </p>
                    <div className="mt-6 flex aspect-video w-full items-center justify-center bg-brand-beige">
                      <span className="text-xs uppercase tracking-widest text-brand-gray">
                        {locale === 'ar' ? 'صورة القطاع' : 'Sector Image'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}
