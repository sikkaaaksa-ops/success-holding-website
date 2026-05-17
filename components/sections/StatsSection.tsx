'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { statsContent } from '@/data/siteContent'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

function getStatIconIndex(stat: (typeof statsContent)[number]): number {
  if (stat.labelEn.includes('Employees') || stat.value === 300) return 0
  if (stat.labelEn.includes('Sectors') || stat.value === 11) return 1
  if (stat.labelEn.includes('Partners') || stat.value === 25) return 2
  if (stat.labelEn.includes('Years') || stat.id === 'stat-1') return 3
  return 0
}

const STAT_ICONS = [
  // 0 — employees (briefcase)
  <svg
    key="briefcase"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 14V11C12 9.34315 13.3431 8 15 8H25C26.6569 8 28 9.34315 28 11V14"
      stroke="#B8902A"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <rect x="8" y="14" width="24" height="18" rx="2" stroke="#B8902A" strokeWidth={1.5} />
    <path d="M20 14V22" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
  </svg>,
  // 1 — sectors (building)
  <svg
    key="building"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect x="10" y="10" width="20" height="24" rx="1" stroke="#B8902A" strokeWidth={1.5} />
    <rect x="16" y="6" width="8" height="6" rx="1" stroke="#B8902A" strokeWidth={1.5} />
    <line x1="14" y1="16" x2="14" y2="18" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="20" y1="16" x2="20" y2="18" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="26" y1="16" x2="26" y2="18" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="14" y1="22" x2="14" y2="24" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="20" y1="22" x2="20" y2="24" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="26" y1="22" x2="26" y2="24" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="14" y1="28" x2="14" y2="30" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="20" y1="28" x2="20" y2="30" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="26" y1="28" x2="26" y2="30" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
  </svg>,
  // 2 — partners (chart)
  <svg
    key="chart"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <line x1="8" y1="32" x2="32" y2="32" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <line x1="8" y1="8" x2="8" y2="32" stroke="#B8902A" strokeWidth={1.5} strokeLinecap="round" />
    <rect x="12" y="22" width="5" height="10" stroke="#B8902A" strokeWidth={1.5} />
    <rect x="19" y="16" width="5" height="16" stroke="#B8902A" strokeWidth={1.5} />
    <rect x="26" y="12" width="5" height="20" stroke="#B8902A" strokeWidth={1.5} />
  </svg>,
  // 3 — years (clock)
  <svg
    key="clock"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C09040"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
]

export default function StatsSection() {
  const locale = useLocale()
  const orderedStats =
    locale === 'ar' ? [...statsContent].reverse() : [...statsContent]

  return (
    <section className="bg-[#F2EDE4] py-8 md:py-10 px-[clamp(20px,5.5vw,80px)]">
      <div
        className="mx-auto grid max-w-[1360px] grid-cols-2 md:grid-cols-4"
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        {orderedStats.map((stat) => {
          const icon = STAT_ICONS[getStatIconIndex(stat)]
          const suffix = stat.suffix ?? ''
          const label = locale === 'ar' ? stat.labelAr : stat.labelEn

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center border-e-0 py-6 px-3 md:py-8 md:px-4 text-center [&:nth-child(odd)]:border-e [&:nth-child(odd)]:border-e-[rgba(184,144,42,0.30)] md:border-e-0 md:[&:not(:last-child)]:border-e md:[&:not(:last-child)]:border-e-[rgba(184,144,42,0.30)]"
            >
              <div className="mb-4 hidden md:flex justify-center">{icon}</div>
              <div
                dir="ltr"
                className="font-display text-[32px] md:mb-2 md:text-[clamp(52px,5.5vw,80px)] font-bold leading-none text-[#B8902A] tabular-nums"
              >
                <AnimatedCounter
                  value={stat.value}
                  prefix=""
                  suffix={suffix}
                  duration={1.8}
                />
              </div>
              <div
                className="my-2 h-[2px] w-6 bg-[#B8902A] md:hidden"
                aria-hidden
              />
              <p className="font-body text-center text-[10px] md:text-[17px] font-normal leading-snug text-[#5C5650]">
                {label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
