import { useState, useMemo } from 'react';
import { Clock, Timer, User, CalendarDays, CalendarRange } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
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

function getWeekDates(): { day: string; date: Date }[] {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7));

  return daysOfWeek.map((name, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { day: name, date: d };
  });
}

function getMonthWeeks(): { day: string; date: Date }[][] {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const weeks: { day: string; date: Date }[][] = [];
  let current = new Date(firstDay);
  // rewind to Monday
  const dow = current.getDay();
  current.setDate(current.getDate() - ((dow + 6) % 7));

  while (current <= lastDay || weeks.length === 0) {
    const week: { day: string; date: Date }[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(current);
      week.push({ day: daysOfWeek[i], date: d });
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
    if (current > lastDay && week[6].date >= lastDay) break;
  }

  return weeks;
}

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

function eventsForDay(dayName: string, type: string): ScheduleEvent[] {
  return scheduleEvents.filter((e) => {
    const dayMatch = e.day.includes(dayName);
    const typeMatch = type === 'all' || e.type === type;
    return dayMatch && typeMatch;
  });
}

export default function SchedulePage() {
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [activeDay, setActiveDay] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('all');

  const weekDates = useMemo(getWeekDates, []);
  const monthWeeks = useMemo(getMonthWeeks, []);

  const filteredEvents = scheduleEvents.filter((event) => {
    const dayMatch = activeDay === 'all' || event.day.includes(activeDay);
    const typeMatch = activeType === 'all' || event.type === activeType;
    return dayMatch && typeMatch;
  });

  const today = new Date();

  return (
    <PageLayout title="Расписание" description="Расписание мероприятий термального комплекса Термбург.">
      <PageHero
        title="Расписание мероприятий"
        subtitle="Коллективные парения, аквааэробика, йога и суставная гимнастика"
        backgroundImage="/images/complex/gallery8.webp"
      />

      <Section>
        {/* View mode toggle */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={() => setViewMode('week')}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              viewMode === 'week'
                ? 'bg-primary text-background'
                : 'bg-surface text-text-secondary hover:bg-surface-warm border border-border/50'
            }`}
          >
            <CalendarDays className="h-4 w-4" />
            Неделя
          </button>
          <button
            onClick={() => setViewMode('month')}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              viewMode === 'month'
                ? 'bg-primary text-background'
                : 'bg-surface text-text-secondary hover:bg-surface-warm border border-border/50'
            }`}
          >
            <CalendarRange className="h-4 w-4" />
            Месяц
          </button>
        </div>

        {viewMode === 'week' ? (
          <>
            {/* Day filters */}
            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-text-secondary">День недели</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveDay('all')}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeDay === 'all'
                      ? 'bg-primary text-background'
                      : 'bg-surface text-text-secondary hover:bg-surface-warm border border-border/50'
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
                        ? 'bg-primary text-background'
                        : 'bg-surface text-text-secondary hover:bg-surface-warm border border-border/50'
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
                        ? 'bg-primary text-background'
                        : 'bg-surface text-text-secondary hover:bg-surface-warm border border-border/50'
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
          </>
        ) : (
          /* Month calendar view */
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
            {/* Month header */}
            <div className="bg-dark-surface py-4 px-6">
              <h3 className="text-center font-heading text-xl font-bold text-white">
                {monthNames[today.getMonth()]} {today.getFullYear()}
              </h3>
            </div>

            {/* Day names header */}
            <div className="grid grid-cols-7">
              {daysOfWeek.map((day, i) => (
                <div
                  key={day}
                  className={`py-3 text-center text-xs font-bold uppercase tracking-wider ${
                    i >= 5
                      ? 'bg-primary/5 text-primary'
                      : 'bg-surface-warm text-text-secondary'
                  }`}
                >
                  {dayShortNames[day]}
                </div>
              ))}
            </div>

            {/* Weeks */}
            {monthWeeks.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7">
                {week.map(({ day, date }, di) => {
                  const isCurrentMonth = date.getMonth() === today.getMonth();
                  const isToday = date.toDateString() === today.toDateString();
                  const isWeekend = di >= 5;
                  const dayEvents = eventsForDay(day, 'all');

                  return (
                    <div
                      key={di}
                      className={`min-h-[110px] p-2 border-t border-r border-border/20 last:border-r-0 transition-colors ${
                        isCurrentMonth
                          ? isWeekend ? 'bg-primary/[0.02]' : 'bg-white'
                          : 'bg-surface/30'
                      } ${isToday ? 'ring-2 ring-inset ring-primary/60 bg-primary/5' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-medium ${
                            isToday
                              ? 'bg-primary text-white font-bold'
                              : isCurrentMonth
                              ? 'text-text-primary'
                              : 'text-text-secondary/30'
                          }`}
                        >
                          {date.getDate()}
                        </span>
                        {dayEvents.length > 0 && isCurrentMonth && (
                          <span className="text-[10px] text-text-secondary/60">{dayEvents.length}</span>
                        )}
                      </div>
                      {isCurrentMonth && (
                        <div className="space-y-0.5">
                          {dayEvents.slice(0, 3).map((evt) => (
                            <div
                              key={evt.id}
                              className={`rounded-md px-1.5 py-0.5 text-[10px] leading-tight truncate font-medium ${
                                evt.type === 'free'
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                  : 'bg-blue-50 text-blue-700 border border-blue-100'
                              }`}
                              title={`${evt.time} — ${evt.name}`}
                            >
                              {evt.time} {evt.name.length > 12 ? evt.name.slice(0, 12) + '…' : evt.name}
                            </div>
                          ))}
                          {dayEvents.length > 3 && (
                            <p className="text-[10px] text-primary font-medium pl-1">
                              +{dayEvents.length - 3} ещё
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Legend */}
      <section className="border-t border-border bg-surface-warm py-8">
        <Container>
          <p className="mb-4 text-sm font-medium text-text-primary">Обозначения:</p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Badge variant="success">Бесплатно</Badge>
              <span className="text-sm text-text-secondary">—включено в стоимость посещения</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="info">Платно</Badge>
              <span className="text-sm text-text-secondary">—оплачивается отдельно</span>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
