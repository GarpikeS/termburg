import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  warm?: boolean;
}

export default function Section({
  children,
  className,
  title,
  subtitle,
  id,
  warm = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={twMerge(
        clsx(
          'section-padding',
          warm ? 'bg-surface-warm' : 'bg-background',
          className,
        ),
      )}
    >
      <Container>
        {title && (
          <div className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary text-center">
              {title}
            </h2>
            {subtitle && (
              <p className="text-text-secondary text-lg text-center mt-4 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
