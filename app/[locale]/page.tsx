import {getTranslations} from 'next-intl/server';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import SectorsSection from '@/components/sections/SectorsSection';
import SubsidiariesSection from '@/components/sections/SubsidiariesSection';
import PartnersSection from '@/components/sections/PartnersSection';
import NewsSection from '@/components/sections/NewsSection';
import AboutSnippet from '@/components/sections/AboutSnippet';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.home'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SectorsSection />
      <AboutSnippet />
      <SubsidiariesSection />
      <PartnersSection />
      <NewsSection />
    </>
  );
}
