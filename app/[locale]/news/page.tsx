import {getTranslations} from 'next-intl/server';
import NewsContent from './NewsContent';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.news'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function NewsPage() {
  return <NewsContent />;
}
