import { useState } from 'react';
import {
  Heart, Users, Briefcase, GraduationCap, PartyPopper, Stethoscope,
  Flame, Mail, Send,
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';

const stats = [
  { value: '12', label: 'видов парных' },
  { value: '50+', label: 'сотрудников' },
  { value: '2', label: 'года на рынке' },
  { value: '4.8', label: 'рейтинг' },
];

const benefits = [
  { icon: Heart, title: 'Бесплатное посещение', text: 'Сотрудники и их семьи посещают комплекс бесплатно' },
  { icon: GraduationCap, title: 'Обучение', text: 'Оплачиваем курсы повышения квалификации и мастер-классы' },
  { icon: Briefcase, title: 'Карьерный рост', text: 'Прозрачная система грейдов и возможности для роста' },
  { icon: Users, title: 'Дружный коллектив', text: 'Команда единомышленников с общими ценностями' },
  { icon: Stethoscope, title: 'ДМС', text: 'Добровольное медицинское страхование после испытательного срока' },
  { icon: PartyPopper, title: 'Корпоративы', text: 'Праздники, тимбилдинги и совместный отдых' },
];

const vacancies = [
  {
    title: 'Банщик-парильщик',
    type: 'Полная занятость',
    salary: 'от 80 000 ₽',
    hot: true,
    description: 'Проведение коллективных и индивидуальных парений. Опыт от 1 года, знание техник парения.',
  },
  {
    title: 'SPA-мастер',
    type: 'Полная занятость',
    salary: 'от 70 000 ₽',
    hot: false,
    description: 'Проведение массажей и SPA-процедур. Медицинское образование, опыт от 2 лет.',
  },
  {
    title: 'Администратор рецепции',
    type: 'Сменный график',
    salary: 'от 55 000 ₽',
    hot: true,
    description: 'Встреча гостей, консультация по услугам, работа с кассой. Опыт в сфере услуг приветствуется.',
  },
  {
    title: 'Тренер по плаванию',
    type: 'Частичная занятость',
    salary: 'от 60 000 ₽',
    hot: false,
    description: 'Обучение детей и взрослых плаванию. Сертификат тренера, опыт от 3 лет.',
  },
];

export default function CareersPage() {
  const [selectedVacancy, setSelectedVacancy] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (title: string) => {
    setSelectedVacancy(title);
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setSelectedVacancy(null);
  };

  return (
    <PageLayout title="Вакансии" description="Вакансии термального комплекса Термбург. Присоединяйтесь к нашей команде.">
      <PageHero
        title="Вакансии"
        subtitle="Присоединяйтесь к команде Термбурга"
        backgroundImage="/images/complex/gallery6.webp"
      />

      {/* Статистика */}
      <section className="relative bg-dark-surface py-10">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="block font-heading text-4xl font-bold text-primary md:text-5xl">{s.value}</span>
                <span className="mt-1 block text-sm text-white/60">{s.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Преимущества работы */}
      <Section title="Преимущества работы у нас">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl bg-surface border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-bold text-text-primary mb-1">{b.title}</h3>
              <p className="text-sm text-text-secondary">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Вакансии */}
      <Section title="Открытые вакансии" warm>
        <div className="grid gap-6 sm:grid-cols-2">
          {vacancies.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-surface border border-border/50 p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-xl font-bold text-text-primary">{v.title}</h3>
                {v.hot && (
                  <Badge variant="gold" className="flex items-center gap-1 flex-shrink-0">
                    <Flame className="w-3.5 h-3.5" />
                    Горящая!
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default">{v.type}</Badge>
                <span className="text-sm font-semibold text-primary">{v.salary}</span>
              </div>
              <p className="text-sm text-text-secondary mb-5">{v.description}</p>
              <button
                type="button"
                onClick={() => handleApply(v.title)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Откликнуться
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Форма отклика */}
      <Section id="apply-form" title="Отправить резюме" subtitle="Заполните форму — мы свяжемся с вами в течение 5 рабочих дней">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="rounded-2xl bg-surface border border-primary/30 p-10 text-center">
              <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-text-primary mb-2">Отклик отправлен!</h3>
              <p className="text-text-secondary">Мы рассмотрим вашу заявку и свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-surface border border-border/50 p-8 space-y-5">
              {selectedVacancy && (
                <div className="rounded-xl bg-primary/10 border border-primary/20 px-4 py-3 text-sm text-primary">
                  Отклик на вакансию: <span className="font-semibold">{selectedVacancy}</span>
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    className="w-full rounded-xl bg-background border border-border/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    className="w-full rounded-xl bg-background border border-border/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  placeholder="ivan@email.ru"
                  className="w-full rounded-xl bg-background border border-border/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Сопроводительное письмо</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о себе и своём опыте..."
                  className="w-full rounded-xl bg-background border border-border/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-white hover:bg-primary-light transition-colors"
              >
                <Send className="w-4 h-4" />
                Отправить отклик
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative bg-dark-surface ornament-pattern py-16 text-center">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">
            Не нашли подходящую вакансию?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-white/70">
            Отправьте резюме — мы рассмотрим вашу кандидатуру при открытии новых позиций.
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
