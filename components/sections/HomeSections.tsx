'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { fadeUp } from '@/lib/motionVariants'
import { aboutContent } from '@/data/siteContent'

const ABOUT_SNIPPET_NS = 'aboutSnippet.'

function aboutSnippetField(fullKey: string) {
  return fullKey.replace(ABOUT_SNIPPET_NS, '') as 'label' | 'title' | 'description' | 'cta'
}

const UNSPLASH_ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'

export function AboutSection() {
  return (
    <section
      style={{
        background: '#F5F0E8',
        padding: '96px clamp(20px, 5.5vw, 80px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative wave bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px solid rgba(192,144,64,0.10)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: '1px solid rgba(192,144,64,0.08)',
          pointerEvents: 'none',
        }}
      />
      <div className="inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="lg:grid-cols-2 grid-cols-1"
        >
          {/* ══════════════════════════════════
            LEFT — Image Composition
        ══════════════════════════════════ */}
          <div style={{ position: 'relative', height: '540px' }}>
            {/* Layer 1: Back beige card — top right, slightly rotated */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '55%',
                height: '44%',
                background: '#E8E2D8',
                borderRadius: '18px',
                transform: 'rotate(2.5deg)',
                zIndex: 0,
              }}
            />
            {/* Layer 2: Middle glass card */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '16px',
                width: '63%',
                height: '54%',
                background: 'rgba(255,255,255,0.50)',
                border: '1px solid rgba(255,255,255,0.90)',
                borderRadius: '18px',
                backdropFilter: 'blur(4px)',
                zIndex: 1,
              }}
            />
            {/* Layer 3: Main photo card — front, bottom-left */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '79%',
                height: '88%',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.20)',
                zIndex: 2,
              }}
            >
              {/*
              ┌─────────────────────────────────────────┐
              │  📸 HERO IMAGE SLOT                      │
              │  Upload your image to:                   │
              │  /public/images/about/about-main.jpg     │
              │  Min size: 700×600px                     │
              │  Style: Riyadh skyline / golden hour     │
              │  After upload, change the src below to:  │
              │  "/images/about/about-main.jpg"          │
              └─────────────────────────────────────────┘
            */}
              <Image
                src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=85"
                alt="SUCCESS Group"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="40vw"
                priority
              />
            </div>
            {/* Floating dark stats card — bottom-left of photo */}
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                zIndex: 10,
                background: '#1C1A14',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                width: '235px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.40)',
              }}
            >
              {/* Gold ring icon */}
              <div
                style={{
                  flexShrink: 0,
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1.5px solid #C09040',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C09040"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="7" height="17" />
                  <rect x="10" y="10" width="11" height="11" />
                  <line x1="1" y1="21" x2="23" y2="21" />
                  <line x1="5" y1="8" x2="8" y2="8" />
                  <line x1="5" y1="12" x2="8" y2="12" />
                  <line x1="5" y1="16" x2="8" y2="16" />
                </svg>
              </div>
              {/* Number + label */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    marginBottom: '5px',
                    direction: 'rtl',
                  }}
                >
                  عاماً &nbsp;25+
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.42)',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    direction: 'rtl',
                  }}
                >
                  من الخبرة والنمو المستدام
                </div>
              </div>
            </div>
            {/* Dot grid decoration — right edge */}
            <div
              style={{
                position: 'absolute',
                right: '-4px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 10px)',
                gap: '10px',
                zIndex: 20,
                pointerEvents: 'none',
              }}
            >
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    background: 'rgba(192,144,64,0.25)',
                  }}
                />
              ))}
            </div>
          </div>
          {/* END LEFT */}
          {/* ══════════════════════════════════
            RIGHT — Text Content
        ══════════════════════════════════ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              textAlign: 'right',
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px',
                flexDirection: 'row-reverse',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '1px',
                  background: '#C09040',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  color: '#C09040',
                  fontWeight: 300,
                }}
              >
                من نحن
              </span>
            </div>
            {/* Main heading */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(38px, 5vw, 64px)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '16px',
                textAlign: 'right',
              }}
            >
              <span style={{ color: '#1A1814', display: 'block' }}>إرث من التميز</span>
              <span>
                <span style={{ color: '#1A1814' }}>منذ </span>
                <span style={{ color: '#C09040' }}>1999</span>
              </span>
            </h2>
            {/* Gold underline */}
            <div
              style={{
                width: '60px',
                height: '3px',
                background: '#C09040',
                marginBottom: '28px',
              }}
            />
            {/* Body paragraph */}
            <p
              style={{
                fontSize: '15px',
                color: '#5C5650',
                lineHeight: 2.0,
                fontWeight: 300,
                maxWidth: '460px',
                marginBottom: '36px',
                textAlign: 'right',
              }}
            >
              مجموعة نجاح شركة قابضة سعودية متطورة يقودها أكثر من عقدين في
              القطاعات التقنية والمقاولات والتجارة والخدمات اللوجستية. نلتزم
              ببناء محفظة متنوعة ومستدامة للمستقبل تتماشى مع رؤية السعودية
              2030.
            </p>
            {/* 4 Feature icons */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                width: '100%',
                marginBottom: '36px',
                borderTop: '1px solid rgba(192,144,64,0.18)',
                borderBottom: '1px solid rgba(192,144,64,0.18)',
                padding: '22px 0',
              }}
            >
              {[
                {
                  label: 'رؤية واضحة',
                  sub: 'نحو مستقبل\nمستدام',
                  svg: (
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C09040"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                },
                {
                  label: 'شراكات استراتيجية',
                  sub: 'تعزز النمو\nوالابتكار',
                  svg: (
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C09040"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  ),
                },
                {
                  label: 'محفظة متنوعة',
                  sub: 'في قطاعات\nحيوية',
                  svg: (
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C09040"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                      <line x1="12" y1="12" x2="12" y2="16" />
                      <line x1="10" y1="14" x2="14" y2="14" />
                    </svg>
                  ),
                },
                {
                  label: 'فريق عمل',
                  sub: 'محترف يقود\nالنجاح',
                  svg: (
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C09040"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="7" r="3" />
                      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                      <circle cx="17" cy="7" r="2" />
                      <path d="M21 21v-2a3 3 0 00-2-2.8" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '0 10px',
                    borderRight: idx < 3 ? '1px solid rgba(192,144,64,0.18)' : 'none',
                  }}
                >
                  <div style={{ marginBottom: '10px' }}>{item.svg}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#1A1814',
                      marginBottom: '5px',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#8C8880',
                      fontWeight: 300,
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
            {/* CTA Button */}
            <a
              href="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#C09040',
                color: '#FFFFFF',
                padding: '14px 32px',
                fontSize: '13px',
                fontWeight: 300,
                letterSpacing: '1.5px',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#B8902A'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C09040'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ fontSize: '16px' }}>‹</span>
              المزيد عنا
            </a>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  )
}
