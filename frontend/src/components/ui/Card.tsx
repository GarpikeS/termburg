import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-surface rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6',
          className,
        ),
      )}
    >
      {children}
    </div>
  );
}
