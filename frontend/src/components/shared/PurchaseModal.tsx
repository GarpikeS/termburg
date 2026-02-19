import { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle, Phone, Users, Baby } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

type TicketType = 'adult' | 'child';

export default function PurchaseModal() {
  const { purchaseOpen, purchaseItem, closeModal } = useBooking();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [ticketType, setTicketType] = useState<TicketType>('adult');

  const isCertificate = purchaseItem?.name.toLowerCase().includes('сертификат') ?? false;
  const hasChildPrice = !!purchaseItem?.childPrice;
  const displayPrice = ticketType === 'child' && hasChildPrice ? purchaseItem!.childPrice! : purchaseItem?.price ?? '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleClose = useCallback(() => {
    closeModal();
    setTimeout(() => {
      setStep('form');
      setName('');
      setPhone('');
      setEmail('');
      setRecipientName('');
      setTicketType('adult');
    }, 300);
  }, [closeModal]);

  // Close on Escape
  useEffect(() => {
    if (!purchaseOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [purchaseOpen, handleClose]);

  if (!purchaseOpen || !purchaseItem) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="purchase-title"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white px-6 py-4 rounded-t-2xl">
          <h2 id="purchase-title" className="font-heading text-xl font-bold text-text-primary">Оформить заказ</h2>
          <button onClick={handleClose} className="rounded-lg p-1.5 hover:bg-surface-warm transition-colors" aria-label="Закрыть">
            <X className="h-5 w-5 text-text-secondary" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Товар */}
            <div className="rounded-xl bg-background border border-border px-5 py-4">
              <p className="text-sm text-text-secondary">Товар</p>
              <p className="font-medium text-text-primary">{purchaseItem.name}</p>
              <p className="mt-1 text-xl font-bold text-primary">{displayPrice}</p>
            </div>

            {/* Взрослый / Детский toggle */}
            {hasChildPrice && (
              <div>
                <p className="mb-2 text-sm font-medium text-text-secondary">Тип билета</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTicketType('adult')}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 border ${
                      ticketType === 'adult'
                        ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                        : 'bg-surface border-border text-text-secondary hover:text-text-primary hover:border-primary/30'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    Взрослый
                    <span className={`text-xs ${ticketType === 'adult' ? 'text-white/80' : 'text-text-secondary'}`}>
                      {purchaseItem.price}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTicketType('child')}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 border ${
                      ticketType === 'child'
                        ? 'bg-accent text-white border-accent shadow-md shadow-accent/20'
                        : 'bg-surface border-border text-text-secondary hover:text-text-primary hover:border-accent/30'
                    }`}
                  >
                    <Baby className="w-4 h-4" />
                    Детский
                    <span className={`text-xs ${ticketType === 'child' ? 'text-white/80' : 'text-text-secondary'}`}>
                      {purchaseItem.childPrice}
                    </span>
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-text-secondary/70">
                  Дети до 3 лет — бесплатно. Детский билет: 3–12 лет.
                </p>
              </div>
            )}

            {/* Имя получателя (для сертификатов) */}
            {isCertificate && (
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">
                  Имя получателя сертификата
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Кому дарите?"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
                <p className="mt-1 text-xs text-text-secondary/70">
                  Будет указано на сертификате. Оставьте пустым, если не нужно.
                </p>
              </div>
            )}

            {/* Контактные данные */}
            <div className="space-y-3">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Ваше имя</label>
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
              <div>
                <label className="mb-1.5 block text-sm font-medium text-text-secondary">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-light active:brightness-90"
            >
              Оформить заказ
            </button>
          </form>
        ) : (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-text-primary">Заказ оформлен!</h3>
            <p className="mb-6 text-text-secondary">
              Мы свяжемся с вами для подтверждения и оплаты.
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
