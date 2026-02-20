import { useState } from 'react';
import {
  Heart, Users, Briefcase, GraduationCap, PartyPopper, Stethoscope,
  Flame, Mail, Send, X, Clock, MapPin, FileText, ChevronRight,
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

interface Vacancy {
  title: string;
  type: string;
  schedule: string;
  salary: string;
  hot: boolean;
  shortDescription: string;
  description: string;
  employment: string;
  requirements: string[];
  image: string;
}

const vacancies: Vacancy[] = [
  {
    title: 'Банщик-парильщик',
    type: 'Полная занятость',
    schedule: '2/2, смены 08:00–20:00',
    salary: 'от 80 000 ₽',
    hot: true,
    shortDescription: 'Проведение коллективных и индивидуальных парений по авторским методикам Термбурга.',
    description: 'Ищем увлечённого мастера парения, который готов дарить гостям незабываемые впечатления. Вы будете проводить авторские парения в русской парной, хаммаме и финской сауне, работать с вениками и травяными настоями.',
    employment: 'Оформление по ТК РФ, испытательный срок 2 месяца',
    requirements: ['Опыт работы банщиком от 1 года', 'Знание техник парения (русская, финская, турецкая)', 'Умение работать с вениками', 'Коммуникабельность и любовь к делу'],
    image: '/images/services/steam-author.webp',
  },
  {
    title: 'SPA-мастер',
    type: 'Полная занятость',
    schedule: '5/2, смены 10:00–20:00',
    salary: 'от 70 000 ₽',
    hot: false,
    shortDescription: 'Проведение массажей и SPA-процедур для гостей комплекса.',
    description: 'Приглашаем профессионального SPA-мастера в команду Термбурга. Вы будете проводить классический, тайский массаж, стоун-терапию и комплексные SPA-программы в уютной обстановке термального комплекса.',
    employment: 'Оформление по ТК РФ, ДМС после 3 месяцев',
    requirements: ['Медицинское образование', 'Опыт от 2 лет', 'Знание техник классического и тайского массажа', 'Сертификаты о повышении квалификации'],
    image: '/images/services/spa-classic.webp',
  },
  {
    title: 'Администратор рецепции',
    type: 'Сменный график',
    schedule: '2/2, смены 08:00–22:00',
    salary: 'от 55 000 ₽',
    hot: true,
    shortDescription: 'Встреча гостей, консультация по услугам, работа с кассой и бронированиями.',
    description: 'Вы — первый человек, которого видит гость Термбурга. От вас зависит первое впечатление. Вы будете встречать гостей, рассказывать об услугах, оформлять посещения и следить за комфортом в зоне рецепции.',
    employment: 'Оформление по ТК РФ, бонусы за продажи',
    requirements: ['Опыт в сфере услуг/гостеприимства', 'Грамотная речь и приятная внешность', 'Уверенный пользователь ПК', 'Стрессоустойчивость и позитивный настрой'],
    image: '/images/complex/gallery9.webp',
  },
  {
    title: 'Тренер по плаванию',
    type: 'Частичная занятость',
    schedule: 'По расписанию, 3–5 дней в неделю',
    salary: 'от 60 000 ₽',
    hot: false,
    shortDescription: 'Обучение детей и взрослых плаванию в термальном бассейне комплекса.',
    description: 'Ищем тренера для нашей школы плавания. Вы будете проводить групповые и индивидуальные занятия для детей от 4 лет и взрослых в тёплом термальном бассейне. Гибкий график — удобно совмещать.',
    employment: 'ГПХ или самозанятость, возможен переход на ТК',
    requirements: ['Сертификат тренера по плаванию', 'Опыт работы от 3 лет', 'Опыт работы с детьми', 'Ответственность и пунктуальность'],
    image: '/images/complex/pool.webp',
  },
];

function VacancyModal({ vacancy, onClose, onApply }: { vacancy: Vacancy; onClose: () => void; onApply: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Hero */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img src={vacancy.image} alt={vacancy.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 rounded-full bg-black/40 p-2 text-white hover:bg-black/60 transition-colors" aria-label="Закрыть">
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-heading text-xl font-bold text-white">{vacancy.title}</h2>
              {vacancy.hot && <Badge variant="gold" className="text-xs"><Flame className="w-3 h-3 mr-0.5" />Горящая</Badge>}
            </div>
            <span className="text-lg font-bold text-primary">{vacancy.salary}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Info chips */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 text-sm text-text-secondary">
              <Briefcase className="w-4 h-4 text-primary" />
              {vacancy.type}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-text-secondary">
              <Clock className="w-4 h-4 text-primary" />
              {vacancy.schedule}
            </div>
          </div>

          {/* Description */}
          <p className="text-text-primary leading-relaxed">{vacancy.description}</p>

          {/* Employment */}
          <div className="flex items-start gap-2">
            <FileText className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-medium text-text-primary">Оформление:</span>
              <span className="text-sm text-text-secondary ml-1">{vacancy.employment}</span>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-3">Требования</h3>
            <ul className="space-y-2">
              {vacancy.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text-primary">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-text-secondary">
            <MapPin className="w-4 h-4 text-primary" />
            Москва, ул. Гурьянова, д. 30 (м. Печатники)
          </div>

          {/* CTA */}
          <button type="button" onClick={onApply} className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-light transition-colors">
            Откликнуться на вакансию
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CareersPage() {
  const [selectedVacancy, setSelectedVacancy] = useState<string>(vacancies[0].title);
  const [modalVacancy, setModalVacancy] = useState<Vacancy | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

      {/* Вакансии + Форма */}
      <Section title="Открытые вакансии" warm>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* LEFT — Вакансии (3 колонки) */}
          <div className="lg:col-span-3 space-y-4">
            {vacancies.map((v) => (
              <button
                key={v.title}
                type="button"
                onClick={() => setModalVacancy(v)}
                className="group w-full rounded-2xl bg-surface border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-left flex"
              >
                <div className="w-28 sm:w-36 flex-shrink-0 overflow-hidden">
                  <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-4 sm:p-5 flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors truncate">{v.title}</h3>
                    {v.hot && (
                      <Badge variant="gold" className="flex items-center gap-0.5 flex-shrink-0 text-xs">
                        <Flame className="w-3 h-3" />
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary mb-2 line-clamp-2">{v.shortDescription}</p>
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="text-xs">{v.type}</Badge>
                    <span className="text-sm font-semibold text-primary">{v.salary}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — Форма (2 колонки) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {submitted ? (
                <div className="rounded-2xl bg-surface border border-primary/30 p-8 text-center">
                  <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">Отклик отправлен!</h3>
                  <p className="text-text-secondary text-sm">Мы рассмотрим заявку и свяжемся с вами в течение 5 рабочих дней.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-sm text-primary font-medium hover:text-primary-light transition-colors">
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl bg-surface border border-border/50 p-6 space-y-4">
                  <h3 className="text-lg font-bold text-text-primary">Откликнуться</h3>

                  {/* Vacancy select */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Вакансия</label>
                    <select
                      value={selectedVacancy}
                      onChange={(e) => setSelectedVacancy(e.target.value)}
                      className="w-full rounded-xl bg-background border border-border/50 px-4 py-3 text-sm text-text-primary focus:border-primary focus:outline-none transition-colors appearance-none"
                    >
                      {vacancies.map((v) => (
                        <option key={v.title} value={v.title}>{v.title} — {v.salary}</option>
                      ))}
                      <option value="other">Другая / Открытый отклик</option>
                    </select>
                  </div>

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
                    <label className="block text-sm font-medium text-text-primary mb-1.5">О себе</label>
                    <textarea
                      rows={3}
                      placeholder="Кратко о вашем опыте..."
                      className="w-full rounded-xl bg-background border border-border/50 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white hover:bg-primary-light transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Отправить отклик
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    Или напишите на <a href="mailto:hr@termburg.ru" className="text-primary hover:underline">hr@termburg.ru</a>
                  </p>
                </form>
              )}
            </div>
          </div>
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

      {/* Modal */}
      {modalVacancy && (
        <VacancyModal
          vacancy={modalVacancy}
          onClose={() => setModalVacancy(null)}
          onApply={() => {
            setSelectedVacancy(modalVacancy.title);
            setModalVacancy(null);
            document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}
    </PageLayout>
  );
}
