import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import TicketButton from '@/components/ui/TicketButton';
import { useBooking } from '@/context/BookingContext';
import { weekdayPricing } from '@/data/pricing';

export default function PricingPreviewSection() {
  const { openBooking } = useBooking();

  return (
    <Section
      title="Стоимость посещения"
      subtitle="Гибкая система тарифов на каждый день"
    >
      <div className="max-w-3xl mx-auto">
        {/* Large price callout */}
        <div className="text-center mb-10">
          <p className="text-text-secondary text-sm uppercase tracking-wider mb-2">
            Будни от
          </p>
          <p className="font-heading text-5xl md:text-6xl font-bold text-primary">
            1800₽
          </p>
          <p className="text-text-secondary mt-2">за взрослого</p>
        </div>

        {/* Weekday prices grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {weekdayPricing.map((slot) => (
            <div
              key={slot.id}
              className="bg-surface rounded-xl p-4 text-center border border-border/50"
            >
              <p className="font-heading font-semibold text-text-primary mb-1">
                {slot.name}
              </p>
              <p className="text-xs text-text-secondary mb-2">{slot.duration}</p>
              <p className="font-heading text-xl font-bold text-primary">
                {slot.adultPrice}₽
              </p>
              <p className="text-xs text-text-secondary mt-1">
                дети — {slot.childPrice}₽
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <TicketButton onClick={openBooking}>Забронировать посещение</TicketButton>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
          >
            Полный прайс-лист
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
