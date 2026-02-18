import { useState } from 'react';
import { Clock, Users, Baby, Percent, Sparkles, Gift } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
import Badge from '@/components/ui/Badge';
import TicketButton from '@/components/ui/TicketButton';
import Container from '@/components/ui/Container';
import { useBooking } from '@/context/BookingContext';
import {
  weekdayPricing,
  weekendPricing,
  subscriptions,
  certificates,
  type PricingSlot,
} from '@/data/pricing';
import { spaServices } from '@/data/services';

const pricingTabs = [
  { id: 'weekday', label: 'Будни' },
  { id: 'weekend', label: 'Выходные / Праздники' },
];

function PriceTable({ slots }: { slots: PricingSlot[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {slots.map((slot) => (
        <Card key={slot.id} className="text-center">
          <h3 className="mb-3 text-xl font-bold text-text-primary">{slot.name}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-surface-warm px-4 py-2">
              <span className="flex items-center gap-2 text-sm text-text-secondary">
                <Users className="h-4 w-4" />
                Взрослый
              </span>
              <span className="text-lg font-bold text-primary">
                {slot.adultPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-surface-warm px-4 py-2">
              <span className="flex items-center gap-2 text-sm text-text-secondary">
                <Baby className="h-4 w-4" />
                Детский
              </span>
              <span className="text-lg font-bold text-accent">
                {slot.childPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function PricingPage() {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState('weekday');

  const currentPricing = activeTab === 'weekday' ? weekdayPricing : weekendPricing;

  return (
    <PageLayout title="Прайс-лист" description="Цены на посещение и услуги термального комплекса Термбург.">
      <PageHero
        title="Прайс-лист"
        subtitle="Прозрачные цены без скрытых доплат. Всё включено: халат, полотенце, тапочки и чай."
        backgroundImage="/images/complex/sauna.webp"
      />

      {/* Pricing tabs */}
      <Section title="Стоимость посещения">
        <Tabs
          tabs={pricingTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          className="mb-8 justify-center"
        />
        <PriceTable slots={currentPricing} />
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-secondary">
          <Baby className="h-4 w-4 text-accent" />
          <span>Дети до 3 лет — <strong className="text-accent">бесплатно</strong></span>
        </div>
      </Section>

      {/* Subscriptions */}
      <Section title="Абонементы" subtitle="Выгодные предложения для постоянных гостей" warm>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subscriptions.map((sub) => (
            <Card key={sub.id} className="relative overflow-hidden">
              {sub.discount > 0 && (
                <Badge variant="success" className="absolute right-4 top-4">
                  <Percent className="mr-1 h-3 w-3" />
                  Скидка {sub.discount}%
                </Badge>
              )}
              <h3 className="mb-2 text-xl font-bold text-text-primary">{sub.name}</h3>
              <p className="mb-1 text-sm text-text-secondary">{sub.period}</p>
              {sub.description && (
                <p className="mb-3 text-xs text-text-secondary">{sub.description}</p>
              )}
              <p className="text-2xl font-bold text-primary">
                {sub.adultPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certificates */}
      <Section title="Подарочные сертификаты" subtitle="Действительны 6 месяцев с момента покупки">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <Card key={cert.id} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-primary">{cert.name}</h3>
              <p className="mb-3 text-sm text-text-secondary">{cert.description}</p>
              <p className="text-2xl font-bold text-primary">
                {cert.price.toLocaleString('ru-RU')}&nbsp;&#8381;
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SPA Pricing */}
      <Section title="SPA-процедуры" subtitle="Индивидуальный подход к каждому гостю" warm>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spaServices.map((spa) => (
            <Card key={spa.id}>
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-bold text-text-primary">{spa.name}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-sm text-text-secondary">
                  <Clock className="h-4 w-4" />
                  {spa.duration}
                </span>
                <span className="text-lg font-bold text-primary">
                  {spa.price.toLocaleString('ru-RU')}&nbsp;&#8381;
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative bg-dark-surface ornament-pattern py-16 text-center">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Готовы к отдыху?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Забронируйте посещение онлайн — выберите удобный тариф от 1 часа до безлимита.
          </p>
          <TicketButton onClick={openBooking}>Забронировать посещение</TicketButton>
        </Container>
      </section>
    </PageLayout>
  );
}
