import { useState } from 'react';
import {
  Clock,
  Users,
  Baby,
  Percent,
  Sparkles,
  Gift,
  Crown,
  Flame,
  ShieldCheck,
  Wifi,
  Coffee,
  Shirt,
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
} from '@/data/pricing';
import { spaServices } from '@/data/services';

/* ─── Included strip items ─── */
const includedItems = [
  { icon: Shirt, label: 'Халат' },
  { icon: ShieldCheck, label: 'Полотенце' },
  { icon: ShieldCheck, label: 'Тапочки' },
  { icon: ShieldCheck, label: 'Шапочка' },
  { icon: Coffee, label: 'Чай' },
  { icon: Wifi, label: 'Wi-Fi' },
];

/* ─── Pricing table ─── */
function PricingTable() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const rows = weekdayPricing.map((wd, i) => ({
    name: wd.name,
    duration: wd.duration,
    weekdayAdult: wd.adultPrice,
    weekdayChild: wd.childPrice,
    weekendAdult: weekendPricing[i].adultPrice,
    weekendChild: weekendPricing[i].childPrice,
    isPopular: wd.id.includes('3h'),
    isHit: wd.id.includes('unlimited'),
    id: wd.id,
  }));

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr>
            <th className="text-left py-4 px-4 text-sm font-medium text-text-secondary">Тариф</th>
            <th className="text-center py-4 px-3" colSpan={2}>
              <span className="text-sm font-bold text-text-primary">Будни</span>
            </th>
            <th className="text-center py-4 px-3" colSpan={2}>
              <span className="text-sm font-bold text-text-primary">Выходные</span>
            </th>
          </tr>
          <tr className="border-b border-border">
            <th className="py-2 px-4" />
            <th className="py-2 px-3 text-xs text-text-secondary font-medium">
              <span className="flex items-center justify-center gap-1">
                <Users className="h-3 w-3" /> Взрослый
              </span>
            </th>
            <th className="py-2 px-3 text-xs text-text-secondary font-medium">
              <span className="flex items-center justify-center gap-1">
                <Baby className="h-3 w-3" /> Детский
              </span>
            </th>
            <th className="py-2 px-3 text-xs text-text-secondary font-medium">
              <span className="flex items-center justify-center gap-1">
                <Users className="h-3 w-3" /> Взрослый
              </span>
            </th>
            <th className="py-2 px-3 text-xs text-text-secondary font-medium">
              <span className="flex items-center justify-center gap-1">
                <Baby className="h-3 w-3" /> Детский
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              onMouseEnter={() => setHoveredRow(row.id)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`border-b border-border/30 transition-colors duration-200 ${
                row.isPopular
                  ? 'bg-primary/5'
                  : row.isHit
                    ? 'bg-accent/5'
                    : hoveredRow === row.id
                      ? 'bg-surface-warm/60'
                      : ''
              }`}
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-text-primary">{row.name}</span>
                  {row.isPopular && (
                    <Badge variant="default" className="text-xs py-0.5 px-2">
                      <Flame className="h-3 w-3 mr-0.5" />
                      Популярный
                    </Badge>
                  )}
                  {row.isHit && (
                    <Badge variant="gold" className="text-xs py-0.5 px-2">
                      <Crown className="h-3 w-3 mr-0.5" />
                      Хит
                    </Badge>
                  )}
                </div>
                {row.isHit && (
                  <p className="text-xs text-text-secondary mt-0.5">{row.duration}</p>
                )}
              </td>
              <td className="py-4 px-3 text-center">
                <span className={`text-base font-bold ${row.isPopular ? 'text-primary' : 'text-text-primary'}`}>
                  {row.weekdayAdult.toLocaleString('ru-RU')}&nbsp;&#8381;
                </span>
              </td>
              <td className="py-4 px-3 text-center">
                <span className="text-sm text-accent font-medium">
                  {row.weekdayChild.toLocaleString('ru-RU')}&nbsp;&#8381;
                </span>
              </td>
              <td className="py-4 px-3 text-center">
                <span className={`text-base font-bold ${row.isPopular ? 'text-primary' : 'text-text-primary'}`}>
                  {row.weekendAdult.toLocaleString('ru-RU')}&nbsp;&#8381;
                </span>
              </td>
              <td className="py-4 px-3 text-center">
                <span className="text-sm text-accent font-medium">
                  {row.weekendChild.toLocaleString('ru-RU')}&nbsp;&#8381;
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-secondary px-4">
        <Baby className="h-4 w-4 text-accent" />
        <span>Дети до 3 лет — <strong className="text-accent">бесплатно</strong></span>
      </div>
    </div>
  );
}

/* ─── Subscription card ─── */
function SubscriptionCard({
  name,
  period,
  price,
  discount,
  description,
}: {
  name: string;
  period: string;
  price: number;
  discount: number;
  description?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl bg-surface border border-border/50 hover:border-primary/20 p-5 transition-all duration-300">
      {/* Icon */}
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <CreditCardIcon className="h-6 w-6 text-primary" />
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
        </div>
        <p className="text-sm text-text-secondary mt-0.5">{period}</p>
        {description && <p className="text-xs text-text-secondary mt-1">{description}</p>}
      </div>

      {/* Price */}
      <div className="text-right flex-shrink-0 sm:ml-auto">
        <p className="text-2xl font-bold text-primary">
          {price.toLocaleString('ru-RU')}&nbsp;&#8381;
        </p>
      </div>
    </div>
  );
}

function CreditCardIcon({ className }: { className?: string }) {
  return <Users className={className} />;
}

/* ─── Certificate card ─── */
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
}: {
  name: string;
  price: number;
  description: string;
  index: number;
}) {
  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-br ${certGradients[index] || certGradients[0]} border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
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
    </div>
  );
}

/* ─── SPA card with overlay ─── */
const spaImages = [
  '/images/complex/gallery1.jpg',
  '/images/complex/gallery2.jpg',
  '/images/complex/gallery3.jpg',
  '/images/complex/gallery4.webp',
  '/images/complex/gallery5.webp',
  '/images/complex/sauna.webp',
];

function SpaCard({
  name,
  duration,
  price,
  description,
  index,
}: {
  name: string;
  duration: string;
  price: number;
  description: string;
  index: number;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden h-52 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Background image */}
      <img
        src={spaImages[index % spaImages.length]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="h-4 w-4 text-primary" />
          <h3 className="text-base font-bold text-white">{name}</h3>
        </div>
        <p className="text-xs text-white/60 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-white/70">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </span>
          <span className="text-lg font-bold text-primary">
            {price.toLocaleString('ru-RU')}&nbsp;&#8381;
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function PricingPage() {
  const { openBooking } = useBooking();

  return (
    <PageLayout title="Прайс-лист" description="Цены на посещение и услуги термального комплекса Термбург.">
      <PageHero
        title="Прайс-лист"
        subtitle="Прозрачные цены без скрытых доплат. Всё включено в стоимость посещения."
        backgroundImage="/images/complex/sauna.webp"
      />

      {/* ── Included in price strip ── */}
      <section className="bg-dark-surface py-6 relative">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-sm font-medium text-white/50 mr-2">Включено:</span>
            {includedItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-white/80">{item.label}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Tariff table ── */}
      <Section title="Стоимость посещения">
        <PricingTable />
      </Section>

      {/* ── Subscriptions ── */}
      <Section
        title="Абонементы"
        subtitle="Выгодные предложения для постоянных гостей"
        warm
      >
        <div className="space-y-4">
          {subscriptions.map((sub) => (
            <SubscriptionCard
              key={sub.id}
              name={sub.name}
              period={sub.period}
              price={sub.adultPrice}
              discount={sub.discount}
              description={sub.description}
            />
          ))}
        </div>
      </Section>

      {/* ── Gift certificates ── */}
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
            />
          ))}
        </div>
      </Section>

      {/* ── SPA procedures ── */}
      <Section
        title="SPA-процедуры"
        subtitle="Индивидуальный подход к каждому гостю"
        warm
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spaServices.map((spa, i) => (
            <SpaCard
              key={spa.id}
              name={spa.name}
              duration={spa.duration}
              price={spa.price}
              description={spa.description}
              index={i}
            />
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
            Забронируйте посещение онлайн — выберите удобный тариф от 1 часа до безлимита.
          </p>
          <TicketButton onClick={openBooking}>Забронировать посещение</TicketButton>
        </Container>
      </section>
    </PageLayout>
  );
}
