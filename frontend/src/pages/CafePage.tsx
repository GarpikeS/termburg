import { Coffee, GlassWater, UtensilsCrossed, Cake } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { cafeMenu } from '@/data/cafe';
import { type ReactNode } from 'react';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

const categoryConfig: Record<string, { title: string; icon: ReactNode }> = {
  hotDrinks: {
    title: 'Горячие напитки',
    icon: <Coffee className="w-6 h-6 text-accent" />,
  },
  coldDrinks: {
    title: 'Холодные напитки',
    icon: <GlassWater className="w-6 h-6 text-primary" />,
  },
  snacks: {
    title: 'Закуски',
    icon: <UtensilsCrossed className="w-6 h-6 text-accent" />,
  },
  desserts: {
    title: 'Десерты',
    icon: <Cake className="w-6 h-6 text-primary" />,
  },
};

const categories = Object.entries(cafeMenu) as [string, MenuItem[]][];

export default function CafePage() {
  return (
    <PageLayout title="Кафетерий" description="Кафетерий термального комплекса Термбург — меню, напитки и закуски.">
      {/* Hero */}
      <section className="relative section-padding bg-gradient-to-b from-surface-warm to-background overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <Container>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary text-center">
            Кафетерий
          </h1>
          <p className="mt-4 text-lg text-text-secondary text-center max-w-3xl mx-auto">
            Уютный кафетерий Термбурга — идеальное место для отдыха между процедурами.
            Натуральные напитки, лёгкие закуски и домашние десерты.
          </p>
        </Container>
      </section>

      {/* Menu sections */}
      {categories.map(([key, items], index) => {
        const config = categoryConfig[key];
        if (!config) return null;

        return (
          <Section key={key} title={config.title} warm={index % 2 !== 0}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <Card key={item.name} className="flex items-start justify-between gap-4 p-5">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-surface-warm flex items-center justify-center flex-shrink-0">
                      {config.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-medium text-text-primary">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-lg font-bold text-primary whitespace-nowrap">
                    {item.price} ₽
                  </p>
                </Card>
              ))}
            </div>
          </Section>
        );
      })}

      {/* Note */}
      <section className="py-8 bg-surface-warm">
        <Container>
          <p className="text-center text-text-secondary text-sm">
            Меню может изменяться. Уточняйте наличие позиций у персонала.
          </p>
        </Container>
      </section>
    </PageLayout>
  );
}
