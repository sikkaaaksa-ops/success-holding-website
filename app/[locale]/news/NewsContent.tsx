'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { newsArticles } from '@/data/news'
import { formatDate } from '@/lib/utils'
import NewsCard from '@/components/cards/NewsCard'

export default function NewsContent() {
  const t = useTranslations('newsSection')
  const locale = useLocale()
  const lang = locale as 'en' | 'ar'

  const [featured, ...rest] = newsArticles

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
            {t('title')}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link
                href={`/${locale}/news/${featured.slug}`}
                className="group grid grid-cols-1 gap-8 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] lg:grid-cols-2"
              >
                <div className="flex aspect-video items-center justify-center bg-brand-beige lg:aspect-auto lg:min-h-[300px]">
                  <span className="text-sm uppercase tracking-widest text-brand-gray">
                    {locale === 'ar' ? 'صورة مميزة' : 'Featured Image'}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  {featured.category && (
                    <span className="mb-3 inline-block w-fit bg-brand-offwhite px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-brand-gold">
                      {featured.category}
                    </span>
                  )}
                  <h2 className="font-heading text-2xl font-semibold text-brand-dark group-hover:text-brand-gold transition-colors md:text-3xl">
                    {featured.title[lang]}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-brand-gray-dark line-clamp-3">
                    {featured.excerpt[lang]}
                  </p>
                  <p className="mt-4 text-sm text-brand-gray">
                    {formatDate(featured.publishedAt, locale)}
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Rest of articles */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} locale={locale} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
