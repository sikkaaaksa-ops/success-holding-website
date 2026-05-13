'use client'

import { useTranslations } from 'next-intl'
import { partners } from '@/data/partners'
import SectionHeader from '@/components/ui/SectionHeader'
import PartnerLogoGrid from '@/components/ui/PartnerLogoGrid'

export default function PartnersSection() {
  const t = useTranslations('partnersSection')

  return (
    <section className="bg-brand-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <PartnerLogoGrid partners={partners} />
      </div>
    </section>
  )
}
