import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Gift, Sparkles, Heart, Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import TicketButton from '@/components/ui/TicketButton';
import { useBooking } from '@/context/BookingContext';
import { weekdayPricing, weekendPricing, subscriptions } from '@/data/pricing';

export default function PricingPreviewSection() {
  const { openBooking, openPurchase } = useBooking();

  return (
    <Section
      dark
      ornament
      separator
      title="Стоимость и абонементы"
      subtitle="Гибкая система тарифов — от 1 часа до безлимита на день"
    >
      <div className="max-w-5xl mx-auto">
        {/* Two-column pricing table */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Weekdays */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-6 py-3 border-b border-white/10">
              <h3 className="font-heading text-lg font-bold text-white text-center">Будни</h3>
            </div>
            <div className="divide-y divide-white/5">
              {weekdayPricing.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white/5 transition-colors"
                  role="button"
                  tabIndex={0}
                  onClick={() => openPurchase({ name: `Будни — ${slot.name}`, price: `${slot.adultPrice.toLocaleString('ru-RU')} ₽`, childPrice: `${slot.childPrice.toLocaleString('ru-RU')} ₽` })}
                >
                  <span className="text-white/80">{slot.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold">{slot.adultPrice.toLocaleString('ru-RU')}₽</span>
                    <span className="text-xs text-white/40">дети {slot.childPrice}₽</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekends */}
          <div className="rounded-2xl border border-primary/30 overflow-hidden">
            <div className="bg-primary/10 px-6 py-3 border-b border-primary/20">
              <h3 className="font-heading text-lg font-bold text-primary text-center">Выходные / Праздники</h3>
            </div>
            <div className="divide-y divide-white/5">
              {weekendPricing.map((slot) => (
                <div
                  key={slot.id}
                  className="flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white/5 transition-colors"
                  role="button"
                  tabIndex={0}
                  onClick={() => openPurchase({ name: `Выходные — ${slot.name}`, price: `${slot.adultPrice.toLocaleString('ru-RU')} ₽`, childPrice: `${slot.childPrice.toLocaleString('ru-RU')} ₽` })}
                >
                  <span className="text-white/80">{slot.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold">{slot.adultPrice.toLocaleString('ru-RU')}₽</span>
                    <span className="text-xs text-white/40">дети {slot.childPrice}₽</span>
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
            <h3 className="font-heading text-xl font-bold text-white">Абонементы</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {subscriptions.slice(0, 4).map((sub) => (
              <div
                key={sub.id}
                className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 hover:border-primary/30 transition-colors cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => openPurchase({ name: `Абонемент «${sub.name}»`, price: `${sub.adultPrice.toLocaleString('ru-RU')} ₽` })}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white">{sub.name}</h4>
                  {sub.discount > 0 && (
                    <span className="rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2 py-0.5">
                      -{sub.discount}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/50 mb-3">{sub.description}</p>
                <p className="text-xl font-bold text-primary">
                  {sub.adultPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
                  <span className="text-xs text-white/40 font-normal ml-1">/ мес</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gift Certificate — premium banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-amber-900/30 to-primary/10" />
          <div className="absolute inset-0 border border-primary/30 rounded-2xl" />
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
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                Подарочный сертификат
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Подарите близким день расслабления в термальном комплексе. Сертификат на любую сумму — идеальный подарок на день рождения, юбилей или просто без повода.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  Красивое оформление
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400" />
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
                className="rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 p-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  openPurchase({ name: 'Подарочный сертификат', price: 'Индивидуальная сумма' });
                }}
              >
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Сумма сертификата</label>
                  <div className="flex gap-2 mb-2">
                    {[3000, 5000, 10000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-sm text-white/80 hover:border-primary/40 hover:bg-primary/10 transition-colors"
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
                    placeholder="Или введите свою сумму"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Пожелание (необязательно)</label>
                  <textarea
                    rows={2}
                    placeholder="Напишите тёплые слова..."
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary hover:bg-primary-light text-white font-bold py-3.5 text-lg transition-colors shadow-lg shadow-primary/20"
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
