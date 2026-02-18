import { CheckCircle, Clock, Sparkles, Waves, GraduationCap, Ticket, Gift, CalendarCheck } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import TicketButton from '@/components/ui/TicketButton';
import Container from '@/components/ui/Container';
import { useBooking } from '@/context/BookingContext';
import {
  includedServices,
  spaServices,
  steamServices,
  swimmingSchool,
  type ServiceItem,
} from '@/data/services';

const spaImages: Record<string, string> = {
  'spa-classic': '/images/services/spa-classic.jpg',
  'spa-thai': '/images/services/spa-thai.jpg',
  'spa-stone': '/images/services/spa-stone.jpg',
  'spa-relax': '/images/services/spa-relax.jpg',
  'spa-detox': '/images/services/spa-detox.jpg',
  'spa-peeling': '/images/services/spa-peeling.jpg',
};

const steamImages: Record<string, string> = {
  'steam-author': '/images/services/steam-author.jpg',
  'steam-couple': '/images/services/steam-couple.jpg',
  'steam-corporate': '/images/services/steam-corporate.jpg',
  'steam-kids': '/images/services/steam-kids.jpg',
};

function ServiceCard({ service, image }: { service: ServiceItem; image?: string }) {
  return (
    <Card className="p-0 overflow-hidden flex flex-col">
      {image && (
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={service.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="mb-2 text-lg font-bold text-text-primary">{service.name}</h3>
        <p className="mb-4 text-sm text-text-secondary flex-1">{service.description}</p>
        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="flex items-center gap-1 text-sm text-text-secondary">
            <Clock className="h-4 w-4" />
            {service.duration}
          </span>
          <span className="text-lg font-bold text-primary">
            {service.priceNote || `${service.price.toLocaleString('ru-RU')}\u00A0\u20BD`}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default function ServicesPage() {
  const { openBooking, openPurchase } = useBooking();

  return (
    <PageLayout title="Услуги" description="Полный перечень услуг термального комплекса Термбург.">
      <PageHero
        title="Услуги"
        subtitle="Широкий спектр услуг для вашего здоровья, красоты и расслабления"
        backgroundImage="/images/complex/herbal.webp"
      />

      {/* Included services */}
      <Section
        title="Включено в стоимость посещения"
        subtitle="Все эти услуги вы получаете при покупке любого билета"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {includedServices.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 rounded-xl bg-surface p-4 border border-border/50"
            >
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-success" />
              <span className="text-text-primary font-medium">{service}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Купить */}
      <Section warm>
        <div className="grid gap-5 sm:grid-cols-3">
          <button
            type="button"
            onClick={openBooking}
            className="group rounded-2xl bg-surface border border-border/50 p-6 text-left hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Ticket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">Купить посещение</h3>
            <p className="text-sm text-text-secondary mb-3">Разовый билет для взрослых и детей</p>
            <Badge variant="default">от 540 ₽</Badge>
          </button>

          <button
            type="button"
            onClick={() => openPurchase({ name: 'Абонемент', price: 'от 4 500 ₽' })}
            className="group rounded-2xl bg-surface border border-border/50 p-6 text-left hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <CalendarCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">Купить абонемент</h3>
            <p className="text-sm text-text-secondary mb-3">5 или 10 посещений со скидкой</p>
            <Badge variant="gold">выгодно</Badge>
          </button>

          <button
            type="button"
            onClick={() => openPurchase({ name: 'Подарочный сертификат', price: 'от 3 000 ₽' })}
            className="group rounded-2xl bg-surface border border-border/50 p-6 text-left hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">Сертификат в подарок</h3>
            <p className="text-sm text-text-secondary mb-3">Подарочные сертификаты и боксы</p>
            <Badge variant="default">от 3 000 ₽</Badge>
          </button>
        </div>
      </Section>

      {/* SPA services */}
      <Section
        title="SPA-процедуры"
        subtitle="Профессиональные процедуры для глубокого расслабления и восстановления"
        warm
      >
        <div className="mb-6 flex items-center gap-2 text-accent">
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-medium">Записывайтесь заранее — количество мест ограничено</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spaServices.map((service) => (
            <ServiceCard key={service.id} service={service} image={spaImages[service.id]} />
          ))}
        </div>
      </Section>

      {/* Steam services */}
      <Section
        title="Парения"
        subtitle="Индивидуальные и групповые программы парения от наших мастеров"
      >
        <div className="mb-6 flex items-center gap-2 text-primary">
          <Waves className="h-5 w-5" />
          <span className="text-sm font-medium">Авторские методики от опытных банщиков</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steamServices.map((service) => (
            <ServiceCard key={service.id} service={service} image={steamImages[service.id]} />
          ))}
        </div>
      </Section>

      {/* Swimming school */}
      <Section
        title="Школа плавания"
        subtitle="Обучение плаванию для детей и взрослых в термальном бассейне"
        warm
      >
        <div className="mb-6">
          <div className="mb-4 overflow-hidden rounded-xl">
            <img
              src="/images/complex/pool.webp"
              alt="Школа плавания в Термбурге"
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center gap-2 text-info">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-medium">Сертифицированные тренеры с опытом от 5 лет</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {swimmingSchool.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={openBooking}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-background hover:bg-primary-light transition-colors"
          >
            Записаться на занятие
          </button>
          <p className="mt-3 text-sm text-text-secondary">
            Или позвоните: <a href="tel:+79091674746" className="text-primary hover:underline">+7 (909) 167-47-46</a>
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative bg-dark-surface ornament-pattern py-16 text-center">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Хотите забронировать услугу?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Оставьте заявку онлайн или позвоните нам, и мы подберём для вас идеальную программу.
          </p>
          <TicketButton onClick={openBooking}>Забронировать посещение</TicketButton>
        </Container>
      </section>
    </PageLayout>
  );
}
