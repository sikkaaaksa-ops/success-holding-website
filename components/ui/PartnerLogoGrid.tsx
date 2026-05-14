'use client'

import type { Partner } from '@/types'

interface PartnerLogoGridProps {
  partners: Partner[]
  limit?: number
}

function LogoItem({ partner }: { partner: Partner }) {
  const inner = (
    <div className="mx-3 flex w-[180px] shrink-0 items-center justify-center bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] grayscale transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:grayscale-0">
      <div className="flex h-12 items-center justify-center">
        <span className="text-sm font-medium text-brand-gray-dark">
          {partner.name}
        </span>
      </div>
    </div>
  )

  if (partner.website) {
    return (
      <a href={partner.website} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }

  return inner
}

export default function PartnerLogoGrid({ partners, limit }: PartnerLogoGridProps) {
  const displayed = limit ? partners.slice(0, limit) : partners

  const topRow = displayed.slice(0, 6)
  const bottomRow = displayed.slice(6)

  const tripled = <T,>(arr: T[]) => [...arr, ...arr, ...arr]

  return (
    <div className="space-y-6">
      {/* Row 1 — drifts right */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track--right">
          {tripled(topRow).map((p, i) => (
            <LogoItem key={`top-${p.id}-${i}`} partner={p} />
          ))}
        </div>
      </div>

      {/* Row 2 — drifts left */}
      {bottomRow.length > 0 && (
        <div className="marquee-row">
          <div className="marquee-track marquee-track--left">
            {tripled(bottomRow).map((p, i) => (
              <LogoItem key={`bot-${p.id}-${i}`} partner={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
