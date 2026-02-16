import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { promotions } from '@/data/promotions';

export default function PromotionsCarousel() {
  return (
    <Section
      title="Акции и скидки"
      subtitle="Выгодные предложения для наших гостей"
    >
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
        {promotions.map((promo) => (
          <Card
            key={promo.id}
            className="min-w-[280px] max-w-[320px] flex-shrink-0 snap-start flex flex-col"
          >
            <Badge variant="gold" className="self-start mb-3">
              {promo.badge}
            </Badge>
            <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
              {promo.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed flex-1">
              {promo.description}
            </p>
            <p className="text-xs text-text-secondary mt-3 pt-3 border-t border-gray-100">
              {promo.conditions}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/promotions"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
        >
          Все акции
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
