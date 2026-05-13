'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/motionVariants'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactContent() {
  const t = useTranslations('contact')
  const locale = useLocale()

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-brand-charcoal pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,151,58,0.06)_0%,transparent_70%)]" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center lg:px-12"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-semibold text-white md:text-5xl"
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
      </section>

      {/* Main Content: 2-column */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Contact Info + Map */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
                    <p className="text-sm text-brand-gray-dark">{t('info.phone.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-brand-dark">{t('info.email.label')}</p>
                    <p className="text-sm text-brand-gray-dark">{t('info.email.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-brand-dark">{t('info.address.label')}</p>
                    <p className="text-sm text-brand-gray-dark">{t('info.address.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="mt-0.5 shrink-0 text-brand-gold" />
                  <div>
                    <p className="font-medium text-brand-dark">{t('info.hours.label')}</p>
                    <p className="text-sm text-brand-gray-dark">{t('info.hours.value')}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 flex aspect-video w-full items-center justify-center bg-brand-beige">
                <span className="text-sm uppercase tracking-widest text-brand-gray">
                  {locale === 'ar' ? 'خريطة الموقع' : 'Map'}
                </span>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/966500000000"
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
              variants={slideInRight}
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
