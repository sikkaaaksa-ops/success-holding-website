'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp } from '@/lib/motionVariants'
import { formatDate } from '@/lib/utils'
import type { NewsArticle } from '@/types'

interface NewsCardProps {
  article: NewsArticle
  locale: string
}

export default function NewsCard({ article, locale }: NewsCardProps) {
  const title = article.title[locale as 'en' | 'ar']
  const excerpt = article.excerpt[locale as 'en' | 'ar']

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/${locale}/news/${article.slug}`}
        className="group block bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
      >
        <div className="flex aspect-video items-center justify-center bg-brand-beige">
          <span className="text-xs uppercase tracking-widest text-brand-gray">
            {locale === 'ar' ? 'صورة' : 'Image'}
          </span>
        </div>

        <div className="p-6">
          {article.category && (
            <span className="mb-2 inline-block rounded-none bg-brand-offwhite px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-brand-gold">
              {article.category}
            </span>
          )}
          <h3 className="font-heading text-xl font-semibold leading-snug text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-gray-dark">
            {excerpt}
          </p>
          <p className="mt-4 text-sm text-brand-gray-dark">
            {formatDate(article.publishedAt, locale)}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
