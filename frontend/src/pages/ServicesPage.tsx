import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Sparkles, Waves, Ticket, Gift, CalendarCheck, X, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import TicketButton from '@/components/ui/TicketButton';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { useBooking } from '@/context/BookingContext';
import {
  includedServices,
  spaServices,
  steamServices,
  type ServiceItem,
} from '@/data/services';

const spaImages: Record<string, string> = {
  'spa-classic': '/images/services/spa-classic.webp',
  'spa-thai': '/images/services/spa-thai.webp',
  'spa-stone': '/images/services/spa-stone.webp',
  'spa-relax': '/images/services/spa-relax.webp',
  'spa-detox': '/images/services/spa-detox.webp',
  'spa-peeling': '/images/services/spa-peeling.webp',
};

const steamImages: Record<string, string> = {
  'steam-author': '/images/services/steam-author.webp',
  'steam-couple': '/images/services/steam-couple.webp',
  'steam-corporate': '/images/services/steam-corporate.webp',
  'steam-kids': '/images/services/steam-kids.webp',
};

function ServiceCard({
  service,
  image,
  onClick,
}: {
  service: ServiceItem;
  image?: string;
  onClick?: () => void;
}) {
  const hasDetails = !!service.fullDescription;

  return (
    <Card
      className={`p-0 overflow-hidden flex flex-col ${hasDetails ? 'cursor-pointer hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300' : ''}`}
      onClick={hasDetails ? onClick : undefined}
    >
      {image && (
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={service.name}
            className={`w-full h-full object-cover ${hasDetails ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
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
        {hasDetails && (
          <p className="mt-2 text-xs text-primary/70 text-center">Нажмите, чтобы узнать подробнее</p>
        )}
      </div>
    </Card>
  );
}

function ServiceModal({
  service,
  image,
  onClose,
}: {
  service: ServiceItem;
  image?: string;
  onClose: () => void;
}) {
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        {image && (
          <div className="h-56 sm:h-64 overflow-hidden rounded-t-2xl">
            <img src={image} alt={service.name} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-text-primary mb-2">{service.name}</h2>
          <div className="flex items-center gap-4 mb-5">
            <span className="flex items-center gap-1.5 text-sm text-text-secondary">
              <Clock className="h-4 w-4" />
              {service.duration}
            </span>
            <span className="text-lg font-bold text-primary">
              {service.priceNote || `${service.price.toLocaleString('ru-RU')}\u00A0\u20BD`}
            </span>
          </div>

          {service.fullDescription && (
            <p className="text-text-secondary leading-relaxed mb-6">
              {service.fullDescription}
            </p>
          )}

          {service.includes && service.includes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                Что входит
              </h3>
              <ul className="space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={() => { onClose(); openBooking(); }}
            className="w-full rounded-xl bg-primary px-6 py-3 text-center font-semibold text-white hover:bg-primary-light transition-colors duration-200"
          >
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { openBooking, openPurchase } = useBooking();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const allImages: Record<string, string> = { ...spaImages, ...steamImages };

  const openModal = (service: ServiceItem) => {
    setSelectedService(service);
    setSelectedImage(allImages[service.id]);
  };

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

      {/* What to bring + Procedure time notice */}
      <Section warm>
        <div className="grid md:grid-cols-2 gap-6">
          {/* What to bring */}
          <div className="rounded-2xl bg-surface border border-border/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-sky-500" />
              <h3 className="font-heading text-lg font-bold text-text-primary">Не забудьте взять с собой</h3>
            </div>
            <ul className="space-y-2.5">
              {[
                'Полотенце',
                'Купальник',
                'Шлёпки или резиновые тапочки',
                'Мочалка, шампунь, гель для душа',
                'Расчёска',
                'Полотенце для головы или банную шапочку',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-secondary/70 mt-4 pt-3 border-t border-border/50">
              Если вы что-то забудете — не переживайте! Всё можно приобрести на ресепшен.
            </p>
          </div>

          {/* Procedure time notice */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-amber-50 border border-amber-200/50 p-6 flex-1">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-heading text-lg font-bold text-amber-800">Важно знать</h3>
              </div>
              <p className="text-sm text-amber-800/80 leading-relaxed">
                Время, проведённое на процедурах (SPA, массаж, парения), <strong>не входит</strong> в оплаченное время посещения комплекса. Рекомендуем учитывать это при выборе тарифа.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Купить */}
      <Section>
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

      {/* Steam services */}
      <Section
        title="Парения"
        subtitle="Индивидуальные и групповые программы парения от наших мастеров"
        warm
      >
        <div className="mb-6 flex items-center gap-2 text-primary">
          <Waves className="h-5 w-5" />
          <span className="text-sm font-medium">Авторские методики от опытных банщиков</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steamServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              image={steamImages[service.id]}
              onClick={() => openModal(service)}
            />
          ))}
        </div>
      </Section>

      {/* SPA services */}
      <Section
        title="SPA-процедуры"
        subtitle="Профессиональные процедуры для глубокого расслабления и восстановления"
      >
        <div className="mb-6 flex items-center gap-2 text-accent">
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-medium">Записывайтесь заранее — количество мест ограничено</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spaServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              image={spaImages[service.id]}
              onClick={() => openModal(service)}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative bg-dark-surface ornament-pattern py-16 text-center">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Хотите купить услугу?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Оставьте заявку онлайн или позвоните нам, и мы подберём для вас идеальную программу.
          </p>
          <TicketButton onClick={openBooking}>Купить билет</TicketButton>
        </Container>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          image={selectedImage}
          onClose={() => setSelectedService(null)}
        />
      )}
    </PageLayout>
  );
}
