import { useState } from 'react';
import {
  Users,
  Baby,
  Percent,
  Gift,
  Crown,
  Flame,
  Package,
  ShoppingBag,
  Ticket,
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import TicketButton from '@/components/ui/TicketButton';
import Container from '@/components/ui/Container';
import { useBooking } from '@/context/BookingContext';
import {
  weekdayPricing,
  weekendPricing,
  subscriptions,
  certificates,
  giftBoxes,
  merchItems,
} from '@/data/pricing';

/* ─── Subscription highlights ─── */
const subscriptionHighlights: Record<string, { badge?: string; badgeVariant?: 'default' | 'gold' | 'success' }> = {
  'sub-day-1': { badge: 'Выгодно', badgeVariant: 'success' },
  'sub-parent-1': { badge: 'Для семьи', badgeVariant: 'gold' },
  'sub-family-1': { badge: 'Для семьи', badgeVariant: 'gold' },
  'sub-trio-1': { badge: 'Выгодно', badgeVariant: 'success' },
};

/* ─── Pricing cards ─── */
function PricingCards() {
  const { openPurchase } = useBooking();
  const [tab, setTab] = useState<'weekday' | 'weekend'>('weekday');
  const pricing = tab === 'weekday' ? weekdayPricing : weekendPricing;
  const tabLabel = tab === 'weekday' ? 'Будни' : 'Выходные';

  return (
    <div>
      {/* Tab toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl bg-surface-warm p-1 gap-1">
          <button
            type="button"
            onClick={() => setTab('weekday')}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
              tab === 'weekday'
                ? 'bg-white text-text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Будни
          </button>
          <button
            type="button"
            onClick={() => setTab('weekend')}
            className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
              tab === 'weekend'
                ? 'bg-white text-text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Выходные / Праздники
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pricing.map((slot) => {
          const isPopular = slot.id.includes('3h');
          const isHit = slot.id.includes('unlimited');
          return (
            <div
              key={slot.id}
              onClick={() => openPurchase({ name: `${tabLabel} — ${slot.name}`, price: `${slot.adultPrice.toLocaleString('ru-RU')} ₽`, childPrice: `${slot.childPrice.toLocaleString('ru-RU')} ₽` })}
              className={`relative rounded-2xl border p-6 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                isHit
                  ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30 ring-1 ring-primary/10'
                  : isPopular
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50/50 border-amber-200/50'
                    : 'bg-surface border-border/50 hover:border-primary/20'
              }`}
            >
              {/* Badge */}
              {(isPopular || isHit) && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {isHit ? (
                    <Badge variant="gold" className="text-xs py-1 px-3 shadow-sm">
                      <Crown className="h-3 w-3 mr-1" />
                      Лучшая цена за день
                    </Badge>
                  ) : (
                    <Badge variant="default" className="text-xs py-1 px-3 shadow-sm">
                      <Flame className="h-3 w-3 mr-1" />
                      Популярный
                    </Badge>
                  )}
                </div>
              )}

              {/* Tariff name */}
              <div className="text-center mt-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Ticket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary">{slot.name}</h3>
                {isHit && (
                  <p className="text-xs text-text-secondary mt-1">{slot.duration}</p>
                )}
              </div>

              {/* Prices */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3">
                  <span className="flex items-center gap-2 text-sm text-text-secondary">
                    <Users className="w-4 h-4" />
                    Взрослый
                  </span>
                  <span className="text-xl font-bold text-primary">
                    {slot.adultPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-2.5">
                  <span className="flex items-center gap-2 text-sm text-text-secondary">
                    <Baby className="w-4 h-4" />
                    Детский
                  </span>
                  <span className="text-lg font-semibold text-accent">
                    {slot.childPrice.toLocaleString('ru-RU')}&nbsp;&#8381;
                  </span>
                </div>
              </div>

              {/* CTA hint */}
              <p className="mt-4 text-center text-xs text-primary font-medium">
                Нажмите, чтобы купить
              </p>
            </div>
          );
        })}
      </div>

      {/* Children note */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-secondary">
        <Baby className="h-4 w-4 text-accent" />
        <span>Дети до 3 лет — <strong className="text-accent">бесплатно</strong></span>
      </div>
    </div>
  );
}

/* ─── Subscription card (with CTA) ─── */
function SubscriptionCard({
  name,
  period,
  price,
  discount,
  description,
  badge,
  badgeVariant,
  onPurchase,
}: {
  name: string;
  period: string;
  price: number;
  discount: number;
  description?: string;
  badge?: string;
  badgeVariant?: 'default' | 'gold' | 'success';
  onPurchase: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl bg-surface border border-border/50 hover:border-primary/20 p-5 transition-all duration-300">
      {/* Icon */}
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Users className="h-6 w-6 text-primary" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-lg font-bold text-text-primary">{name}</h3>
          {discount > 0 && (
            <Badge variant="success" className="text-xs py-0.5">
              <Percent className="h-3 w-3 mr-0.5" />
              -{discount}%
            </Badge>
          )}
          {badge && (
            <Badge variant={badgeVariant || 'default'} className="text-xs py-0.5">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-sm text-text-secondary mt-0.5">{period}</p>
        {description && <p className="text-xs text-text-secondary mt-1">{description}</p>}
      </div>

      {/* Price + CTA */}
      <div className="flex items-center gap-4 flex-shrink-0 sm:ml-auto">
        <p className="text-2xl font-bold text-primary">
          {price.toLocaleString('ru-RU')}&nbsp;&#8381;
        </p>
        <TicketButton onClick={onPurchase} className="whitespace-nowrap">
          Оформить
        </TicketButton>
      </div>
    </div>
  );
}

/* ─── Certificate card (clickable) ─── */
const certGradients = [
  'from-amber-700/20 via-amber-600/10 to-amber-800/5 border-amber-600/20',
  'from-primary/20 via-primary/10 to-primary/5 border-primary/30',
  'from-yellow-500/20 via-amber-400/10 to-yellow-600/5 border-yellow-500/30',
];

function CertificateCard({
  name,
  price,
  description,
  index,
  onPurchase,
}: {
  name: string;
  price: number;
  description: string;
  index: number;
  onPurchase: () => void;
}) {
  return (
    <div
      onClick={onPurchase}
      className={`relative rounded-2xl bg-gradient-to-br ${certGradients[index] || certGradients[0]} border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
    >
      <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-4 shadow-sm">
        <Gift className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">{name}</h3>
      <p className="text-sm text-text-secondary mb-4">{description}</p>
      <p className="text-3xl font-bold text-primary">
        {price.toLocaleString('ru-RU')}&nbsp;&#8381;
      </p>
      <p className="text-xs text-text-secondary mt-2">Действителен 6 месяцев</p>
      <div className="mt-4">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
          <Gift className="h-4 w-4" />
          Подарить
        </span>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function PricingPage() {
  const { openBooking, openPurchase } = useBooking();

  return (
    <PageLayout title="Прайс-лист" description="Цены на посещение и услуги термального комплекса Термбург.">
      <PageHero
        title="Прайс-лист"
        subtitle="Прозрачные цены без скрытых доплат. Всё включено в стоимость посещения."
        backgroundImage="/images/complex/sauna.webp"
      />

      {/* ── Tariff cards ── */}
      <Section title="Стоимость посещения" subtitle="Выберите удобный тариф — от 1 часа до безлимита на весь день">
        <PricingCards />
      </Section>

      {/* ── Subscriptions (with CTA) ── */}
      <Section
        title="Абонементы"
        subtitle="Выгодные предложения для постоянных гостей"
        warm
      >
        <div className="space-y-4">
          {subscriptions.map((sub) => {
            const highlight = subscriptionHighlights[sub.id];
            return (
              <SubscriptionCard
                key={sub.id}
                name={sub.name}
                period={sub.period}
                price={sub.adultPrice}
                discount={sub.discount}
                description={sub.description}
                badge={highlight?.badge}
                badgeVariant={highlight?.badgeVariant}
                onPurchase={() => openPurchase({ name: `Абонемент «${sub.name}»`, price: `${sub.adultPrice.toLocaleString('ru-RU')} ₽` })}
              />
            );
          })}
        </div>
      </Section>

      {/* ── Gift certificates (clickable) ── */}
      <Section
        title="Подарочные сертификаты"
        subtitle="Лучший подарок — впечатления"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.id}
              name={cert.name}
              price={cert.price}
              description={cert.description}
              index={i}
              onPurchase={() => openPurchase({ name: cert.name, price: `${cert.price.toLocaleString('ru-RU')} ₽` })}
            />
          ))}
        </div>
      </Section>

      {/* ── Gift boxes ── */}
      <Section
        title="Подарочные боксы"
        subtitle="Готовые наборы для незабываемого подарка"
        warm
      >
        <div className="grid md:grid-cols-2 gap-8">
          {giftBoxes.map((box) => (
            <div
              key={box.id}
              className="flex flex-col items-center text-center rounded-2xl bg-surface border border-border/50 hover:border-primary/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              onClick={() => openPurchase({ name: box.name, price: `${box.price.toLocaleString('ru-RU')} ₽` })}
            >
              <div className="w-16 h-16 rounded-full bg-warm-gold/10 flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-warm-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                {box.name}
              </h3>
              <p className="mt-3 text-text-secondary">{box.contents}</p>
              <p className="mt-4 text-2xl font-bold text-primary">
                {box.price.toLocaleString('ru-RU')}&nbsp;&#8381;
              </p>
              <div className="mt-6">
                <TicketButton onClick={(e) => { e.stopPropagation(); openPurchase({ name: box.name, price: `${box.price.toLocaleString('ru-RU')} ₽` }); }}>
                  Купить бокс
                </TicketButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Merch ── */}
      <Section
        title="Мерч Термбурга"
        subtitle="Заберите частичку Термбурга с собой"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-2xl bg-surface border border-border/50 hover:border-primary/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              onClick={() => openPurchase({ name: item.name, price: `${item.price.toLocaleString('ru-RU')} ₽` })}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">{item.name}</h3>
              <p className="mt-1 text-sm text-text-secondary flex-1">{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-primary">
                  {item.price.toLocaleString('ru-RU')}&nbsp;&#8381;
                </p>
                <span className="text-sm font-medium text-primary hover:underline">Купить</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="relative bg-dark-surface ornament-pattern py-16 text-center">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Готовы к отдыху?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Купите билет онлайн — выберите удобный тариф от 1 часа до безлимита.
          </p>
          <TicketButton onClick={openBooking}>Купить билет</TicketButton>
        </Container>
      </section>
    </PageLayout>
  );
}
