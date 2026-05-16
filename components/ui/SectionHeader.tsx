'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'start' | 'center' | 'left';
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${isCenter ? 'text-center' : 'text-start'}`}
    >
      <h2 className="font-display text-3xl lg:text-4xl text-brand-dark mb-4">
        {title}
      </h2>
      <div
        className={`w-12 h-0.5 bg-brand-gold mb-4 ${
          isCenter ? 'mx-auto' : 'ms-0'
        }`}
      />
      {subtitle && (
        <p
          className={`text-brand-gray-dark text-base max-w-xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
