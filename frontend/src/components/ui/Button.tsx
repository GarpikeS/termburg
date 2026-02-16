import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  href?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    'bg-primary text-background hover:bg-primary-light active:bg-primary shadow-sm hover:shadow-md',
  accent:
    'bg-accent text-white hover:bg-accent-light active:bg-accent shadow-sm hover:shadow-md',
  outline:
    'border-2 border-primary text-primary hover:bg-primary hover:text-background',
  ghost:
    'text-primary hover:bg-surface-warm active:bg-surface-warm/80',
};

const sizeStyles: Record<string, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-base rounded-xl',
  lg: 'px-8 py-3.5 text-lg rounded-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = twMerge(
    clsx(
      'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none',
      variantStyles[variant],
      sizeStyles[size],
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      className,
    ),
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
