import { CheckCircle, Clock, Sparkles, Waves, GraduationCap } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import TicketButton from '@/components/ui/TicketButton';
import Container from '@/components/ui/Container';
import {
  includedServices,
  spaServices,
  steamServices,
  swimmingSchool,
  type ServiceItem,
} from '@/data/services';

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Card>
      <h3 className="mb-2 text-lg font-bold text-text-primary">{service.name}</h3>
      <p className="mb-4 text-sm text-text-secondary">{service.description}</p>
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="flex items-center gap-1 text-sm text-text-secondary">
          <Clock className="h-4 w-4" />
          {service.duration}
        </span>
        <span className="text-lg font-bold text-primary">
          {service.priceNote || `${service.price.toLocaleString('ru-RU')}\u00A0\u20BD`}
        </span>
      </div>
    </Card>
  );
}

export default function ServicesPage() {
  return (
    <PageLayout title="Услуги" description="Полный перечень услуг термального комплекса Термбург.">
      {/* Hero */}
      <section className="relative py-16 text-center md:py-20 bg-gradient-to-b from-surface-warm to-background overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <Container>
          <h1 className="font-heading text-4xl font-bold md:text-5xl text-text-primary">Услуги</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Широкий спектр услуг для вашего здоровья, красоты и расслабления
          </p>
        </Container>
      </section>

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

      {/* SPA services */}
      <Section
        title="SPA-процедуры"
        subtitle="Профессиональные процедуры для глубокого расслабления и восстановления"
        warm
      >
        <div className="mb-6 flex items-center gap-2 text-accent">
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-medium">Записывайтесь заранее -- количество мест ограничено</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spaServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
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
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* Swimming school */}
      <Section
        title="Школа плавания"
        subtitle="Обучение плаванию для детей и взрослых в термальном бассейне"
        warm
      >
        <div className="mb-6 flex items-center gap-2 text-info">
          <GraduationCap className="h-5 w-5" />
          <span className="text-sm font-medium">Сертифицированные тренеры с опытом от 5 лет</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {swimmingSchool.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-surface-warm py-16 text-center">
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
            Хотите забронировать услугу?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-text-secondary">
            Оставьте заявку онлайн или позвоните нам, и мы подберём для вас идеальную программу.
          </p>
          <TicketButton href="#">Забронировать посещение</TicketButton>
        </Container>
      </section>
    </PageLayout>
  );
}
