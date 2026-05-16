'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations, useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required').email('Invalid email'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Required'),
  message: z.string().min(10, 'Minimum 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const subjectOptions = [
  { value: 'general', labelEn: 'General Inquiry', labelAr: 'استفسار عام' },
  { value: 'partnership', labelEn: 'Partnership', labelAr: 'شراكة' },
  { value: 'investment', labelEn: 'Investment', labelAr: 'استثمار' },
  { value: 'careers', labelEn: 'Careers', labelAr: 'وظائف' },
  { value: 'media', labelEn: 'Media', labelAr: 'إعلام' },
  { value: 'other', labelEn: 'Other', labelAr: 'أخرى' },
]

export default function ContactForm() {
  const t = useTranslations('contact.form')
  const locale = useLocale()
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const prefilledSubject = searchParams.get('subject') || ''

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: prefilledSubject ? prefilledSubject.toLowerCase() : '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setServerError(locale === 'ar' ? 'حدث خطأ. يرجى المحاولة لاحقًا.' : 'Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-none bg-white p-12 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <CheckCircle className="mb-4 text-green-600" size={48} />
        <h3 className="font-heading text-xl font-semibold text-brand-dark">
          {t('success.title')}
        </h3>
        <p className="mt-2 text-sm text-brand-gray-dark">
          {t('success.message')}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 text-start shadow-[0_2px_20px_rgba(0,0,0,0.06)] lg:p-10"
    >
      <h2 className="font-heading text-2xl font-semibold text-brand-dark">
        {t('title')}
      </h2>
      <div className="mt-3 flex items-center gap-2">
        <span className="block h-0.5 w-8 bg-brand-gold" />
        <span className="block h-0.5 w-2 bg-brand-gold" />
      </div>

      <div className="mt-8 space-y-5">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            {t('name')} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            className="w-full border border-brand-gray/30 bg-brand-offwhite px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray outline-none transition-colors focus:border-brand-gold"
            placeholder={t('namePlaceholder')}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            {t('email')} <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full border border-brand-gray/30 bg-brand-offwhite px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray outline-none transition-colors focus:border-brand-gold"
            placeholder={t('emailPlaceholder')}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            {t('phone')}
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full border border-brand-gray/30 bg-brand-offwhite px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray outline-none transition-colors focus:border-brand-gold"
            placeholder={t('phonePlaceholder')}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            {t('subject')} <span className="text-red-500">*</span>
          </label>
          <select
            {...register('subject')}
            className="w-full border border-brand-gray/30 bg-brand-offwhite px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand-gold"
          >
            <option value="">{t('subjectPlaceholder')}</option>
            {subjectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {locale === 'ar' ? opt.labelAr : opt.labelEn}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-brand-dark">
            {t('message')} <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="w-full resize-none border border-brand-gray/30 bg-brand-offwhite px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray outline-none transition-colors focus:border-brand-gold"
            placeholder={t('messagePlaceholder')}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {serverError && (
          <p className="text-sm text-red-500">{serverError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-gold px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-gold-light disabled:opacity-50"
        >
          {isSubmitting
            ? (locale === 'ar' ? 'جارٍ الإرسال...' : 'Sending...')
            : t('submit')}
        </button>
      </div>
    </form>
  )
}
