import { Clock, Baby, Footprints, Landmark, Timer, Ban } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';

const complexRules = [
  { icon: Clock, text: 'Вход с 8:00, последний вход в 22:00' },
  { icon: Baby, text: 'Дети до 3 лет — бесплатно, от 3 до 12 — детский билет' },
  { icon: Footprints, text: 'Необходимо иметь сменную обувь (или приобрести на месте)' },
  { icon: Landmark, text: 'В термальных зонах обязательно использование полотенца' },
  { icon: Timer, text: 'Максимальное время нахождения в горячих зонах — 15 минут' },
  { icon: Ban, text: 'Запрещено посещение в состоянии алкогольного опьянения' },
];

export default function RulesPage() {
  return (
    <PageLayout title="Правила комплекса" description="Правила посещения термального комплекса Термбург.">
      <PageHero
        title="Правила комплекса"
        subtitle="Для комфортного и безопасного отдыха всех гостей"
        backgroundImage="/images/complex/gallery8.webp"
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-4">
          {complexRules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl bg-surface border border-border/50 p-6"
              >
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-base text-text-primary leading-relaxed pt-2.5">{rule.text}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </PageLayout>
  );
}
