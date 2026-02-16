import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import { scheduleEvents, type ScheduleEvent } from '@/data/schedule';

const typeBadge: Record<
  ScheduleEvent['type'],
  { variant: 'success' | 'info' | 'gold'; label: string }
> = {
  free: { variant: 'success', label: 'Бесплатно' },
  paid: { variant: 'info', label: 'Платно' },
  senior: { variant: 'gold', label: 'Для пенсионеров' },
};

export default function SchedulePreviewSection() {
  const previewEvents = scheduleEvents.slice(0, 4);

  return (
    <Section
      warm
      title="Расписание мероприятий"
      subtitle="Ежедневные программы для здоровья и отдыха"
    >
      <div className="max-w-2xl mx-auto space-y-3">
        {previewEvents.map((event) => {
          const badge = typeBadge[event.type];
          return (
            <div
              key={event.id}
              className="flex items-center gap-4 bg-surface rounded-xl p-4 shadow-sm"
            >
              <div className="min-w-[60px] text-center">
                <span className="font-heading text-lg font-bold text-primary">
                  {event.time}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-text-primary truncate">
                  {event.name}
                </h3>
                <p className="text-sm text-text-secondary">{event.duration}</p>
              </div>
              <Badge variant={badge.variant} className="flex-shrink-0">
                {badge.label}
              </Badge>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/schedule"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
        >
          Полное расписание
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
