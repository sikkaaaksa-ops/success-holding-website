'use client';

import Link from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps>;

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof ButtonBaseProps>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-gold text-white hover:bg-brand-gold-light',
  outline:
    'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white',
  ghost:
    'text-brand-gold hover:bg-brand-gold/10',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center font-body uppercase tracking-wider',
    'transition-all duration-300',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as Omit<ComponentPropsWithoutRef<'a'>, 'className'>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as Omit<ComponentPropsWithoutRef<'button'>, 'className'>)}
    >
      {children}
    </button>
  );
}
