'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react'
import { useLocale } from 'next-intl'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import { formatDate } from '@/lib/utils'
import type { NewsArticle } from '@/types'

interface NewsDetailProps {
  article: NewsArticle
  locale: string
}

export default function NewsDetail({ article, locale }: NewsDetailProps) {
  const lang = locale as 'en' | 'ar'
  const title = article.title[lang]
  const content = article.content?.[lang] || article.excerpt[lang]
  const BackArrow = locale === 'ar' ? ArrowRight : ArrowLeft

  return (
    <>
      {/* Hero image area */}
      <section className="relative flex min-h-[40vh] items-end bg-brand-charcoal pt-16">
        <div className="absolute inset-0 flex items-center justify-center bg-brand-beige/5">
          <span className="text-sm uppercase tracking-widest text-brand-gray/40">
            {locale === 'ar' ? 'صورة المقال' : 'Article Image'}
          </span>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 lg:px-12">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-brand-gold transition-colors"
          >
            <BackArrow size={16} />
            {locale === 'ar' ? 'العودة إلى الأخبار' : 'Back to News'}
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <motion.article
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-dark">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-brand-gold" />
                {formatDate(article.publishedAt, locale)}
              </span>
              {article.category && (
                <span className="flex items-center gap-1.5">
                  <Tag size={14} className="text-brand-gold" />
                  {article.category}
                </span>
              )}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-heading text-3xl font-semibold text-brand-dark md:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-8 prose prose-lg max-w-none">
              {content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-base leading-relaxed text-brand-gray-dark">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.article>
        </div>
      </section>
    </>
  )
}
