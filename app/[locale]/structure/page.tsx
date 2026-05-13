import {getTranslations} from 'next-intl/server';
import StructureContent from './StructureContent';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.structure'});
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function StructurePage() {
  return <StructureContent />;
}
