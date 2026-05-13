import {getTranslations} from 'next-intl/server';
import StatsSection from '@/components/sections/StatsSection';
import AboutContent from './AboutContent';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.about'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <StatsSection />
    </>
  );
}
