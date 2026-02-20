import { useState, useMemo } from 'react';
import { Clock, Timer, ChevronRight, ChevronLeft, Calendar, List, X } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { useBooking } from '@/context/BookingContext';
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

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

function getCurrentDayName(): string {
  const jsDay = new Date().getDay();
  const idx = jsDay === 0 ? 6 : jsDay - 1;
  return daysOfWeek[idx];
}

function getDayNameByDate(date: Date): string {
  const jsDay = date.getDay();
  const idx = jsDay === 0 ? 6 : jsDay - 1;
  return daysOfWeek[idx];
}

function eventsForDay(dayName: string): ScheduleEvent[] {
  return scheduleEvents.filter((e) => e.day.includes(dayName));
}

function EventRow({ event, showDays }: { event: ScheduleEvent; showDays?: boolean }) {
  const { openPurchase } = useBooking();
  const isPaid = event.type === 'paid';
  const isSpecial = event.type === 'special';

  const borderClass = isSpecial
    ? 'bg-amber-50 border border-amber-300/50 hover:border-amber-400/70'
    : isPaid
      ? 'bg-surface border border-primary/15 hover:border-primary/30 cursor-pointer'
      : 'bg-surface border border-border/40';

  const barClass = isSpecial ? 'bg-amber-400' : isPaid ? 'bg-primary/40' : 'bg-emerald-400/40';

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 ${borderClass}`}
      onClick={() => {
        if (isPaid && event.price) {
          openPurchase({ name: event.name, price: `${event.price} \u20BD` });
        }
      }}
      role={isPaid ? 'button' : undefined}
      tabIndex={isPaid ? 0 : undefined}
    >
      <div className="flex-shrink-0 w-14 text-center">
        <span className={`font-heading text-lg font-bold ${isSpecial ? 'text-amber-600' : 'text-primary'}`}>{event.time}</span>
      </div>
      <div className={`w-0.5 self-stretch rounded-full ${barClass}`} />
      <div className="flex-1 min-w-0">
        <h3 className={`font-medium text-sm ${isSpecial ? 'text-amber-800 font-bold' : 'text-text-primary'}`}>
          {isSpecial && <span className="mr-1">🌲</span>}
          {event.name}
        </h3>
        <div className="flex items-center gap-2 mt-0.5 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <Timer className="w-3 h-3" />
            {event.duration}
          </span>
          {event.instructor && <span>{event.instructor}</span>}
          {showDays && (
            <span className="text-text-secondary/60">
              {event.day.length === 7
                ? 'Ежедневно'
                : event.day.map((d) => dayShortNames[d]).join(', ')}
            </span>
          )}
        </div>
      </div>
      <div className="flex-shrink-0">
        {isSpecial ? (
          <span className="inline-block rounded-full bg-amber-100 text-amber-700 px-2.5 py-0.5 text-xs font-semibold">
            Особое
          </span>
        ) : isPaid && event.price ? (
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-primary">{event.price} &#8381;</span>
            <ChevronRight className="w-3.5 h-3.5 text-primary/50" />
          </div>
        ) : (
          <span className="inline-block rounded-full bg-emerald-500/10 text-emerald-600 px-2.5 py-0.5 text-xs font-semibold">
            Бесплатно
          </span>
        )}
      </div>
    </div>
  );
}

/* ---- Calendar ---- */

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  let startOffset = firstDay.getDay() - 1;
  if (startOffset < 0) startOffset = 6;
  return { daysInMonth, startOffset };
}

interface CalendarProps {
  year: number;
  month: number;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function DayCell({
  date,
  isSelected,
  isToday,
  onSelect,
}: {
  date: Date;
  isSelected: boolean;
  isToday: boolean;
  onSelect: (date: Date) => void;
}) {
  const dayName = getDayNameByDate(date);
  const dayEvents = eventsForDay(dayName);
  const hasPaid = dayEvents.some((e) => e.type === 'paid');
  const hasFree = dayEvents.some((e) => e.type === 'free');
  const hasSpecial = dayEvents.some((e) => e.type === 'special');

  return (
    <button
      type="button"
      onClick={() => onSelect(date)}
      className={`aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all duration-150 text-xs ${
        isSelected
          ? 'bg-primary text-white font-bold shadow-sm shadow-primary/20'
          : isToday
            ? 'bg-primary/15 text-primary font-bold ring-1 ring-primary/30'
            : 'hover:bg-surface-warm text-text-primary'
      }`}
    >
      <span>{date.getDate()}</span>
      {dayEvents.length > 0 && (
        <div className="flex gap-px">
          {hasFree && <span className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white/70' : 'bg-emerald-500'}`} />}
          {hasPaid && <span className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white/70' : 'bg-primary'}`} />}
          {hasSpecial && <span className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white/70' : 'bg-amber-500'}`} />}
        </div>
      )}
    </button>
  );
}

function CalendarPanel({ year, month, selectedDate, onSelectDate, onPrevMonth, onNextMonth }: CalendarProps) {
  const { daysInMonth, startOffset } = getMonthDays(year, month);
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button type="button" onClick={onPrevMonth} className="rounded-lg p-1.5 hover:bg-surface-warm text-text-secondary hover:text-text-primary transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h3 className="font-heading text-base font-bold text-text-primary">
          {monthNames[month]} {year}
        </h3>
        <button type="button" onClick={onNextMonth} className="rounded-lg p-1.5 hover:bg-surface-warm text-text-secondary hover:text-text-primary transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (
          <div key={d} className="text-center text-[11px] font-medium text-text-secondary py-1.5">{d}</div>
        ))}
      </div>

      {/* Cells */}
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} className="aspect-square" />;
          const date = new Date(year, month, day);
          const isToday = isCurrentMonth && today.getDate() === day;
          const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
          return (
            <DayCell
              key={day}
              date={date}
              isSelected={!!isSelected}
              isToday={isToday}
              onSelect={onSelectDate}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-border/50 text-[10px] text-text-secondary">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Бесплатно
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Платно
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          Особое
        </span>
      </div>
    </div>
  );
}

/* ---- Full-page month calendar ---- */

function FullMonthCalendar({
  year,
  month,
  onPrevMonth,
  onNextMonth,
}: {
  year: number;
  month: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}) {
  const { openPurchase } = useBooking();
  const { daysInMonth, startOffset } = getMonthDays(year, month);
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const expandedEvents = expandedDay
    ? eventsForDay(getDayNameByDate(new Date(year, month, expandedDay)))
    : [];

  return (
    <div>
      {/* Month nav */}
      <div className="flex items-center justify-between mb-6">
        <button type="button" onClick={onPrevMonth} className="rounded-xl p-2.5 hover:bg-surface-warm text-text-secondary hover:text-text-primary transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-heading text-2xl font-bold text-text-primary">
          {monthNames[month]} {year}
        </h3>
        <button type="button" onClick={onNextMonth} className="rounded-xl p-2.5 hover:bg-surface-warm text-text-secondary hover:text-text-primary transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 border-b border-border mb-0">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (
          <div key={d} className="text-center text-sm font-semibold text-text-secondary py-3">{d}</div>
        ))}
      </div>

      {/* Cells grid */}
      <div className="grid grid-cols-7 border-l border-border">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`e-${i}`} className="min-h-[100px] sm:min-h-[120px] border-r border-b border-border bg-surface-warm/30" />;
          }
          const date = new Date(year, month, day);
          const isToday = isCurrentMonth && today.getDate() === day;
          const dayName = getDayNameByDate(date);
          const dayEvts = eventsForDay(dayName);
          const isExpanded = expandedDay === day;

          return (
            <button
              key={day}
              type="button"
              onClick={() => setExpandedDay(isExpanded ? null : day)}
              className={`min-h-[100px] sm:min-h-[120px] border-r border-b border-border p-1.5 sm:p-2 text-left flex flex-col transition-colors ${
                isExpanded
                  ? 'bg-primary/5 ring-2 ring-primary/30 ring-inset'
                  : 'hover:bg-surface-warm/60'
              }`}
            >
              <span className={`text-sm font-medium mb-1 w-7 h-7 flex items-center justify-center rounded-full ${
                isToday
                  ? 'bg-primary text-white font-bold'
                  : 'text-text-primary'
              }`}>
                {day}
              </span>
              <div className="flex flex-col gap-0.5 flex-1 w-full overflow-hidden">
                {dayEvts.slice(0, 4).map((evt) => {
                  const colorClass =
                    evt.type === 'special'
                      ? 'bg-amber-100 text-amber-700 border-amber-200'
                      : evt.type === 'paid'
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200';
                  return (
                    <div
                      key={evt.id}
                      className={`text-[10px] sm:text-xs leading-tight px-1 sm:px-1.5 py-0.5 rounded border truncate ${colorClass}`}
                    >
                      <span className="font-semibold">{evt.time}</span>{' '}
                      <span className="hidden sm:inline">{evt.name.length > 18 ? evt.name.slice(0, 18) + '…' : evt.name}</span>
                    </div>
                  );
                })}
                {dayEvts.length > 4 && (
                  <span className="text-[10px] text-text-secondary">+{dayEvts.length - 4} ещё</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded day detail */}
      {expandedDay && expandedEvents.length > 0 && (
        <div className="mt-6 rounded-2xl bg-surface border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-heading text-lg font-bold text-text-primary">
              {new Date(year, month, expandedDay).toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}
            </h4>
            <button
              type="button"
              onClick={() => setExpandedDay(null)}
              className="rounded-lg p-1.5 hover:bg-surface-warm text-text-secondary hover:text-text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            {expandedEvents.map((event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-text-secondary">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded border border-emerald-200 bg-emerald-50" />
          Бесплатно
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded border border-primary/20 bg-primary/10" />
          Платно
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded border border-amber-200 bg-amber-100" />
          Особое
        </span>
      </div>
    </div>
  );
}

/* ---- Main Page ---- */

export default function SchedulePage() {
  const currentDay = getCurrentDayName();
  const now = new Date();

  const [activeDay, setActiveDay] = useState(currentDay);
  const [calYear, setCalYear] = useState(now.getFullYear());
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date>(now);
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  const displayDayName = getDayNameByDate(selectedDate);
  const dayEvents = useMemo(() => eventsForDay(displayDayName), [displayDayName]);

  function prevMonth() {
    if (calMonth === 0) { setCalMonth(11); setCalYear((y) => y - 1); }
    else setCalMonth((m) => m - 1);
  }
  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear((y) => y + 1); }
    else setCalMonth((m) => m + 1);
  }

  function handleDateSelect(date: Date) {
    setSelectedDate(date);
    setActiveDay(getDayNameByDate(date));
  }

  function handleDayTab(day: string) {
    setActiveDay(day);
    for (let d = 1; d <= 31; d++) {
      const date = new Date(calYear, calMonth, d);
      if (date.getMonth() !== calMonth) break;
      if (getDayNameByDate(date) === day) {
        setSelectedDate(date);
        break;
      }
    }
  }

  return (
    <PageLayout title="Расписание" description="Расписание мероприятий термального комплекса Термбург.">
      <PageHero
        title="Расписание"
        subtitle="Коллективные парения, аквааэробика, йога и другие мероприятия"
        backgroundImage="/images/complex/gallery8.webp"
      />

      <Section>
        {/* View mode toggle */}
        <div className="flex items-center gap-4 mb-8">
          <div className="inline-flex rounded-xl bg-surface-warm p-1 gap-1">
            <button
              type="button"
              onClick={() => setViewMode('week')}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                viewMode === 'week'
                  ? 'bg-white text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <List className="w-4 h-4" />
              Неделя
            </button>
            <button
              type="button"
              onClick={() => setViewMode('month')}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                viewMode === 'month'
                  ? 'bg-white text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Месяц
            </button>
          </div>
        </div>

        {/* WEEK MODE — two columns: events + calendar */}
        {viewMode === 'week' && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 min-w-0">
              <div className="flex gap-1.5 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                {daysOfWeek.map((day) => {
                  const isActive = activeDay === day;
                  const isCurrent = day === currentDay;
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayTab(day)}
                      className={`flex-shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : isCurrent
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : 'bg-surface-warm text-text-secondary hover:text-text-primary hover:bg-surface'
                      }`}
                    >
                      {dayShortNames[day]}
                      {isCurrent && !isActive && (
                        <span className="ml-1 text-[10px] opacity-60">(сегодня)</span>
                      )}
                    </button>
                  );
                })}
              </div>

              <p className="text-sm text-text-secondary mb-4">
                {selectedDate.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}
              </p>

              {dayEvents.length > 0 ? (
                <div className="space-y-2.5">
                  {dayEvents.map((event) => (
                    <EventRow key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <Clock className="w-10 h-10 text-text-secondary/30 mx-auto mb-3" />
                  <p className="text-text-secondary">Нет мероприятий в этот день</p>
                </div>
              )}
            </div>

            <div className="lg:w-[320px] flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <CalendarPanel
                  year={calYear}
                  month={calMonth}
                  selectedDate={selectedDate}
                  onSelectDate={handleDateSelect}
                  onPrevMonth={prevMonth}
                  onNextMonth={nextMonth}
                />
              </div>
            </div>
          </div>
        )}

        {/* MONTH MODE — full-width big calendar */}
        {viewMode === 'month' && (
          <FullMonthCalendar
            year={calYear}
            month={calMonth}
            onPrevMonth={prevMonth}
            onNextMonth={nextMonth}
          />
        )}
      </Section>

      {/* Bottom legend (week mode only) */}
      {viewMode === 'week' && (
        <section className="border-t border-border bg-surface-warm py-8">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500/40" />
                Бесплатно &mdash; включено в посещение
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary/40" />
                Платно &mdash; нажмите для покупки
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400/40" />
                Особое мероприятие
              </span>
            </div>
          </Container>
        </section>
      )}
    </PageLayout>
  );
}
