import {getTranslations} from 'next-intl/server';
import PartnersContent from './PartnersContent';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.partners'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function PartnersPage() {
  return <PartnersContent />;
}
