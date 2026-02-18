import { Handshake, Mail, Phone } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';

const directions = [
  {
    title: 'Корпоративные мероприятия',
    description: 'Организация корпоративных выездов, тимбилдингов и праздников в термальном комплексе. Индивидуальные программы парения, банкетное меню.',
  },
  {
    title: 'Партнёрские программы',
    description: 'Взаимное продвижение, кросс-маркетинг, совместные акции с фитнес-клубами, отелями, ресторанами и wellness-брендами.',
  },
  {
    title: 'Аренда пространств',
    description: 'Аренда зон комплекса для фотосъёмок, мастер-классов, презентаций и частных мероприятий.',
  },
  {
    title: 'Поставщикам',
    description: 'Сотрудничество с поставщиками банных аксессуаров, косметических средств, продуктов питания и напитков.',
  },
];

export default function PartnersPage() {
  return (
    <PageLayout title="Сотрудничество" description="Партнёрские программы и сотрудничество с термальным комплексом Термбург.">
      <PageHero
        title="Сотрудничество"
        subtitle="Развиваем партнёрские отношения и создаём совместные проекты"
        backgroundImage="/images/complex/gallery4.webp"
      />

      <Section title="Направления сотрудничества">
        <div className="grid gap-6 sm:grid-cols-2">
          {directions.map((dir) => (
            <Card key={dir.title}>
              <h3 className="text-lg font-bold text-text-primary mb-2">{dir.title}</h3>
              <p className="text-sm text-text-secondary">{dir.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <section className="relative bg-dark-surface ornament-pattern py-16 text-center">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <Handshake className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Свяжитесь с нами
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Отправьте предложение о сотрудничестве — мы рассмотрим его в течение 3 рабочих дней.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:partners@termburg.ru" className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors">
              <Mail className="w-5 h-5" />
              partners@termburg.ru
            </a>
            <a href="tel:+79091674746" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              +7 (909) 167-47-46
            </a>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
