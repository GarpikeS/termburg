import { Link } from 'react-router-dom';
import { ArrowRight, Users, Crown, Gift } from 'lucide-react';
import Section from '@/components/ui/Section';
import TicketButton from '@/components/ui/TicketButton';
import { useBooking } from '@/context/BookingContext';
import { weekdayPricing, weekendPricing, subscriptions } from '@/data/pricing';

export default function PricingPreviewSection() {
  const { openBooking } = useBooking();

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
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Weekdays */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-6 py-3 border-b border-white/10">
              <h3 className="font-heading text-lg font-bold text-white text-center">Будни</h3>
            </div>
            <div className="divide-y divide-white/5">
              {weekdayPricing.map((slot) => (
                <div key={slot.id} className="flex items-center justify-between px-6 py-3">
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
                <div key={slot.id} className="flex items-center justify-between px-6 py-3">
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

        {/* Popular subscriptions */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Crown className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-bold text-white">Абонементы</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptions.slice(0, 3).map((sub) => (
              <div
                key={sub.id}
                className="rounded-xl bg-white/5 border border-white/10 p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
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

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <TicketButton onClick={openBooking}>Забронировать посещение</TicketButton>
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
