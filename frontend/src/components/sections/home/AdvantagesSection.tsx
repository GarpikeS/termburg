import { Link } from 'react-router-dom';
import { Flame, Heart, Clock, Sparkles, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const advantages = [
  {
    icon: Flame,
    title: '12 видов парных',
    description:
      'Русская, сибирская, травяная, хаммам, шаманская, деревенская, бани-бочки, песчаная, соляная и другие',
    to: '/termliny',
  },
  {
    icon: Clock,
    title: 'Гибкое расписание',
    description:
      'Бесплатные и платные коллективные парения, аквааэробика, йога и суставная гимнастика',
    to: '/schedule',
  },
  {
    icon: Sparkles,
    title: 'Парения и SPA',
    description:
      'Авторские парения от мастеров, SPA-процедуры, массажи и пилинги',
    to: '/services',
  },
  {
    icon: Heart,
    title: 'Забота о здоровье',
    description:
      '7 видов косметических глин: белая, голубая, зелёная, красная, жёлтая, чёрная и розовая',
    to: '/services',
  },
  {
    icon: Users,
    title: 'Семейный отдых',
    description:
      'Детский бассейн, школа плавания, анимация и мягкие парения для всей семьи',
    to: '/swimming-school',
  },
];

export default function AdvantagesSection() {
  return (
    <Section
      warm
      separator
      title="Почему Термбург"
      subtitle="Всё для вашего здоровья и отдыха в одном месте"
    >
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
        {advantages.map((item) => (
          <Link key={item.title} to={item.to} className="group">
            <Card className="text-center flex flex-col items-center h-full group-hover:border-primary/40 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
