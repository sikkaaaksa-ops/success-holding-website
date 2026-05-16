'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/motionVariants'
import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/data/siteContent'
import PageBanner from '@/components/layout/PageBanner'

export default function ContactContent() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const pick = (en: string, ar: string) => (locale === 'ar' ? ar : en)

  return (
    <>
      {/* Page Hero */}
      <PageBanner className="min-h-[40vh] items-center justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center lg:px-12"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold text-white md:text-5xl"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>
      </PageBanner>

      {/* Main Content: 2-column */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Contact Info + Map */}
            <motion.div
              variants={isRtl ? slideInRight : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-start"
            >
              <h2 className="font-heading text-2xl font-semibold text-brand-dark">
                {t('info.title')}
              </h2>
              <div className="mt-3 flex items-center gap-2">
                <span className="block h-0.5 w-8 bg-brand-gold" />
                <span className="block h-0.5 w-2 bg-brand-gold" />
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-brand-dark">{t('info.phone.label')}</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      dir="ltr"
                      className="text-sm text-brand-gray-dark transition-colors hover:text-brand-gold"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-brand-dark">{t('info.email.label')}</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      dir="ltr"
                      className="text-sm text-brand-gray-dark transition-colors hover:text-brand-gold"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-brand-dark">{t('info.address.label')}</p>
                    <ul className="mt-1 space-y-3">
                      {siteConfig.addresses.map((addr, index) => (
                        <li key={index}>
                          <a
                            href={addr.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-gray-dark transition-colors hover:text-brand-gold"
                          >
                            {pick(addr.addressEn, addr.addressAr)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-brand-dark">{t('info.hours.label')}</p>
                    <p className="text-sm text-brand-gray-dark">
                      {pick(siteConfig.workingHoursEn, siteConfig.workingHoursAr)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <motion.div
                  style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=21.5433,39.1728&z=15&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href="https://maps.app.goo.gl/mJMpxXJ2vZqxTfvy5"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#C09040',
                      color: 'white',
                      padding: '10px 24px',
                      fontSize: '14px',
                      textDecoration: 'none',
                      zIndex: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    📍 افتح الخريطة
                  </a>
                </motion.div>
                <motion.div
                  style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=21.5380,39.1920&z=15&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href="https://maps.app.goo.gl/baMud45wsjooFFGq5"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#C09040',
                      color: 'white',
                      padding: '10px 24px',
                      fontSize: '14px',
                      textDecoration: 'none',
                      zIndex: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    📍 افتح الخريطة
                  </a>
                </motion.div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                <MessageCircle size={20} />
                {locale === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </a>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              variants={isRtl ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
