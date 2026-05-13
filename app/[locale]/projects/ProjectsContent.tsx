'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/cards/ProjectCard'
import type { Project } from '@/types'

const statusTabs: { key: Project['status'] | 'all'; label: { en: string; ar: string } }[] = [
  { key: 'all', label: { en: 'All', ar: 'الكل' } },
  { key: 'completed', label: { en: 'Completed', ar: 'مكتمل' } },
  { key: 'ongoing', label: { en: 'Ongoing', ar: 'جارٍ' } },
  { key: 'upcoming', label: { en: 'Upcoming', ar: 'قادم' } },
]

export default function ProjectsContent() {
  const t = useTranslations('sectors')
  const locale = useLocale()
  const lang = locale as 'en' | 'ar'
  const [activeSector, setActiveSector] = useState<string>('all')
  const [activeStatus, setActiveStatus] = useState<string>('all')

  const filtered = projects.filter((p) => {
    const sectorMatch = activeSector === 'all' || p.sector === activeSector
    const statusMatch = activeStatus === 'all' || p.status === activeStatus
    return sectorMatch && statusMatch
  })

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
            {locale === 'ar' ? 'مشاريعنا' : 'Our Projects'}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
          >
            {locale === 'ar'
              ? 'مشاريع متميزة عبر جميع قطاعاتنا.'
              : 'Landmark projects across all our sectors.'}
          </motion.p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-brand-offwhite border-b border-brand-gray/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 space-y-3">
          {/* Sector pills */}
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveSector('all')}
              className={`whitespace-nowrap px-4 py-1.5 text-xs font-medium transition-colors ${
                activeSector === 'all'
                  ? 'bg-brand-gold text-white'
                  : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
              }`}
            >
              {locale === 'ar' ? 'كل القطاعات' : 'All Sectors'}
            </button>
            {sectors.map((sector) => (
              <button
                key={sector.slug}
                onClick={() => setActiveSector(sector.slug)}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeSector === sector.slug
                    ? 'bg-brand-gold text-white'
                    : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
                }`}
              >
                {t(sector.titleKey)}
              </button>
            ))}
          </div>

          {/* Status tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {statusTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveStatus(tab.key)}
                className={`whitespace-nowrap px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeStatus === tab.key
                    ? 'bg-brand-charcoal text-white'
                    : 'bg-white text-brand-gray-dark hover:bg-brand-beige'
                }`}
              >
                {tab.label[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} locale={locale} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-brand-gray-dark py-12">
              {locale === 'ar' ? 'لا توجد مشاريع بهذا التصنيف.' : 'No projects match the current filters.'}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
