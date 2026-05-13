'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import { subsidiaries } from '@/data/subsidiaries'
import SectionHeader from '@/components/ui/SectionHeader'

export default function GroupStructureDiagram() {
  const t = useTranslations('groupStructure')
  const st = useTranslations('sectors')
  const locale = useLocale()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggleSector = (sectorSlug: string) => {
    setExpanded((prev) => ({ ...prev, [sectorSlug]: !prev[sectorSlug] }))
  }

  const getSubsidiaries = (sectorSlug: string) =>
    subsidiaries.filter((s) => s.sector === sectorSlug)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Root node */}
          <motion.div variants={fadeUp} className="mb-8 flex justify-center">
            <div className="border-2 border-brand-gold bg-white px-8 py-4 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <span className="font-heading text-xl font-semibold text-brand-gold">
                SUCCESS Group
              </span>
            </div>
          </motion.div>

          {/* Connector line */}
          <div className="mx-auto mb-8 h-8 w-px bg-brand-gray/30" />

          {/* Desktop: horizontal grid layout */}
          <div className="hidden lg:block">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 xl:grid-cols-6"
            >
              {sectors.map((sector) => {
                const subs = getSubsidiaries(sector.slug)
                return (
                  <motion.div key={sector.id} variants={fadeUp} className="flex flex-col items-stretch">
                    {/* Sector node */}
                    <div className="border border-brand-gray/20 border-l-4 border-l-brand-gold bg-white p-3 transition-colors duration-200 hover:bg-brand-beige">
                      <span className="block text-sm font-semibold text-brand-dark">
                        {st(sector.titleKey.replace('sectors.', ''))}
                      </span>
                    </div>

                    {/* Connector */}
                    {subs.length > 0 && (
                      <div className="mx-auto my-2 h-4 w-px bg-brand-gray/30" />
                    )}

                    {/* Subsidiary nodes */}
                    <div className="flex flex-col gap-2">
                      {subs.map((sub) => (
                        <div
                          key={sub.id}
                          className="border border-brand-gray/20 bg-white p-2 text-xs text-brand-gray-dark transition-colors duration-200 hover:bg-brand-beige"
                        >
                          {sub.name[locale as 'en' | 'ar']}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Mobile: vertical collapsible layout */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-3">
              {sectors.map((sector) => {
                const subs = getSubsidiaries(sector.slug)
                const isOpen = expanded[sector.slug] ?? false

                return (
                  <motion.div key={sector.id} variants={fadeUp}>
                    <button
                      onClick={() => toggleSector(sector.slug)}
                      className="flex w-full items-center justify-between border border-brand-gray/20 border-l-4 border-l-brand-gold bg-white p-4 text-start transition-colors duration-200 hover:bg-brand-beige"
                    >
                      <span className="text-sm font-semibold text-brand-dark">
                        {st(sector.titleKey.replace('sectors.', ''))}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-brand-gray-dark transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && subs.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-1 flex flex-col gap-1 border-l border-brand-gray/20 pl-4 rtl:ml-0 rtl:mr-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4"
                      >
                        {subs.map((sub) => (
                          <div
                            key={sub.id}
                            className="border border-brand-gray/20 bg-white p-3 text-sm text-brand-gray-dark transition-colors duration-200 hover:bg-brand-beige"
                          >
                            {sub.name[locale as 'en' | 'ar']}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
