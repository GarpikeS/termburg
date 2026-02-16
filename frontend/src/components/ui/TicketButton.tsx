import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TicketButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function TicketButton({
  children,
  href,
  className,
}: TicketButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        clsx(
          'inline-flex items-center justify-center gap-2',
          'px-8 py-3.5 rounded-xl text-base font-medium',
          'bg-accent text-white',
          'shadow-sm hover:shadow-md',
          'hover:bg-accent-light',
          'transition-all duration-300 ease-out',
          'hover:-translate-y-0.5',
          'active:translate-y-0 active:shadow-sm',
          className,
        ),
      )}
    >
      {children}
    </a>
  );
}
