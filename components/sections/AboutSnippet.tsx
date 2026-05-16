'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { statsContent } from '@/data/siteContent'

/** Replace with local asset when available: /public/images/about/about-main.jpg */
const ABOUT_IMAGE_PLACEHOLDER =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'

const VALUE_KEYS = ['integrity', 'innovation', 'collaboration', 'excellence'] as const

const YEAR = '1999'

/** Years badge — spec: 25+ on floating card */
const FLOAT_STAT_MAIN = '25+'

function splitTitleAroundYear(title: string) {
  const idx = title.indexOf(YEAR)
  if (idx === -1) return { before: title, after: '' as string }
  return {
    before: title.slice(0, idx),
    after: title.slice(idx + YEAR.length),
  }
}

function StatYearsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 2v3M16 2v3M4 10h16M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AboutSnippet() {
  const t = useTranslations('aboutSnippet')
  const ta = useTranslations('about')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const yearsStat = statsContent.find((s) => s.id === 'stat-1') ?? statsContent[0]
  const statSublabel = isRtl ? yearsStat.labelAr : yearsStat.labelEn
  const { before: titleBefore, after: titleAfter } = splitTitleAroundYear(t('title'))

  const dots = Array.from({ length: 35 }, (_, i) => i)

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#F5F0E8',
        paddingTop: 96,
        paddingBottom: 96,
        paddingLeft: 'clamp(20px, 5.5vw, 80px)',
        paddingRight: 'clamp(20px, 5.5vw, 80px)',
      }}
    >
      <div
        className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[88px]"
        style={{ maxWidth: 1360, margin: '0 auto' }}
      >
        {/* Text: second on mobile, first (left) on desktop */}
        <div
          className="order-2 flex flex-col items-start text-start lg:order-1"
        >
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8a8478] md:text-sm">
            {t('label')}
          </p>
          <div
            className="mt-3 bg-[#C09040]"
            style={{ width: 60, height: 3 }}
            aria-hidden
          />
          <h2
            className="font-display mt-5 font-semibold leading-[1.12] text-[#1C1A14]"
            style={{ fontSize: 'clamp(38px, 4.5vw, 64px)' }}
          >
            <span>{titleBefore}</span>
            <span className="text-[#C09040]">{YEAR}</span>
            <span>{titleAfter}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#4a4740] md:text-[17px]">
            {t('description')}
          </p>

          <ul
            className="mt-10 grid w-full grid-cols-2 gap-0 border-y border-[#C09040]/35 lg:grid-cols-4 [&>li:not(:first-child)]:border-inline-start [&>li:not(:first-child)]:border-[#C09040]/35"
          >
            {VALUE_KEYS.map((key) => (
              <li key={key} className="py-5 lg:py-6">
                <div className="px-3 lg:px-4">
                  <h3 className="font-heading text-base font-semibold text-[#1C1A14] lg:text-lg">
                    {ta(`values.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#4a4740] lg:text-sm">
                    {ta(`values.${key}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 rounded-none px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#B08030] md:text-base"
              style={{ backgroundColor: '#C09040' }}
            >
              {t('cta')}
              <span aria-hidden className="text-lg leading-none">
                {isRtl ? '‹' : '›'}
              </span>
            </Link>
          </div>
        </div>

        {/* Image: first on mobile, second (right) on desktop */}
        <div className="relative order-1 w-full lg:order-2">
          {/* Decorative rings — desktop only */}
          <div
            className="pointer-events-none absolute -end-8 -top-10 z-0 hidden h-[min(420px,55vw)] w-[min(420px,55vw)] lg:block"
            aria-hidden
          >
            <div
              className="absolute end-0 top-0 h-full w-full rounded-full border border-[#C09040]/25"
              style={{ transform: 'translate(18%, -8%)' }}
            />
            <div
              className="absolute end-0 top-0 h-[88%] w-[88%] rounded-full border border-[#C09040]/18"
              style={{ transform: 'translate(8%, 4%)' }}
            />
          </div>

          {/* Dot grid — 35 dots, desktop only */}
          <div
            className="pointer-events-none absolute start-0 top-1/2 z-20 hidden -translate-y-1/2 grid-cols-5 gap-x-2 gap-y-2.5 lg:grid"
            aria-hidden
          >
            {dots.map((i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#C09040]/40" />
            ))}
          </div>

          <div className="relative mx-auto h-[300px] w-full max-w-lg md:h-[400px] lg:mx-0 lg:h-[560px] lg:max-w-none">
            <div className="relative h-full w-full">
              {/* Layer 1 — tablet+ */}
              <div
                className="absolute start-0 top-0 z-0 hidden h-[43%] w-[54%] md:block"
                style={{
                  backgroundColor: '#E8E2D8',
                  transform: 'rotate(-2.5deg)',
                }}
                aria-hidden
              />

              {/* Layer 2 — tablet+ */}
              <div
                className="absolute start-[6%] top-[10%] z-[1] hidden h-[36%] w-[46%] border border-white/55 bg-white/20 shadow-[0_12px_40px_rgba(28,26,20,0.12)] backdrop-blur-md md:block"
                style={{ transform: 'rotate(1.25deg)' }}
                aria-hidden
              />

              {/* Layer 3 — main photo */}
              <div
                className="absolute bottom-0 end-0 z-[2] overflow-hidden shadow-[0_24px_60px_rgba(13,13,13,0.14)]"
                style={{ width: '79%', height: '87%' }}
              >
                <Image
                  src={ABOUT_IMAGE_PLACEHOLDER}
                  alt={ta('hero.title')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority={false}
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#1C1A14]/55 via-[#1C1A14]/15 to-transparent"
                  aria-hidden
                />
              </div>

              {/* Floating card — icon + 25+ + عاماً + sublabel only */}
              <div
                className="absolute bottom-[20px] end-[20px] z-[3] text-white"
                style={{
                  width: 200,
                  backgroundColor: '#1C1A14',
                  padding: '14px 14px 16px',
                  border: '2px solid #C09040',
                  borderRadius: 0,
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <StatYearsIcon className="text-[#C09040]" />
                  <p className="flex flex-wrap items-baseline justify-center gap-1 font-heading font-bold leading-none text-[#C09040] tabular-nums">
                    <span className="text-[clamp(1.75rem,3.5vw,2.25rem)]">{FLOAT_STAT_MAIN}</span>
                    {isRtl ? (
                      <span className="text-lg font-semibold text-white">عاماً</span>
                    ) : (
                      <span className="text-lg font-semibold text-white">years</span>
                    )}
                  </p>
                  <p className="text-center font-body text-[11px] leading-snug text-white/72">{statSublabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
