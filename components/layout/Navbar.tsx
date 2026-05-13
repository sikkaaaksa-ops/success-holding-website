'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const NAV_ITEMS = [
  { key: 'home', href: '' },
  { key: 'about', href: '/about' },
  { key: 'sectors', href: '/sectors' },
  { key: 'companies', href: '/subsidiaries' },
  { key: 'structure', href: '/structure' },
  { key: 'projects', href: '/projects' },
  { key: 'partners', href: '/partners' },
  { key: 'news', href: '/news' },
  { key: 'careers', href: '/careers' },
  { key: 'contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    const full = `/${locale}${href}`;
    if (href === '') return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(full);
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-brand-charcoal shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="font-heading text-2xl tracking-[0.25em] text-brand-gold uppercase"
            >
              SUCCESS
            </Link>

            {/* Desktop nav */}
            <div className="hidden xl:flex items-center gap-6">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className={`relative text-sm font-body tracking-wide transition-colors duration-300 ${
                      active
                        ? 'text-brand-gold'
                        : 'text-brand-gray hover:text-brand-gold-light'
                    }`}
                  >
                    {t(item.key)}
                    {active && (
                      <span className="absolute -bottom-1 inset-x-0 h-0.5 bg-brand-gold" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop right section */}
            <div className="hidden xl:flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                href={`/${locale}/contact`}
                className="border-2 border-brand-gold text-brand-gold px-5 py-2 text-sm font-body uppercase tracking-wider transition-all duration-300 hover:bg-brand-gold hover:text-white"
              >
                {t('contactUs')}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden text-brand-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-brand-charcoal flex flex-col"
          >
            <div className="flex items-center justify-between h-20 px-4 sm:px-6">
              <Link
                href={`/${locale}`}
                className="font-heading text-2xl tracking-[0.25em] text-brand-gold uppercase"
              >
                SUCCESS
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-brand-white p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-6 overflow-y-auto">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.key}
                    href={`/${locale}${item.href}`}
                    className={`text-lg font-body tracking-wide transition-colors duration-300 ${
                      active ? 'text-brand-gold' : 'text-brand-gray hover:text-brand-gold-light'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col items-center gap-4 pb-10">
              <LanguageSwitcher />
              <Link
                href={`/${locale}/contact`}
                className="border-2 border-brand-gold text-brand-gold px-6 py-2.5 text-sm font-body uppercase tracking-wider transition-all duration-300 hover:bg-brand-gold hover:text-white"
              >
                {t('contactUs')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
