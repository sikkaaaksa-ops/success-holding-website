'use client';

import { useEffect, useRef } from 'react';
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  motion,
} from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    return Math.round(latest).toLocaleString();
  });
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration,
        ease: 'easeOut',
      });
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
