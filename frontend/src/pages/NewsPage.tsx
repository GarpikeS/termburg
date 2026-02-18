import { Newspaper } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const news = [
  {
    id: 1,
    title: 'Открытие новой травяной парной',
    date: '15 февраля 2026',
    description: 'Мы рады представить обновлённую травяную парную с расширенным набором целебных трав и новой системой подачи пара.',
    tag: 'Обновление',
  },
  {
    id: 2,
    title: 'Зимний фестиваль парения',
    date: '1 февраля 2026',
    description: 'С 1 по 28 февраля приглашаем на зимний фестиваль парения — мастер-классы, авторские программы и подарки для гостей.',
    tag: 'Событие',
  },
  {
    id: 3,
    title: 'Новые SPA-программы',
    date: '20 января 2026',
    description: 'В нашем меню появились три новые SPA-программы: «Сибирский ритуал», «Восточная сказка» и «Скандинавский детокс».',
    tag: 'SPA',
  },
  {
    id: 4,
    title: 'Расширение школы плавания',
    date: '10 января 2026',
    description: 'Школа плавания Термбурга теперь принимает детей от 4 лет. Новые группы по субботам и воскресеньям.',
    tag: 'Школа плавания',
  },
];

export default function NewsPage() {
  return (
    <PageLayout title="Новости" description="Новости и события термального комплекса Термбург.">
      <PageHero
        title="Новости"
        subtitle="Следите за событиями и обновлениями Термбурга"
        backgroundImage="/images/complex/gallery5.webp"
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {news.map((item) => (
            <Card key={item.id}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <Badge variant="gold">{item.tag}</Badge>
                <span className="text-xs text-text-secondary whitespace-nowrap">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
