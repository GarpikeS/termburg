import { Tag, Gift, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import TicketButton from '@/components/ui/TicketButton';
import Container from '@/components/ui/Container';
import { promotions } from '@/data/promotions';

export default function PromotionsPage() {
  return (
    <PageLayout title="Акции" description="Актуальные акции и специальные предложения Термбурга.">
      <PageHero
        title="Акции и спецпредложения"
        subtitle="Приятные бонусы для наших гостей. Следите за обновлениями -- мы регулярно добавляем новые предложения."
        backgroundImage="/images/complex/gallery4.webp"
      />

      {/* Promotions grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <Card key={promo.id} className="relative flex flex-col overflow-hidden p-0">
              {/* Banner image */}
              {promo.banner && (
                <div className="h-32 overflow-hidden">
                  <img
                    src={promo.banner}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="relative flex flex-col flex-1 p-6">
                {/* Badge */}
                <Badge variant="gold" className="absolute right-4 top-4">
                  <Tag className="mr-1 h-3 w-3" />
                  {promo.badge}
                </Badge>

                {/* Content */}
                <div className="mb-4 pt-2">
                  {promo.discount && (
                    <span className="mb-2 inline-block text-3xl font-bold text-accent">
                      -{promo.discount}%
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-text-primary">{promo.title}</h3>
                </div>

                <p className="mb-4 flex-1 text-sm text-text-secondary">{promo.description}</p>

                {/* Conditions */}
                <div className="rounded-lg bg-surface-warm px-4 py-3">
                  <p className="text-xs font-medium text-text-secondary">Условие:</p>
                  <p className="text-sm text-text-primary">{promo.conditions}</p>
                </div>

                {promo.validUntil && (
                  <p className="mt-3 text-xs text-text-secondary">
                    Действует до {promo.validUntil}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-surface-warm py-16 text-center">
        <Container>
          <div className="mx-auto max-w-xl">
            <Gift className="mx-auto mb-4 h-12 w-12 text-accent" />
            <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
              Воспользуйтесь предложениями
            </h2>
            <p className="mb-8 text-text-secondary">
              Забронируйте посещение и сообщите администратору об акции при оплате. Акции не суммируются.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <TicketButton href="#">
                Забронировать
                <ArrowRight className="ml-2 h-4 w-4" />
              </TicketButton>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
