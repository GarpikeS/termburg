import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
  const previewEvents = scheduleEvents.slice(0, 5);

  return (
    <div>
      <h3 className="font-heading text-2xl font-bold text-white mb-4">
        Расписание мероприятий
      </h3>
      <div className="space-y-3">
        {previewEvents.map((event) => {
          const badge = typeBadge[event.type];
          return (
            <div
              key={event.id}
              className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="min-w-[60px] text-center">
                <span className="font-heading text-lg font-bold text-primary">
                  {event.time}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-white truncate">
                  {event.name}
                </h4>
                <p className="text-sm text-white/60">{event.duration}</p>
              </div>
              <Badge variant={badge.variant} className="flex-shrink-0">
                {badge.label}
              </Badge>
            </div>
          );
        })}
      </div>

      <div className="mt-5 text-center">
        <Link
          to="/schedule"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
        >
          Полное расписание
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
