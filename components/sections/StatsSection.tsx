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
              className="group relative text-center overflow-hidden py-8"
            >
              {/* Gold top-border bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-brand-gold transition-all duration-500 group-hover:w-full" />

              {/* Ghost number */}
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-heading text-[180px] font-bold leading-none text-white/5 group-hover:text-brand-gold/10 transition-colors duration-500">
                  {stat.value}
                </span>
              </div>

              <div className="relative z-10">
                <div className="font-heading font-semibold text-white" style={{ fontSize: 'clamp(60px, 6.5vw, 88px)', lineHeight: 1 }}>
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="w-10 h-[2px] bg-brand-gold mx-auto mb-4 mt-4" />
                <p className="text-sm text-brand-gray">
                  {t(stat.labelKey.replace('stats.', ''))}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
