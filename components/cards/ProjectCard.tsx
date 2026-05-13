'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp } from '@/lib/motionVariants'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  locale: string
}

const statusStyles: Record<Project['status'], string> = {
  completed: 'bg-green-100 text-green-800',
  ongoing: 'bg-amber-50 text-brand-gold',
  upcoming: 'bg-gray-100 text-brand-gray-dark',
}

const statusLabels: Record<Project['status'], Record<string, string>> = {
  completed: { en: 'Completed', ar: 'مكتمل' },
  ongoing: { en: 'Ongoing', ar: 'جارٍ' },
  upcoming: { en: 'Upcoming', ar: 'قادم' },
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  const name = project.name[locale as 'en' | 'ar']
  const description = project.description[locale as 'en' | 'ar']
  const lang = locale as 'en' | 'ar'

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="group block bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
      >
        <div className="flex aspect-video items-center justify-center bg-brand-beige">
          <span className="text-xs uppercase tracking-widest text-brand-gray">
            {locale === 'ar' ? 'صورة المشروع' : 'Project Image'}
          </span>
        </div>

        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-none bg-brand-offwhite px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-brand-gold">
              {project.sector}
            </span>
            <span className={`inline-block rounded-none px-2 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}>
              {statusLabels[project.status][lang]}
            </span>
          </div>

          <h3 className="font-heading text-xl font-semibold text-brand-dark">
            {name}
          </h3>
          <p className="mt-1 text-xs text-brand-gray-dark">{project.year}</p>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-gray-dark">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
