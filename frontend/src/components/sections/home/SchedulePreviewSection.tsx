import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { scheduleEvents, type ScheduleEvent } from '@/data/schedule';

export default function SchedulePreviewSection() {
  const { openPurchase } = useBooking();
  const navigate = useNavigate();
  const previewEvents = scheduleEvents.slice(0, 5);

  return (
    <div>
      <h3 className="font-heading text-2xl font-bold text-white mb-4">
        Расписание мероприятий
      </h3>
      <div className="space-y-2.5">
        {previewEvents.map((event) => {
          const isPaid = event.type === 'paid';
          return (
            <div
              key={event.id}
              className="flex items-center gap-4 rounded-xl p-4 transition-colors bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10"
              onClick={() => {
                if (isPaid && event.price) {
                  openPurchase({ name: event.name, price: `${event.price} \u20BD` });
                } else {
                  navigate('/schedule');
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="min-w-[52px] text-center">
                <span className="font-heading text-lg font-bold text-primary">
                  {event.time}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-white text-sm truncate">
                  {event.name}
                </h4>
                <p className="text-xs text-white/50">{event.duration}</p>
              </div>
              {isPaid && event.price ? (
                <span className="flex items-center gap-1 text-sm font-bold text-primary flex-shrink-0">
                  {event.price} &#8381;
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </span>
              ) : (
                <span className="text-xs text-emerald-400 font-medium flex-shrink-0">
                  Бесплатно
                </span>
              )}
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
