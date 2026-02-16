import { useState, useMemo } from 'react';
import { X, Minus, Plus, Phone, CheckCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { weekdayPricing, weekendPricing } from '@/data/pricing';

const timeSlots = [
  { id: 'morning', label: 'Утро (8:00–12:00)' },
  { id: 'day', label: 'День (12:00–17:00)' },
  { id: 'evening', label: 'Вечер (17:00–23:00)' },
  { id: 'allday', label: 'Весь день (8:00–23:00)' },
];

function isWeekend(dateStr: string) {
  const d = new Date(dateStr);
  const day = d.getDay();
  return day === 0 || day === 6;
}

function getTomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export default function BookingModal() {
  const { bookingOpen, closeModal } = useBooking();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('morning');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const total = useMemo(() => {
    if (!date) return 0;
    const pricing = isWeekend(date) ? weekendPricing : weekdayPricing;
    const slotMap: Record<string, string> = {
      morning: 'Утро',
      day: 'День',
      evening: 'Вечер',
      allday: 'Весь день',
    };
    const slot = pricing.find((s) => s.name === slotMap[time]);
    if (!slot) return 0;
    return slot.adultPrice * adults + slot.childPrice * children;
  }, [date, time, adults, children]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setStep('form');
      setDate('');
      setTime('morning');
      setAdults(1);
      setChildren(0);
      setName('');
      setPhone('');
    }, 300);
  };

  if (!bookingOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 rounded-t-2xl">
          <h2 className="font-heading text-xl font-bold text-gray-900">Забронировать посещение</h2>
          <button onClick={handleClose} className="rounded-lg p-1.5 hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Дата */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Дата посещения</label>
              <input
                type="date"
                required
                min={getTomorrow()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-[#BA9B4F] focus:ring-2 focus:ring-[#BA9B4F]/20 outline-none transition-colors"
              />
              {date && (
                <p className="mt-1 text-xs text-gray-500">
                  {isWeekend(date) ? 'Выходной день — тариф выходного дня' : 'Будний день'}
                </p>
              )}
            </div>

            {/* Время */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Время</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 focus:border-[#BA9B4F] focus:ring-2 focus:ring-[#BA9B4F]/20 outline-none transition-colors"
              >
                {timeSlots.map((slot) => (
                  <option key={slot.id} value={slot.id}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Гости */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Гости</label>
              <div className="space-y-3">
                {/* Взрослые */}
                <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <span className="text-sm text-gray-700">Взрослые</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center font-medium text-gray-900">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.min(10, adults + 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                {/* Дети */}
                <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <span className="text-sm text-gray-700">Дети 3–12 лет</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center font-medium text-gray-900">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(Math.min(5, children + 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Контакт */}
            <div className="space-y-3">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-[#BA9B4F] focus:ring-2 focus:ring-[#BA9B4F]/20 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-[#BA9B4F] focus:ring-2 focus:ring-[#BA9B4F]/20 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Итого */}
            {date && (
              <div className="rounded-xl bg-[#FAF6E8] border border-[#E0D9C8] px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Итого</span>
                  <span className="text-2xl font-bold text-[#BA9B4F]">
                    {total.toLocaleString('ru-RU')}&nbsp;&#8381;
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  {adults} взр.{children > 0 ? ` + ${children} дет.` : ''} &middot;{' '}
                  {isWeekend(date) ? 'выходной' : 'будни'}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#BA9B4F] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#A88A3D] active:bg-[#9A7F35]"
            >
              Оформить бронь
            </button>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-gray-900">Заявка принята!</h3>
            <p className="mb-6 text-gray-600">
              Мы перезвоним в течение 15 минут для подтверждения бронирования.
            </p>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-[#FAF6E8] px-5 py-3">
              <Phone className="h-4 w-4 text-[#BA9B4F]" />
              <a href="tel:+74959220222" className="font-medium text-gray-900">
                +7 (495) 922-02-22
              </a>
            </div>
            <div>
              <button
                onClick={handleClose}
                className="w-full rounded-xl bg-[#BA9B4F] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#A88A3D]"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
