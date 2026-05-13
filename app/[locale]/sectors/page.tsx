import {getTranslations} from 'next-intl/server';
import SectorsContent from './SectorsContent';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.sectors'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function SectorsPage() {
  return <SectorsContent />;
}
