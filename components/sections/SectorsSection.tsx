'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import SectionHeader from '@/components/ui/SectionHeader'
import SectorCard from '@/components/cards/SectorCard'

const ROW_GAP = 'gap-3'

/** Desktop 12-col mosaic: rows of 2×span-6, 2×span-6, 3×span-4, 2×span-6 (+ span-6 for extras) */
const MOSAIC_SPANS = [
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-6',
] as const

export default function SectorsSection() {
  const t = useTranslations('sectorsSection')
  const locale = useLocale()
  const [showAll, setShowAll] = useState(false)
  const s = sectors

  return (
    <section className="bg-brand-offwhite py-20 lg:py-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-12"
      >
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />
        <div
          className={`sectors-grid grid grid-cols-1 lg:grid-cols-12 ${ROW_GAP}`}
        >
          {s.map((sector, i) => {
            const isFeaturedRow = i < 4
            const hiddenOnMobile = i >= 4 && !showAll
            return (
              <motion.div
                key={sector.id}
                variants={fadeUp}
                className={[
                  MOSAIC_SPANS[i] ?? 'lg:col-span-6',
                  isFeaturedRow
                    ? 'h-[260px] min-h-0 lg:h-[320px]'
                    : 'h-[260px] min-h-0 lg:h-[220px]',
                  hiddenOnMobile ? 'hidden lg:block' : '',
                ].join(' ')}
              >
                <SectorCard sector={sector} locale={locale} index={i} />
              </motion.div>
            )
          })}
        </div>
        <motion.div
          variants={fadeUp}
          className="mt-5 block text-center md:hidden"
        >
          {!showAll && s.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              style={{
                padding: '10px 28px',
                border: '1.5px solid #C09040',
                background: 'transparent',
                color: '#C09040',
                fontSize: '13px',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              عرض المزيد
            </button>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
