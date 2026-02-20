import { useState, useMemo, useEffect, useCallback } from 'react';
import { X, Minus, Plus, Phone, CheckCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { weekdayPricing, weekendPricing, subscriptions, certificates } from '@/data/pricing';

type BookingType = 'visit' | 'certificate' | 'subscription';

const tariffOptions = [
  { id: '1h', label: '1 час' },
  { id: '2h', label: '2 часа' },
  { id: '3h', label: '3 часа' },
  { id: '4h', label: '4 часа' },
  { id: 'unlimited', label: 'Безлимит на день' },
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
  const [bookingType, setBookingType] = useState<BookingType>('visit');
  const [date, setDate] = useState('');
  const [tariff, setTariff] = useState('unlimited');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCert, setSelectedCert] = useState(certificates[0].id);
  const [selectedSub, setSelectedSub] = useState(subscriptions[0].id);

  const total = useMemo(() => {
    if (bookingType === 'certificate') {
      const cert = certificates.find((c) => c.id === selectedCert);
      return cert?.price ?? 0;
    }
    if (bookingType === 'subscription') {
      const sub = subscriptions.find((s) => s.id === selectedSub);
      return sub?.adultPrice ?? 0;
    }
    if (!date) return 0;
    const pricing = isWeekend(date) ? weekendPricing : weekdayPricing;
    const nameMap: Record<string, string> = {
      '1h': '1 час',
      '2h': '2 часа',
      '3h': '3 часа',
      '4h': '4 часа',
      unlimited: 'Безлимит на день',
    };
    const slot = pricing.find((s) => s.name === nameMap[tariff]);
    if (!slot) return 0;
    return slot.adultPrice * adults + slot.childPrice * children;
  }, [bookingType, date, tariff, adults, children, selectedCert, selectedSub]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleClose = useCallback(() => {
    closeModal();
    setTimeout(() => {
      setStep('form');
      setBookingType('visit');
      setDate('');
      setTariff('unlimited');
      setAdults(1);
      setChildren(0);
      setName('');
      setPhone('');
      setSelectedCert(certificates[0].id);
      setSelectedSub(subscriptions[0].id);
    }, 300);
  }, [closeModal]);

  // Close on Escape
  useEffect(() => {
    if (!bookingOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [bookingOpen, handleClose]);

  if (!bookingOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white px-6 py-4 rounded-t-2xl">
          <h2 id="booking-title" className="font-heading text-xl font-bold text-text-primary">Купить билет</h2>
          <button onClick={handleClose} className="rounded-lg p-1.5 hover:bg-surface-warm transition-colors" aria-label="Закрыть">
            <X className="h-5 w-5 text-text-secondary" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Тип бронирования */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text-secondary">Что хотите приобрести?</label>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { id: 'visit' as const, label: 'Посещение' },
                  { id: 'certificate' as const, label: 'Сертификат' },
                  { id: 'subscription' as const, label: 'Абонемент' },
                ]).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setBookingType(opt.id)}
                    className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      bookingType === opt.id
                        ? 'bg-primary text-white'
                        : 'bg-surface-warm text-text-secondary hover:bg-border'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {bookingType === 'visit' && (
              <>
                {/* Дата */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-secondary">Дата посещения</label>
                  <input
                    type="date"
                    required
                    min={getTomorrow()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  />
                  {date && (
                    <p className="mt-1 text-xs text-text-secondary">
                      {isWeekend(date) ? 'Выходной день — тариф выходного дня' : 'Будний день'}
                    </p>
                  )}
                </div>

                {/* Тариф */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-secondary">Тариф</label>
                  <div className="grid grid-cols-2 gap-2">
                    {tariffOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setTariff(opt.id)}
                        className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                          tariff === opt.id
                            ? 'bg-primary text-white'
                            : 'bg-surface-warm text-text-secondary hover:bg-border'
                        } ${opt.id === 'unlimited' ? 'col-span-2' : ''}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Гости */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-text-secondary">Гости</label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                      <span className="text-sm text-text-secondary">Взрослые</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-surface-warm transition-colors"
                          aria-label="Уменьшить количество взрослых"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center font-medium text-text-primary">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(Math.min(10, adults + 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-surface-warm transition-colors"
                          aria-label="Увеличить количество взрослых"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                      <span className="text-sm text-text-secondary">Дети 3–12 лет</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-surface-warm transition-colors"
                          aria-label="Уменьшить количество детей"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center font-medium text-text-primary">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(Math.min(5, children + 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-surface-warm transition-colors"
                          aria-label="Увеличить количество детей"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {bookingType === 'certificate' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Выберите сертификат</label>
                <div className="space-y-2">
                  {certificates.map((cert) => (
                    <button
                      key={cert.id}
                      type="button"
                      onClick={() => setSelectedCert(cert.id)}
                      className={`w-full rounded-xl px-4 py-3 text-left transition-colors ${
                        selectedCert === cert.id
                          ? 'bg-background border-2 border-primary'
                          : 'bg-surface border-2 border-transparent hover:bg-surface-warm'
                      }`}
                    >
                      <p className="font-medium text-text-primary">{cert.name}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{cert.description}</p>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-text-secondary">Сертификат действителен 6 месяцев</p>
              </div>
            )}

            {bookingType === 'subscription' && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Выберите абонемент</label>
                <div className="space-y-2">
                  {subscriptions.map((sub) => (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setSelectedSub(sub.id)}
                      className={`w-full rounded-xl px-4 py-3 text-left transition-colors ${
                        selectedSub === sub.id
                          ? 'bg-background border-2 border-primary'
                          : 'bg-surface border-2 border-transparent hover:bg-surface-warm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-text-primary">{sub.name}</p>
                        <p className="font-bold text-primary">{sub.adultPrice.toLocaleString('ru-RU')} &#8381;</p>
                      </div>
                      <p className="text-xs text-text-secondary mt-0.5">{sub.description ?? sub.period}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Контакт */}
            <div className="space-y-3">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Имя</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Телефон</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Итого */}
            {(bookingType !== 'visit' || date) && total > 0 && (
              <div className="rounded-xl bg-background border border-border px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-secondary">Итого</span>
                  <span className="text-2xl font-bold text-primary">
                    {total.toLocaleString('ru-RU')}&nbsp;&#8381;
                  </span>
                </div>
                {bookingType === 'visit' && date && (
                  <p className="mt-1 text-xs text-text-secondary">
                    {adults} взр.{children > 0 ? ` + ${children} дет.` : ''} &middot;{' '}
                    {isWeekend(date) ? 'выходной' : 'будни'} &middot;{' '}
                    {tariffOptions.find((t) => t.id === tariff)?.label}
                  </p>
                )}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-light active:brightness-90"
            >
              Оформить бронь
            </button>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-text-primary">Заявка принята!</h3>
            <p className="mb-6 text-text-secondary">
              Мы перезвоним в течение 15 минут для подтверждения бронирования.
            </p>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+79091674746" className="font-medium text-text-primary">
                +7 (909) 167-47-46
              </a>
            </div>
            <div>
              <button
                onClick={handleClose}
                className="w-full rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-light"
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
