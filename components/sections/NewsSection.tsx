'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { staggerContainer } from '@/lib/motionVariants'
import { newsArticles } from '@/data/news'
import SectionHeader from '@/components/ui/SectionHeader'
import NewsCard from '@/components/cards/NewsCard'
import Button from '@/components/ui/Button'

export default function NewsSection() {
  const t = useTranslations('newsSection')
  const locale = useLocale()
  const displayed = newsArticles.slice(0, 3)

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
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {displayed.map((article) => (
            <NewsCard key={article.id} article={article} locale={locale} />
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Button href={`/${locale}/news`} variant="primary">
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}
