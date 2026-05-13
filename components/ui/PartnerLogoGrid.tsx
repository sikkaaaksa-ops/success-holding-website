'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motionVariants'
import type { Partner } from '@/types'

interface PartnerLogoGridProps {
  partners: Partner[]
  limit?: number
}

export default function PartnerLogoGrid({ partners, limit }: PartnerLogoGridProps) {
  const displayed = limit ? partners.slice(0, limit) : partners

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
    >
      {displayed.map((partner) => {
        const inner = (
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] grayscale transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:grayscale-0"
          >
            <div className="flex h-12 items-center justify-center">
              <span className="text-sm font-medium text-brand-gray-dark">
                {partner.name}
              </span>
            </div>
          </motion.div>
        )

        if (partner.website) {
          return (
            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {inner}
            </a>
          )
        }

        return <div key={partner.id}>{inner}</div>
      })}
    </motion.div>
  )
}
