import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Gift, Sparkles, Heart, Star, Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import TicketButton from '@/components/ui/TicketButton';
import { useBooking } from '@/context/BookingContext';
import { weekdayPricing, weekendPricing, subscriptions } from '@/data/pricing';

const certificateImages = [
  { id: 'pool', src: '/images/complex/pool.webp', label: 'Бассейн' },
  { id: 'herbal', src: '/images/complex/herbal.webp', label: 'Травяная парная' },
  { id: 'termliny', src: '/images/termliny/teaser.webp', label: 'Термлины' },
  { id: 'russian', src: '/images/complex/russian-bath.webp', label: 'Русская баня' },
];

export default function PricingPreviewSection() {
  const { openBooking, openPurchase } = useBooking();
  const [selectedImage, setSelectedImage] = useState(certificateImages[0].id);

  return (
    <Section
      warm
      separator
      title="Стоимость и абонементы"
      subtitle="Гибкая система тарифов — от 1 часа до безлимита на день"
    >
      <div className="max-w-5xl mx-auto">
        {/* Two-column pricing table */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Weekdays */}
          <div className="rounded-2xl border border-border overflow-hidden bg-surface">
            <div className="bg-background px-6 py-3 border-b border-border">
              <h3 className="font-heading text-lg font-bold text-text-primary text-center">Будни</h3>
            </div>
            <div className="divide-y divide-border/50">
              {weekdayPricing.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-surface-warm transition-colors"
                  role="button"
                  tabIndex={0}
                  onClick={() => openPurchase({ name: `Будни — ${slot.name}`, price: `${slot.adultPrice.toLocaleString('ru-RU')} ₽`, childPrice: `${slot.childPrice.toLocaleString('ru-RU')} ₽` })}
                >
                  <span className="text-text-primary">{slot.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold">{slot.adultPrice.toLocaleString('ru-RU')}₽</span>
                    <span className="text-xs text-text-secondary">дети {slot.childPrice}₽</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekends */}
          <div className="rounded-2xl border border-accent/40 overflow-hidden bg-surface">
            <div className="bg-accent/10 px-6 py-3 border-b border-accent/20">
              <h3 className="font-heading text-lg font-bold text-accent text-center">Выходные / Праздники</h3>
            </div>
            <div className="divide-y divide-border/50">
              {weekendPricing.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-accent/5 transition-colors"
                  role="button"
                  tabIndex={0}
                  onClick={() => openPurchase({ name: `Выходные — ${slot.name}`, price: `${slot.adultPrice.toLocaleString('ru-RU')} ₽`, childPrice: `${slot.childPrice.toLocaleString('ru-RU')} ₽` })}
                >
                  <span className="text-text-primary">{slot.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold">{slot.adultPrice.toLocaleString('ru-RU')}₽</span>
                    <span className="text-xs text-text-secondary">дети {slot.childPrice}₽</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscriptions — 2 columns */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Crown className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-bold text-text-primary">Абонементы</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {subscriptions.slice(0, 4).map((sub) => (
              <div
                key={sub.id}
                className="rounded-xl bg-surface border border-border px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => openPurchase({ name: `Абонемент «${sub.name}»`, price: `${sub.adultPrice.toLocaleString('ru-RU')} ₽` })}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-text-primary">{sub.name}</h4>
                  {sub.discount > 0 && (
                    <span className="rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-semibold px-2 py-0.5">
                      -{sub.discount}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-text-secondary mb-3">{sub.description}</p>
                <p className="text-xl font-bold text-primary">
                  {sub.adultPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
                  <span className="text-xs text-text-secondary font-normal ml-1">/ мес</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Certificate — warm banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5" />
          <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl" />
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 opacity-10">
            <Gift className="w-32 h-32 text-primary" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-5">
            <Sparkles className="w-24 h-24 text-primary" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 p-8 sm:p-10">
            {/* Left — description */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Gift className="w-6 h-6 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Идея для подарка</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Подарочный сертификат
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Подарите близким день расслабления в термальном комплексе. Сертификат на любую сумму — идеальный подарок на день рождения, юбилей или просто без повода.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  Красивое оформление
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500" />
                  Любая сумма
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Действует 6 месяцев
                </span>
              </div>
            </div>

            {/* Right — form */}
            <div className="flex flex-col justify-center">
              <form
                className="rounded-xl bg-surface border border-border p-6 space-y-4 shadow-lg"
                onSubmit={(e) => {
                  e.preventDefault();
                  openPurchase({ name: 'Подарочный сертификат', price: 'Индивидуальная сумма' });
                }}
              >
                {/* Image selection */}
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Выберите дизайн</label>
                  <div className="grid grid-cols-4 gap-2">
                    {certificateImages.map((img) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => setSelectedImage(img.id)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === img.id
                            ? 'border-primary ring-2 ring-primary/20'
                            : 'border-border hover:border-primary/40'
                        }`}
                      >
                        <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                        {selectedImage === img.id && (
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <Check className="w-5 h-5 text-white drop-shadow-lg" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">Сумма сертификата</label>
                  <div className="flex gap-2 mb-2">
                    {[1000, 3000, 5000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="flex-1 rounded-lg border border-border bg-background py-2 text-sm text-text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors"
                        onClick={() => {
                          const input = document.getElementById('cert-amount') as HTMLInputElement;
                          if (input) input.value = String(amount);
                        }}
                      >
                        {amount.toLocaleString('ru-RU')}&nbsp;&#8381;
                      </button>
                    ))}
                  </div>
                  <input
                    id="cert-amount"
                    type="number"
                    min={1000}
                    step={500}
                    placeholder="Минимум 1 000 ₽"
                    className="w-full rounded-lg bg-background border border-border px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <p className="text-xs text-text-secondary/60 mt-1">Минимальная сумма — 1 000 ₽</p>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">Пожелание (необязательно)</label>
                  <textarea
                    rows={2}
                    placeholder="Напишите тёплые слова..."
                    className="w-full rounded-lg bg-background border border-border px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary hover:bg-primary-light text-dark-surface font-bold py-3.5 text-lg transition-colors shadow-lg shadow-primary/20"
                >
                  Оформить сертификат
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <TicketButton onClick={openBooking}>Купить билет</TicketButton>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
          >
            Все тарифы, абонементы и сертификаты
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
