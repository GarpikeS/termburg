import { useState } from 'react';
import { Clock, Timer, User } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import { scheduleEvents, daysOfWeek, type ScheduleEvent } from '@/data/schedule';

const dayShortNames: Record<string, string> = {
  Понедельник: 'Пн',
  Вторник: 'Вт',
  Среда: 'Ср',
  Четверг: 'Чт',
  Пятница: 'Пт',
  Суббота: 'Сб',
  Воскресенье: 'Вс',
};

const typeFilters = [
  { id: 'all', label: 'Все' },
  { id: 'free', label: 'Бесплатные' },
  { id: 'paid', label: 'Платные' },
  { id: 'senior', label: 'Для пенсионеров' },
];

function getTypeBadge(event: ScheduleEvent) {
  switch (event.type) {
    case 'free':
      return <Badge variant="success">Бесплатно</Badge>;
    case 'paid':
      return <Badge variant="info">{event.price ? `${event.price} \u20BD` : 'Платно'}</Badge>;
    case 'senior':
      return <Badge variant="gold">Для пенсионеров</Badge>;
    default:
      return null;
  }
}

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('all');

  const filteredEvents = scheduleEvents.filter((event) => {
    const dayMatch = activeDay === 'all' || event.day.includes(activeDay);
    const typeMatch = activeType === 'all' || event.type === activeType;
    return dayMatch && typeMatch;
  });

  return (
    <PageLayout title="Расписание" description="Расписание мероприятий термального комплекса Термбург.">
      {/* Hero */}
      <section className="bg-primary py-16 text-center text-white md:py-20">
        <Container>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">Расписание мероприятий</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Ежедневные парения, медитации, мастер-классы и оздоровительные программы
          </p>
        </Container>
      </section>

      <Section>
        {/* Day filters */}
        <div className="mb-6">
          <p className="mb-3 text-sm font-medium text-text-secondary">День недели</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveDay('all')}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeDay === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-surface-warm'
              }`}
            >
              Все
            </button>
            {daysOfWeek.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeDay === day
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text-secondary hover:bg-surface-warm'
                }`}
              >
                {dayShortNames[day]}
              </button>
            ))}
          </div>
        </div>

        {/* Type filters */}
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-text-secondary">Тип мероприятия</p>
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveType(filter.id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeType === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text-secondary hover:bg-surface-warm'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card key={event.id}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-text-primary">{event.name}</h3>
                  {getTypeBadge(event)}
                </div>
                <p className="mb-4 text-sm text-text-secondary">{event.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Timer className="h-4 w-4" />
                    {event.duration}
                  </span>
                  {event.instructor && (
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {event.instructor}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {event.day.map((d) => (
                    <span
                      key={d}
                      className="rounded bg-surface-warm px-2 py-0.5 text-xs text-text-secondary"
                    >
                      {dayShortNames[d]}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-text-secondary">
              Нет мероприятий по выбранным фильтрам
            </p>
          </div>
        )}
      </Section>

      {/* Legend */}
      <section className="border-t border-gray-200 bg-surface-warm py-8">
        <Container>
          <p className="mb-4 text-sm font-medium text-text-primary">Обозначения:</p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Badge variant="success">Бесплатно</Badge>
              <span className="text-sm text-text-secondary">-- включено в стоимость посещения</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="info">Платно</Badge>
              <span className="text-sm text-text-secondary">-- оплачивается отдельно</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="gold">Для пенсионеров</Badge>
              <span className="text-sm text-text-secondary">-- специальная программа</span>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
