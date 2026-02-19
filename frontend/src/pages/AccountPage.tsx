import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserCircle,
  CreditCard,
  History,
  Star,
  Edit3,
  Calendar,
  Clock,
  Award,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';

const tabs = [
  { id: 'profile', label: 'Профиль', icon: UserCircle },
  { id: 'subscriptions', label: 'Абонементы', icon: CreditCard },
  { id: 'history', label: 'История', icon: History },
  { id: 'bonus', label: 'Бонусы', icon: Star },
] as const;

type TabId = (typeof tabs)[number]['id'];

// Mock data
const mockProfile = {
  name: 'Александр Иванов',
  phone: '+7 (909) 167-47-46',
  email: 'alex@example.com',
  memberSince: 'Март 2025',
  bonusPoints: 2340,
  level: 'Серебряный',
  nextLevel: 'Золотой',
  progress: 68,
};

const mockSubscriptions = [
  {
    id: 1,
    name: 'Основной безлимит',
    status: 'active' as const,
    validUntil: '15 марта 2026',
    remaining: '25 дней',
    price: 13500,
  },
  {
    id: 2,
    name: 'Дневной безлимит',
    status: 'expired' as const,
    validUntil: '20 декабря 2025',
    remaining: null,
    price: 11700,
  },
];

const mockHistory = [
  { id: 1, date: '16 февраля 2026', tariff: 'Безлимит (абонемент)', duration: '5ч 20мин', price: 0 },
  { id: 2, date: '14 февраля 2026', tariff: 'Безлимит (абонемент)', duration: '4ч 10мин', price: 0 },
  { id: 3, date: '10 февраля 2026', tariff: '3 часа (будни)', duration: '3ч 00мин', price: 1500 },
  { id: 4, date: '5 февраля 2026', tariff: 'Безлимит (абонемент)', duration: '6ч 45мин', price: 0 },
  { id: 5, date: '1 февраля 2026', tariff: '4 часа (выходные)', duration: '4ч 00мин', price: 2600 },
  { id: 6, date: '28 января 2026', tariff: 'Безлимит (абонемент)', duration: '3ч 30мин', price: 0 },
];

function ProfileTab() {
  return (
    <div className="space-y-6">
      {/* Avatar & Name */}
      <div className="flex items-center gap-5">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
          <UserCircle className="h-10 w-10 text-primary/60" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">{mockProfile.name}</h2>
          <p className="text-sm text-text-secondary">Участник с {mockProfile.memberSince}</p>
          <Badge variant="gold" className="mt-1.5">{mockProfile.level}</Badge>
        </div>
      </div>

      {/* Info fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-surface-warm border border-border/30 p-4">
          <p className="text-xs text-text-secondary mb-1">Телефон</p>
          <p className="text-sm font-medium text-text-primary">{mockProfile.phone}</p>
        </div>
        <div className="rounded-xl bg-surface-warm border border-border/30 p-4">
          <p className="text-xs text-text-secondary mb-1">Email</p>
          <p className="text-sm font-medium text-text-primary">{mockProfile.email}</p>
        </div>
      </div>

      {/* Edit button */}
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
      >
        <Edit3 className="h-4 w-4" />
        Редактировать профиль
      </button>
    </div>
  );
}

function SubscriptionsTab() {
  return (
    <div className="space-y-4">
      {mockSubscriptions.map((sub) => (
        <div
          key={sub.id}
          className={`rounded-2xl border p-5 transition-colors ${
            sub.status === 'active'
              ? 'bg-surface border-primary/20'
              : 'bg-surface-warm/50 border-border/30 opacity-70'
          }`}
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-lg font-bold text-text-primary">{sub.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-3.5 w-3.5 text-text-secondary" />
                <span className="text-sm text-text-secondary">
                  до {sub.validUntil}
                </span>
              </div>
            </div>
            <Badge variant={sub.status === 'active' ? 'success' : 'default'}>
              {sub.status === 'active' ? 'Активен' : 'Истёк'}
            </Badge>
          </div>
          {sub.remaining && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span className="text-primary font-medium">Осталось {sub.remaining}</span>
            </div>
          )}
          {sub.status === 'expired' && (
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              Продлить
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      ))}

      <Link
        to="/pricing"
        className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-4 text-sm font-medium text-text-secondary hover:border-primary/30 hover:text-primary transition-colors"
      >
        <CreditCard className="h-4 w-4" />
        Выбрать новый абонемент
      </Link>
    </div>
  );
}

function HistoryTab() {
  return (
    <div className="overflow-x-auto -mx-2">
      {/* Mobile: cards */}
      <div className="space-y-3 sm:hidden px-2">
        {mockHistory.map((visit) => (
          <div key={visit.id} className="rounded-xl bg-surface border border-border/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">{visit.date}</span>
              {visit.price > 0 ? (
                <span className="text-sm font-bold text-primary">
                  {visit.price.toLocaleString('ru-RU')}&nbsp;&#8381;
                </span>
              ) : (
                <Badge variant="success" className="text-xs">Абонемент</Badge>
              )}
            </div>
            <p className="text-xs text-text-secondary">{visit.tariff}</p>
            <p className="text-xs text-text-secondary mt-1">
              <Clock className="inline h-3 w-3 mr-1" />
              {visit.duration}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop: table */}
      <table className="hidden sm:table w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-3 text-xs font-medium text-text-secondary uppercase tracking-wider">Дата</th>
            <th className="text-left py-3 px-3 text-xs font-medium text-text-secondary uppercase tracking-wider">Тариф</th>
            <th className="text-left py-3 px-3 text-xs font-medium text-text-secondary uppercase tracking-wider">Время</th>
            <th className="text-right py-3 px-3 text-xs font-medium text-text-secondary uppercase tracking-wider">Стоимость</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/30">
          {mockHistory.map((visit) => (
            <tr key={visit.id} className="hover:bg-surface-warm/50 transition-colors">
              <td className="py-3 px-3 text-sm text-text-primary">{visit.date}</td>
              <td className="py-3 px-3 text-sm text-text-secondary">{visit.tariff}</td>
              <td className="py-3 px-3 text-sm text-text-secondary">{visit.duration}</td>
              <td className="py-3 px-3 text-sm text-right font-medium">
                {visit.price > 0 ? (
                  <span className="text-primary">{visit.price.toLocaleString('ru-RU')}&nbsp;&#8381;</span>
                ) : (
                  <Badge variant="success" className="text-xs">Абонемент</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BonusTab() {
  return (
    <div className="space-y-6">
      {/* Points balance */}
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6 text-center">
        <Award className="h-10 w-10 text-primary mx-auto mb-3" />
        <p className="text-sm text-text-secondary mb-1">Ваши бонусные баллы</p>
        <p className="text-4xl font-bold text-primary">
          {mockProfile.bonusPoints.toLocaleString('ru-RU')}
        </p>
        <p className="text-xs text-text-secondary mt-1">
          1 балл = 1 &#8381; при оплате услуг
        </p>
      </div>

      {/* Level progress */}
      <div className="rounded-2xl bg-surface border border-border/30 p-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-text-secondary">Текущий уровень</p>
            <p className="text-lg font-bold text-text-primary">{mockProfile.level}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-text-secondary">Следующий уровень</p>
            <p className="text-lg font-bold text-primary">{mockProfile.nextLevel}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-3 rounded-full bg-surface-warm overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
            style={{ width: `${mockProfile.progress}%` }}
          />
        </div>
        <p className="text-xs text-text-secondary mt-2 text-center">
          {mockProfile.progress}% до уровня &laquo;{mockProfile.nextLevel}&raquo;
        </p>
      </div>

      {/* How to earn */}
      <div className="rounded-2xl bg-surface-warm border border-border/30 p-6">
        <h3 className="font-bold text-text-primary mb-3">Как получить баллы</h3>
        <ul className="space-y-2.5 text-sm text-text-secondary">
          <li className="flex items-start gap-2">
            <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-text-primary">5%</strong> от стоимости каждого посещения</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-text-primary">500 баллов</strong> за покупку абонемента</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-text-primary">200 баллов</strong> за день рождения</span>
          </li>
          <li className="flex items-start gap-2">
            <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span><strong className="text-text-primary">100 баллов</strong> за приглашённого друга</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<TabId>('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile': return <ProfileTab />;
      case 'subscriptions': return <SubscriptionsTab />;
      case 'history': return <HistoryTab />;
      case 'bonus': return <BonusTab />;
    }
  };

  return (
    <PageLayout title="Личный кабинет" description="Управление абонементами, историей посещений и бонусной программой Термбурга.">
      {/* Compact hero */}
      <section className="relative bg-dark-surface ornament-pattern py-10 md:py-14">
        <div className="gold-separator absolute bottom-0 left-0 right-0" />
        <Container>
          <h1 className="font-heading text-3xl font-bold text-white md:text-4xl text-center">
            Личный кабинет
          </h1>
        </Container>
      </section>

      <section className="bg-background section-padding">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar tabs */}
            <aside className="lg:w-60 flex-shrink-0">
              <nav className="flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-text-secondary hover:bg-surface-warm hover:text-text-primary'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                      {tab.label}
                    </button>
                  );
                })}

                {/* Logout */}
                <Link
                  to="/login"
                  className="flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium text-text-secondary hover:bg-red-50 hover:text-red-500 transition-colors mt-auto lg:mt-4"
                >
                  <LogOut className="h-4.5 w-4.5" />
                  Выйти
                </Link>
              </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0">
              {renderContent()}
            </main>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
