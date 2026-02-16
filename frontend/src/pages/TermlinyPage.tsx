import { useState } from 'react';
import { Flame, Droplets, Wind, Home, BookOpen, Heart, Sparkles, ChevronDown } from 'lucide-react';
import { type ReactNode } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { termliny, type Termlin } from '@/data/termliny';

const elementIcons: Record<string, ReactNode> = {
  fire: <Flame className="w-6 h-6" />,
  herb: <Sparkles className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  wind: <Wind className="w-6 h-6" />,
  wisdom: <BookOpen className="w-6 h-6" />,
  love: <Heart className="w-6 h-6" />,
  water: <Droplets className="w-6 h-6" />,
};

const elementColors: Record<string, string> = {
  fire: 'text-accent bg-accent/10',
  herb: 'text-success bg-success/10',
  home: 'text-warm-gold bg-warm-gold/10',
  wind: 'text-info bg-info/10',
  wisdom: 'text-primary bg-primary/10',
  love: 'text-accent-light bg-accent/10',
  water: 'text-info bg-info/10',
};

function TermlinCard({ termlin }: { termlin: Termlin }) {
  const [expanded, setExpanded] = useState(false);
  const colors = elementColors[termlin.element] || 'text-primary bg-primary/10';

  return (
    <Card className="overflow-hidden">
      {/* Character image */}
      <div className="relative bg-[#1a1a2e]">
        <img
          src={termlin.image}
          alt={termlin.name}
          className="w-full aspect-square object-contain mx-auto"
          loading="lazy"
        />
        <div className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm ${colors}`}>
          {elementIcons[termlin.element]}
        </div>
      </div>

      <div className="p-6 pt-3">
        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="font-heading text-xl font-bold text-text-primary">
            {termlin.name}
          </h3>
          <p className="text-sm text-primary font-medium">{termlin.title}</p>
        </div>

        {/* Meaning */}
        <p className="text-sm text-text-secondary mb-3 italic">
          Значение имени: «{termlin.nameMeaning}»
        </p>

        {/* Signs & Mission */}
        <p className="text-text-primary text-sm mb-2">
          <span className="text-text-secondary">Приметы:</span> {termlin.signs}
        </p>
        <p className="text-text-primary text-sm mb-3">
          <span className="text-text-secondary">Миссия:</span> {termlin.mission}
        </p>

        {/* Baths */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          {termlin.baths}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 w-full text-sm text-text-secondary hover:text-primary transition-colors mt-2"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          {expanded ? 'Свернуть' : 'История, характер, приметы...'}
        </button>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-border/50 space-y-3 text-sm">
            <div>
              <p className="text-text-secondary mb-1 font-medium">История</p>
              <p className="text-text-primary">{termlin.history}</p>
            </div>
            <div>
              <p className="text-text-secondary mb-1 font-medium">Характер</p>
              <p className="text-text-primary">{termlin.character}</p>
            </div>
            <div>
              <p className="text-text-secondary mb-1 font-medium">Привычки</p>
              <p className="text-text-primary">{termlin.habits}</p>
            </div>
            <div>
              <p className="text-text-secondary mb-1 font-medium">Любимые выражения</p>
              <div className="flex flex-wrap gap-2">
                {termlin.expressions.map((expr) => (
                  <span
                    key={expr}
                    className="px-2.5 py-1 rounded-full bg-surface-warm text-text-primary text-xs border border-border/30"
                  >
                    «{expr}»
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-text-secondary mb-1 font-medium">Приметы и поверья</p>
              <p className="text-text-primary">{termlin.omens}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default function TermlinyPage() {
  return (
    <PageLayout
      title="Термлины — духи-хранители Термбурга"
      description="Познакомьтесь с Термлинами — мифологическими духами-хранителями бань термального комплекса Термбург."
      ogImage="/images/termliny/og.webp"
    >
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative">
          <img
            src="/images/termliny/hero.webp?v=2"
            alt="Семья духов-хранителей Термбурга в сказочной бане"
            className="w-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-6 md:pb-10">
            <Container>
              <div className="text-center">
                <img
                  src="/images/termliny-logo-dark.svg"
                  alt="Термлины"
                  className="h-14 md:h-20 mx-auto mb-3"
                />
                <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto drop-shadow-lg">
                  Каждая баня и сауна Термбурга находится под покровительством своего
                  духа-хранителя. Познакомьтесь с ними — и ваш визит станет ещё более
                  особенным.
                </p>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Family tree intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Семья духов Термбурга
          </h2>
          <p className="text-text-secondary text-lg">
            Банник-Яромир привёл свою семью в Термбург, и теперь каждый из них
            оберегает свою часть комплекса. Здесь живут и кот-философ Ведагор,
            и таинственный дворовой Казимир, и юная берегиня Леля.
          </p>
        </div>
      </Section>

      {/* Termlin cards */}
      <Section warm>
        <div className="grid md:grid-cols-2 gap-6">
          {termliny.map((t) => (
            <TermlinCard key={t.id} termlin={t} />
          ))}
        </div>
      </Section>

      {/* Lore note */}
      <section className="py-12 bg-background">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <img
              src="/images/termliny-symbol.svg"
              alt=""
              className="w-12 h-12 mx-auto mb-4 opacity-40"
            />
            <p className="text-text-secondary text-sm leading-relaxed">
              Термлины — мифологические персонажи термального комплекса Термбург.
              Их истории вдохновлены славянским фольклором и банными традициями.
              Приходите в гости — и, может быть, вы почувствуете их присутствие.
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
