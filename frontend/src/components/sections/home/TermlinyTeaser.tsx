import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';

export default function TermlinyTeaser() {
  return (
    <Section title="Познакомьтесь с Термлинами">
      <Link to="/termliny" className="group block">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/termliny/teaser.webp"
            alt="Духи-хранители Термбурга приглашают в гости"
            className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-text-secondary text-sm md:text-base max-w-xl mb-4">
              У каждой бани Термбурга есть свой дух-хранитель. Банник-Яромир, бабушка
              Валькирия, коты Ведагор и Милован и другие — узнайте их истории.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-primary-light transition-colors">
              Узнать больше
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </Section>
  );
}
