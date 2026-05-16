import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/*
  📸 BANNER IMAGE
  Replace /public/images/page-banner.jpg with your own image
  Recommended: 1920x600px, dark architectural/city photo
*/
const pageBannerBackgroundStyle = {
  backgroundImage: `
    linear-gradient(
      to bottom,
      rgba(18,18,12,0.55) 0%,
      rgba(18,18,12,0.75) 100%
    ),
    url('/images/page-banner.jpg')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
} as const

interface PageBannerProps {
  className?: string
  children: ReactNode
  showGoldRadial?: boolean
}

export default function PageBanner({
  className,
  children,
  showGoldRadial = true,
}: PageBannerProps) {
  return (
    <section
      className={cn(
        'relative flex bg-brand-charcoal pt-16',
        className
      )}
      style={pageBannerBackgroundStyle}
    >
      {showGoldRadial && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,151,58,0.06)_0%,transparent_70%)]" />
      )}
      {children}
    </section>
  )
}
