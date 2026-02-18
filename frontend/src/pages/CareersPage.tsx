import { Briefcase, Heart, Users, Mail } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';

const vacancies = [
  {
    title: 'Банщик-парильщик',
    type: 'Полная занятость',
    description: 'Проведение коллективных и индивидуальных парений. Опыт от 1 года, знание техник парения.',
  },
  {
    title: 'SPA-мастер',
    type: 'Полная занятость',
    description: 'Проведение массажей и SPA-процедур. Медицинское образование, опыт от 2 лет.',
  },
  {
    title: 'Администратор рецепции',
    type: 'Сменный график',
    description: 'Встреча гостей, консультация по услугам, работа с кассой. Опыт в сфере услуг приветствуется.',
  },
  {
    title: 'Тренер по плаванию',
    type: 'Частичная занятость',
    description: 'Обучение детей и взрослых плаванию. Сертификат тренера, опыт от 3 лет.',
  },
];

const benefits = [
  { icon: Heart, text: 'Бесплатное посещение комплекса' },
  { icon: Users, text: 'Дружный коллектив профессионалов' },
  { icon: Briefcase, text: 'Официальное трудоустройство' },
];

export default function CareersPage() {
  return (
    <PageLayout title="Вакансии" description="Вакансии термального комплекса Термбург. Присоединяйтесь к нашей команде.">
      <PageHero
        title="Вакансии"
        subtitle="Присоединяйтесь к команде Термбурга"
        backgroundImage="/images/complex/gallery6.webp"
      />

      {/* Benefits */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b.text} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-medium text-text-primary">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vacancies */}
      <Section title="Открытые вакансии" warm>
        <div className="grid gap-6 sm:grid-cols-2">
          {vacancies.map((v) => (
            <Card key={v.title}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-text-primary">{v.title}</h3>
                <Badge variant="default">{v.type}</Badge>
              </div>
              <p className="text-sm text-text-secondary">{v.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative bg-dark-surface ornament-pattern py-16 text-center">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Хотите стать частью команды?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Отправьте резюме на почту — мы ответим в течение 5 рабочих дней.
          </p>
          <a
            href="mailto:hr@termburg.ru"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-light transition-colors"
          >
            <Mail className="w-5 h-5" />
            hr@termburg.ru
          </a>
        </Container>
      </section>
    </PageLayout>
  );
}
