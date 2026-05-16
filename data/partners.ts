import type { Partner } from '@/types'

export const partners: Partner[] = Array.from({ length: 28 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    id: `card-${n}`,
    name: `Partner ${n}`,
    logoUrl: `/images/partners/card-${n}.png`,
  }
})
