'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { stats } from '@/data/stats'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsSection() {
  const t = useTranslations('stats')

  return (
    <section className="bg-brand-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-heading text-4xl font-semibold text-white md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mx-auto mt-3 h-0.5 w-8 bg-brand-gold" />
              <p className="mt-3 text-sm text-brand-gray">
                {t(stat.labelKey.replace('stats.', ''))}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
