import { Thermometer, ShieldCheck, ListChecks } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { thermalZones } from '@/data/thermalZones';

const visitRules = [
  'Вход с 8:00, последний вход в 22:00',
  'Дети до 3 лет —бесплатно, от 3 до 12 —детский билет',
  'Необходимо иметь сменную обувь (или приобрести на месте)',
  'В термальных зонах обязательно использование полотенца',
  'Максимальное время нахождения в горячих зонах —15 минут',
  'Запрещено посещение в состоянии алкогольного опьянения',
];

export default function AboutPage() {
  return (
    <PageLayout title="О Термбурге" description="Узнайте больше о термальном комплексе Термбург в Москве.">
      <PageHero
        title="О Термбурге"
        backgroundImage="/images/complex/gallery5.webp"
      />

      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-text-primary">
            Термбург — это современный термальный комплекс в районе Печатники (Москва). Мы объединили лучшие термальные традиции со всего мира: от римских
            терм до японского офуро, от турецкого хаммама до скандинавских парений.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary">
            Наша миссия —создать пространство, где каждый гость найдёт свой путь к расслаблению
            и оздоровлению. Мы верим, что забота о себе должна быть доступной и приятной.
          </p>
        </div>
      </Section>

      {/* Thermal zones */}
      <Section
        title="Термальные зоны"
        subtitle="12 видов парных для вашего здоровья и расслабления"
        warm
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {thermalZones.map((zone) => (
            <Card key={zone.id} className="flex flex-col p-0 overflow-hidden">
              <div className="h-32 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-primary">{zone.name}</h3>
                  <div className="flex items-center gap-1 text-accent">
                    <Thermometer className="h-4 w-4" />
                    <span className="text-sm font-medium">{zone.temperature}</span>
                  </div>
                </div>
                <p className="mb-4 flex-1 text-sm text-text-secondary">{zone.description}</p>
                <div className="flex flex-wrap gap-1">
                  {zone.features.map((feature) => (
                    <Badge key={feature} variant="default" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section title="Фотогалерея" subtitle="Загляните в наше пространство">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { src: '/images/complex/pool.webp', alt: 'Бассейн' },
            { src: '/images/complex/gallery9.jpg', alt: 'Зона отдыха' },
            { src: '/images/complex/herbal.webp', alt: 'Травяная парная' },
            { src: '/images/complex/gallery10.jpg', alt: 'Термальная зона' },
            { src: '/images/complex/barrels.webp', alt: 'Бани-бочки' },
            { src: '/images/complex/gallery11.jpg', alt: 'Парная с камнями' },
            { src: '/images/complex/gallery5.webp', alt: 'Интерьер' },
            { src: '/images/complex/gallery12.jpg', alt: 'Парная' },
            { src: '/images/complex/gallery6.webp', alt: 'Каменка' },
            { src: '/images/complex/gallery13.jpg', alt: 'Зона релаксации' },
            { src: '/images/complex/gallery4.webp', alt: 'Отдых' },
            { src: '/images/complex/gallery14.jpg', alt: 'Термальный комплекс' },
          ].map((photo, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Rules */}
      <Section title="Правила посещения">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-center gap-2 text-primary">
            <ShieldCheck className="h-6 w-6" />
            <span className="font-medium">Для вашего комфорта и безопасности</span>
          </div>
          <div className="space-y-3">
            {visitRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl bg-surface p-4 border border-border/50"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <span className="pt-1 text-text-primary">{rule}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-secondary">
            <ListChecks className="h-4 w-4" />
            <span>Полный свод правил доступен на рецепции</span>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
