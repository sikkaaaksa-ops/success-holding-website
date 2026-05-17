'use client';

import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, footerContent } from '@/data/siteContent';

const FOOTER_BG_SRC =
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=50';

const GOLD = '#C09040';
const GOLD_BORDER = 'rgba(192, 144, 64, 0.40)';

const transparentWrap: CSSProperties = {
  background: 'none',
  backgroundColor: 'transparent',
  padding: 0,
};

const logoParentWrap: CSSProperties = {
  background: 'none',
  padding: 0,
  border: 'none',
  boxShadow: 'none',
};

const socialLinkStyle: CSSProperties = {
  ...transparentWrap,
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: `1.5px solid ${GOLD_BORDER}`,
};

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function GlobeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <h3
        className="font-body text-center text-sm font-medium tracking-wide md:text-start"
        style={{ color: 'rgba(255,255,255,0.90)' }}
      >
        {children}
      </h3>
      <div
        className="mx-auto mb-5 mt-2 md:mx-0 md:ms-auto"
        style={{
          width: 36,
          height: 2,
          backgroundColor: GOLD,
        }}
      />
    </div>
  );
}

function ContactIconBox({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: `1.5px solid ${GOLD_BORDER}`,
        color: GOLD,
      }}
    >
      {children}
    </span>
  );
}

const NAV_ITEMS = footerContent.navItems;

export default function Footer() {
  const nav = useTranslations('nav');
  const t = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();
  const pick = (en: string, ar: string) => (locale === 'ar' ? ar : en);
  const isRtl = locale === 'ar';

  const contactTextStyle: CSSProperties = {
    fontSize: 13.5,
    fontWeight: 300,
    color: 'rgba(255,255,255,0.55)',
    textAlign: 'left',
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0D0C0A' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src={FOOTER_BG_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.24 }}
          priority={false}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{ backgroundColor: 'rgba(13,12,10,0.10)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        aria-hidden
        style={{
          background:
            'linear-gradient(to right, rgba(13,12,10,0.68) 0%, rgba(13,12,10,0.16) 35%, rgba(13,12,10,0.16) 65%, rgba(13,12,10,0.68) 100%)',
        }}
      />

      <div
        className="relative z-10 h-px w-full"
        style={{
          background: `linear-gradient(to right, transparent 0%, ${GOLD} 50%, transparent 100%)`,
        }}
      />

      <div
        className="relative z-10 mx-auto pb-12"
        style={{
          maxWidth: 1360,
          padding: '64px clamp(20px, 5.5vw, 80px) 0',
        }}
      >
        <div className="footer-grid grid gap-12">
          {/* Logo column — first in DOM → rightmost in RTL */}
          <div
            className="footer-logo-col flex flex-col items-center gap-0 text-center md:items-end md:text-start"
            style={logoParentWrap}
          >
            <Link
              href={`/${locale}`}
              className="inline-block shrink-0"
              style={logoParentWrap}
            >
              <span style={logoParentWrap}>
                <img
                  src="/images/logo.svg"
                  alt="SUCCESS"
                  className="footer-logo-img"
                  style={{
                    width: '160px',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SectionTitle>{pick('Quick Links', 'روابط سريعة')}</SectionTitle>
            <ul className="w-full space-y-2 text-center md:text-start">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="group flex w-full items-center justify-center transition-colors duration-300 hover:text-[#C09040] md:justify-end"
                    style={{
                      gap: 8,
                      fontSize: 13.5,
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {nav(item.key)}
                    <span
                      aria-hidden
                      className="transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: GOLD, fontSize: 12, opacity: 0.8 }}
                    >
                      ‹
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SectionTitle>{pick('Contact Info', 'معلومات التواصل')}</SectionTitle>
            <ul className="flex w-full flex-col gap-4">
              <li className="flex items-center justify-center md:justify-end" style={{ gap: 12 }}>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors duration-300 hover:text-[#C09040]"
                  dir="ltr"
                  style={contactTextStyle}
                >
                  {siteConfig.phone}
                </a>
                <ContactIconBox>
                  <Phone size={16} />
                </ContactIconBox>
              </li>
              <li className="flex items-center justify-center md:justify-end" style={{ gap: 12 }}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors duration-300 hover:text-[#C09040]"
                  dir="ltr"
                  style={contactTextStyle}
                >
                  {siteConfig.email}
                </a>
                <ContactIconBox>
                  <Mail size={16} />
                </ContactIconBox>
              </li>
              {siteConfig.addresses.map((addr, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-end"
                  style={{ gap: 12 }}
                >
                  <a
                    href={addr.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-[#C09040]"
                    style={contactTextStyle}
                  >
                    {pick(addr.addressEn, addr.addressAr)}
                  </a>
                  <ContactIconBox>
                    <MapPin size={16} />
                  </ContactIconBox>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <SectionTitle>{pick('Follow Us', 'تابعنا')}</SectionTitle>
            <div dir="ltr" className="flex items-center justify-center gap-3 md:justify-end">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center text-[rgba(255,255,255,0.55)] transition-all duration-300 hover:border-[#C09040] hover:text-[#C09040] hover:-translate-y-0.5"
                style={socialLinkStyle}
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="inline-flex items-center justify-center text-[rgba(255,255,255,0.55)] transition-all duration-300 hover:border-[#C09040] hover:text-[#C09040] hover:-translate-y-0.5"
                style={socialLinkStyle}
              >
                <XIcon size={18} />
              </a>
              <a
                href={siteConfig.social.instagram || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center text-[rgba(255,255,255,0.55)] transition-all duration-300 hover:border-[#C09040] hover:text-[#C09040] hover:-translate-y-0.5"
                style={socialLinkStyle}
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10"
        style={{ borderTop: `1px solid ${GOLD_BORDER}` }}
      >
        <div
          className="mx-auto flex flex-col items-center justify-center gap-3 px-[clamp(20px,5.5vw,80px)] py-5 text-center sm:flex-row sm:justify-between md:items-end md:justify-end md:text-start"
          style={{ maxWidth: 1360 }}
        >
          <span
            className="w-full md:w-auto"
            style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}
          >
            {t('copyright', { year: String(year) })}
          </span>
          <span
            className="inline-flex items-center gap-1.5"
            style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}
          >
            <GlobeIcon size={14} />
            <span>
              {pick('Powered by SUCCESS Group', 'مدعوم من مجموعة نجاح')}
            </span>
          </span>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 48px;
          text-align: center;
        }
        .footer-logo-col {
          align-items: center;
        }
        .footer-logo-img {
          width: 120px;
        }
        @media (min-width: 768px) {
          .footer-logo-img {
            width: 160px;
          }
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-logo-col {
            grid-column: 1 / -1;
            align-items: center;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.8fr 1fr 1.1fr 0.9fr;
            gap: 48px;
          }
          .footer-logo-col {
            grid-column: auto;
            align-items: flex-end;
          }
        }
      `}</style>
    </footer>
  );
}
