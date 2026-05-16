'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Target, Eye, Shield, Users, Lightbulb, Heart } from 'lucide-react'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/motionVariants'

const ABOUT_HERO_IMAGE = '/images/about/about-hero.png'
const ABOUT_OFFICE_IMAGE = '/images/about/about-office.png'

const ABOUT_PAGE_COPY = {
  ar: {
    hero: {
      title: 'نبني المستقبل بثقة',
      subtitle: 'أكثر من 25 عامًا من النمو، التنوع، وصناعة الأثر.',
    },
    paragraphs: [
      'تأسست شركة SUCCESS القابضة عام 1999، وانطلقت برؤية طموحة نحو بناء منظومة أعمال متكاملة تقود النمو والاستثمار المستدام في المملكة العربية السعودية. تتخصص المجموعة في حاضنات الأعمال وتطوير المشاريع، مع التركيز على دعم الابتكار وبناء الفرص النوعية في قطاعات متعددة.',
      'ومن خلال التنويع الاستراتيجي والالتزام بأعلى معايير الجودة، نمت المجموعة لتصبح واحدة من أكثر الشركات القابضة ديناميكية في المملكة، حيث تعمل اليوم عبر 11 قطاعًا رئيسيًا تشمل الاستثمار، التقنية، العقارات، المقاولات، الخدمات اللوجستية، والتشغيل والتطوير وغيرها من القطاعات الحيوية.',
      'نؤمن في SUCCESS بأن النجاح المستدام يبدأ من الرؤية الواضحة، والشراكات القوية، والاستثمار في الأفكار القادرة على صناعة أثر حقيقي للمستقبل.',
    ],
    vision: {
      title: 'رؤيتنا',
      text: 'أن نكون نموذجًا رائدًا في بناء وتطوير الأعمال والاستثمارات المستدامة، عبر خلق منظومة متكاملة تدعم الابتكار وتمكّن القطاعات الحيوية من النمو محليًا وإقليميًا، مع المساهمة في جذب الاستثمارات الخارجية وتعزيز البيئة الاستثمارية في المملكة.',
    },
    mission: {
      title: 'رسالتنا',
      text: 'نلتزم في SUCCESS القابضة بتطوير فرص نوعية واستثمارات مؤثرة من خلال التنويع الاستراتيجي، وحاضنات الأعمال، والشراكات الفعالة، واستقطاب الاستثمارات الخارجية، مع التركيز على الجودة والاستدامة وصناعة أثر اقتصادي طويل المدى.',
    },
  },
  en: {
    hero: {
      title: 'Building the Future with Confidence',
      subtitle: 'Over 25 years of growth, diversification, and lasting impact.',
    },
    paragraphs: [
      'Founded in 1999, SUCCESS Holding began with an ambitious vision to build an integrated business ecosystem that drives sustainable growth and investment across Saudi Arabia. The Group specializes in business incubation and project development, with a focus on fostering innovation and creating distinctive opportunities across multiple sectors.',
      'Through strategic diversification and an unwavering commitment to quality, the Group has grown into one of the Kingdom’s most dynamic holding companies, operating today across 11 core sectors including investment, technology, real estate, contracting, logistics, operations and development, and other vital industries.',
      'At SUCCESS, we believe sustainable success begins with a clear vision, strong partnerships, and investment in ideas capable of creating meaningful impact for the future.',
    ],
    vision: {
      title: 'Our Vision',
      text: 'To be a leading model in building and developing sustainable businesses and investments, by creating an integrated ecosystem that supports innovation and enables vital sectors to grow locally and regionally, while attracting foreign investment and strengthening the investment environment in the Kingdom.',
    },
    mission: {
      title: 'Our Mission',
      text: 'SUCCESS Holding is committed to developing distinctive opportunities and impactful investments through strategic diversification, business incubation, effective partnerships, and attracting foreign investment, with a focus on quality, sustainability, and long-term economic impact.',
    },
  },
} as const

const values = [
  { icon: Shield, key: 'integrity' },
  { icon: Lightbulb, key: 'innovation' },
  { icon: Users, key: 'collaboration' },
  { icon: Heart, key: 'excellence' },
]

export default function AboutContent() {
  const t = useTranslations('about')
  const locale = useLocale()
  const isRtl = locale === 'ar'
  const copy = ABOUT_PAGE_COPY[locale === 'ar' ? 'ar' : 'en']

  return (
    <>
      {/* Hero — full-bleed background */}
      <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden pt-16 md:min-h-[72vh]">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <Image
            src={ABOUT_HERO_IMAGE}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/65 to-black/80"
          aria-hidden
        />
        <motion.div
          className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(192,144,64,0.12)_0%,transparent_55%)]"
          aria-hidden
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center lg:px-12 lg:py-32"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            {copy.hero.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-heading mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            {copy.hero.subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* About content — text + image */}
      <section className="py-20 lg:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-12"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={isRtl ? slideInRight : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-start"
            >
              {copy.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base text-brand-gray-dark md:text-[17px] ${
                    index > 0 ? 'mt-7' : ''
                  }`}
                  style={{ lineHeight: 1.88 }}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={isRtl ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <Image
                src={ABOUT_OFFICE_IMAGE}
                alt={isRtl ? 'مكاتب مجموعة نجاح' : 'SUCCESS Group offices'}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
                aria-hidden
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-beige py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12" dir={isRtl ? 'rtl' : 'ltr'}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
          >
            <motion.article
              variants={fadeUp}
              className="relative overflow-hidden bg-white p-10 text-start shadow-[0_4px_32px_rgba(0,0,0,0.07)] md:p-12"
            >
              <span
                className="absolute inset-y-0 start-0 w-1 bg-[#C09040]"
                aria-hidden
              />
              <Eye className="mb-5 text-[#C09040]" size={36} strokeWidth={1.5} />
              <h3 className="font-heading text-2xl font-semibold text-brand-dark md:text-[1.65rem]">
                {copy.vision.title}
              </h3>
              <p
                className="mt-5 text-base text-brand-gray-dark md:text-[17px]"
                style={{ lineHeight: 1.88 }}
              >
                {copy.vision.text}
              </p>
            </motion.article>

            <motion.article
              variants={fadeUp}
              className="relative overflow-hidden bg-white p-10 text-start shadow-[0_4px_32px_rgba(0,0,0,0.07)] md:p-12"
            >
              <span
                className="absolute inset-y-0 start-0 w-1 bg-[#C09040]"
                aria-hidden
              />
              <Target className="mb-5 text-[#C09040]" size={36} strokeWidth={1.5} />
              <h3 className="font-heading text-2xl font-semibold text-brand-dark md:text-[1.65rem]">
                {copy.mission.title}
              </h3>
              <p
                className="mt-5 text-base text-brand-gray-dark md:text-[17px]"
                style={{ lineHeight: 1.88 }}
              >
                {copy.mission.text}
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-12"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="font-display text-3xl font-semibold text-brand-dark md:text-4xl">
              {t('values.title')}
            </h2>
            <motion.div className="mt-4 flex items-center justify-center gap-2">
              <span className="block h-0.5 w-8 bg-brand-gold" />
              <span className="block h-0.5 w-2 bg-brand-gold" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.key}
                  variants={fadeUp}
                  className="bg-white p-8 text-center shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="mx-auto mb-4 text-brand-gold" size={32} />
                  <h4 className="font-heading text-lg font-semibold text-brand-dark">
                    {t(`values.${v.key}.title`)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-brand-gray-dark">
                    {t(`values.${v.key}.description`)}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
