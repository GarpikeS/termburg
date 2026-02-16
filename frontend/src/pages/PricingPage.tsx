import { useState } from 'react';
import { Clock, Users, Baby, Percent, Sparkles } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
import Badge from '@/components/ui/Badge';
import TicketButton from '@/components/ui/TicketButton';
import Container from '@/components/ui/Container';
import {
  weekdayPricing,
  weekendPricing,
  subscriptions,
  spaPricing,
  type PricingSlot,
} from '@/data/pricing';

const pricingTabs = [
  { id: 'weekday', label: 'Будни' },
  { id: 'weekend', label: 'Выходные / Праздники' },
];

function PriceTable({ slots }: { slots: PricingSlot[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {slots.map((slot) => (
        <Card key={slot.id} className="text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-text-secondary">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{slot.duration}</span>
          </div>
          <h3 className="mb-4 text-xl font-bold text-text-primary">{slot.name}</h3>
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
  const [activeTab, setActiveTab] = useState('weekday');

  const currentPricing = activeTab === 'weekday' ? weekdayPricing : weekendPricing;

  return (
    <PageLayout title="Прайс-лист" description="Цены на посещение и услуги термального комплекса Термбург.">
      {/* Hero */}
      <section className="bg-primary py-16 text-center text-white md:py-20">
        <Container>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">Прайс-лист</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Прозрачные цены без скрытых доплат. Всё включено в стоимость посещения: халат, полотенце, тапочки и чай.
          </p>
        </Container>
      </section>

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
              <p className="mb-4 text-sm text-text-secondary">{sub.period}</p>
              <p className="text-2xl font-bold text-primary">
                {sub.adultPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SPA Pricing */}
      <Section title="SPA-процедуры" subtitle="Индивидуальный подход к каждому гостю">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spaPricing.map((spa) => (
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
                  {spa.adultPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-surface-warm py-16 text-center">
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
            Готовы к отдыху?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-text-secondary">
            Забронируйте посещение онлайн и получите гарантированное место в удобное для вас время.
          </p>
          <TicketButton href="#">Забронировать посещение</TicketButton>
        </Container>
      </section>
    </PageLayout>
  );
}
