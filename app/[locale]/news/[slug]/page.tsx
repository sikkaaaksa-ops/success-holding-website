import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {newsArticles} from '@/data/news';
import NewsDetail from './NewsDetail';

export async function generateStaticParams() {
  return newsArticles.map((article) => ({slug: article.slug}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};
  const lang = locale as 'en' | 'ar';
  return {
    title: article.title[lang],
    description: article.excerpt[lang].slice(0, 160),
  };
}

export default async function NewsArticlePage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <NewsDetail article={article} locale={locale} />;
}
