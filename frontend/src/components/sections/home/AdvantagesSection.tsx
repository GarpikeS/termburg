import { Thermometer, Heart, Clock, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const advantages = [
  {
    icon: Thermometer,
    title: '8 термальных зон',
    description:
      'От римских терм до японского офуро — разнообразие традиций со всего мира',
  },
  {
    icon: Heart,
    title: 'Забота о здоровье',
    description:
      'Термальные процедуры укрепляют иммунитет и улучшают самочувствие',
  },
  {
    icon: Clock,
    title: 'Гибкое расписание',
    description:
      'Ежедневные мероприятия, специальные программы для пенсионеров',
  },
  {
    icon: Sparkles,
    title: 'SPA и массаж',
    description:
      'Профессиональные SPA-процедуры и авторские парения',
  },
];

export default function AdvantagesSection() {
  return (
    <Section
      title="Почему Термбург"
      subtitle="Всё для вашего здоровья и отдыха в одном месте"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {advantages.map((item) => (
          <Card key={item.title} className="text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
