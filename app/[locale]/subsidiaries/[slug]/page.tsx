import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {subsidiaries} from '@/data/subsidiaries';
import SubsidiaryDetail from './SubsidiaryDetail';

export async function generateStaticParams() {
  return subsidiaries.map((sub) => ({slug: sub.slug}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const subsidiary = subsidiaries.find((s) => s.slug === slug);
  if (!subsidiary) return {};
  const lang = locale as 'en' | 'ar';
  return {
    title: subsidiary.name[lang],
    description: subsidiary.description[lang].slice(0, 160),
  };
}

export default async function SubsidiaryPage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const subsidiary = subsidiaries.find((s) => s.slug === slug);

  if (!subsidiary) {
    notFound();
  }

  const relatedCompanies = subsidiaries.filter(
    (s) => s.sector === subsidiary.sector && s.id !== subsidiary.id
  );

  return <SubsidiaryDetail subsidiary={subsidiary} relatedCompanies={relatedCompanies} locale={locale} />;
}
