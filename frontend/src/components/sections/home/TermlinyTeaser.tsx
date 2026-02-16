import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function TermlinyTeaser() {
  return (
    <div>
      <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
        Познакомьтесь с Термлинами
      </h3>
      <Link to="/termliny" className="group block">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/images/termliny/teaser.webp?v=2"
            alt="Духи-хранители Термбурга приглашают в гости"
            className="w-full h-[350px] md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-text-secondary text-sm mb-3">
              У каждой бани Термбурга есть свой дух-хранитель — узнайте их истории.
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-primary-light transition-colors">
              Узнать больше
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
