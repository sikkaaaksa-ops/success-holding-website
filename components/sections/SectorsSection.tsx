'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { sectors } from '@/data/sectors'
import SectionHeader from '@/components/ui/SectionHeader'
import SectorCard from '@/components/cards/SectorCard'

const ROW_GAP = 'gap-3'

export default function SectorsSection() {
  const t = useTranslations('sectorsSection')
  const locale = useLocale()
  const [showAll, setShowAll] = useState(false)
  const s = sectors.slice(0, 13)

  return (
    <section className="bg-brand-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />
        <div className={`flex flex-col ${ROW_GAP}`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`sectors-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${ROW_GAP}`}
          >
            {s.slice(0, 4).map((sector, i) => (
              <motion.div
                key={sector.id}
                variants={fadeUp}
                className="h-[260px] min-h-0 lg:h-[320px]"
              >
                <SectorCard sector={sector} locale={locale} index={i} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className={`${showAll ? 'block' : 'hidden'} md:block`}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ${ROW_GAP}`}
            >
              {s.slice(4, 7).map((sector, i) => (
                <motion.div
                  key={sector.id}
                  variants={fadeUp}
                  className="h-[260px] min-h-0 lg:h-[220px]"
                >
                  <SectorCard sector={sector} locale={locale} index={i + 4} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ${ROW_GAP}`}
            >
              {s.slice(7, 13).map((sector, i) => (
                <motion.div
                  key={sector.id}
                  variants={fadeUp}
                  className="h-[260px] min-h-0 lg:h-[220px]"
                >
                  <SectorCard sector={sector} locale={locale} index={i + 7} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="block md:hidden text-center mt-5">
          {!showAll && (
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
        </div>
      </div>
    </section>
  )
}
