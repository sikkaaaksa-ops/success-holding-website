'use client'

import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'

import { fadeUp } from '@/lib/motionVariants'

import type { Subsidiary } from '@/types'



function cardImageSrc(sub: Subsidiary): string | null {

  return sub.coverImageUrl ?? sub.logoUrl ?? null

}



interface SubsidiaryCardProps {

  subsidiary: Subsidiary

  locale: string

}



export default function SubsidiaryCard({ subsidiary, locale }: SubsidiaryCardProps) {

  const lang = locale as 'en' | 'ar'

  const name = subsidiary.name[lang]

  const teaser = subsidiary.cardTeaser?.[lang] ?? subsidiary.description[lang]

  const src = cardImageSrc(subsidiary)



  return (

    <motion.div variants={fadeUp}>

      <Link

        href={`/${locale}/subsidiaries/${subsidiary.slug}`}

        className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_36px_-16px_rgba(13,12,10,0.12)] ring-1 ring-black/[0.035] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-14px_rgba(13,12,10,0.18)]"

      >

        <div className="relative aspect-[16/10] overflow-hidden bg-brand-beige">

          {src ? (

            <Image

              src={src}

              alt=""

              fill

              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"

              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"

            />

          ) : (

            <div className="flex h-full items-center justify-center">

              <span className="font-heading text-2xl font-semibold text-brand-gray-dark/35">

                {name

                  .split(/\s+/)

                  .map((w) => w[0])

                  .join('')

                  .slice(0, 3)}

              </span>

            </div>

          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        </div>



        <div className="p-6 text-start">

          <h3 className="font-heading text-lg font-semibold leading-snug text-brand-dark">

            {name}

          </h3>

          <p className="mt-2 line-clamp-2 text-[0.9rem] leading-relaxed text-brand-gray-dark">

            {teaser}

          </p>

          <span className="mt-4 inline-flex items-center gap-2 text-[0.85rem] font-medium tracking-wide text-[#C09040] transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">

            {locale === 'ar' ? 'عرض الصفحة' : 'View page'}

            <span className="text-base rtl:rotate-180" aria-hidden>

              ›

            </span>

          </span>

        </div>

      </Link>

    </motion.div>

  )

}

