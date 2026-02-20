import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, BookOpen, Calendar } from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import { dzenArticles, DZEN_CHANNEL } from '@/data/dzen';

interface NewsItem {
  id: number | string;
  text: string;
  date: string;
  image?: string;
  link?: string;
}

const fallbackNews = [
  {
    id: 1,
    title: 'Открытие новой травяной парной',
    date: '2026-02-15',
    image: '/images/complex/gallery1.webp',
  },
  {
    id: 2,
    title: 'Зимний фестиваль парения',
    date: '2026-02-01',
    image: '/images/complex/gallery2.webp',
  },
  {
    id: 3,
    title: 'Новые программы парений',
    date: '2026-01-20',
    image: '/images/complex/gallery3.webp',
  },
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
  });
}

function getTitle(text: string): string {
  return text.split('\n')[0].slice(0, 100);
}

export default function NewsPreviewSection() {
  const dzenPreview = dzenArticles.slice(0, 3);
  const [news, setNews] = useState<{ id: number | string; title: string; date: string; image?: string }[]>(fallbackNews);

  useEffect(() => {
    let cancelled = false;
    async function fetchNews() {
      try {
        const res = await fetch('/api/news.json');
        if (!res.ok) throw new Error('fetch failed');
        const data: NewsItem[] = await res.json();
        if (!cancelled && data.length > 0) {
          setNews(
            data.slice(0, 3).map((item) => ({
              id: item.id,
              title: getTitle(item.text),
              date: item.date,
              image: item.image,
            }))
          );
        }
      } catch {
        // keep fallback
      }
    }
    fetchNews();
    return () => { cancelled = true; };
  }, []);

  return (
    <Section title="Новости и статьи" subtitle="Будьте в курсе событий Термбурга">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* News column */}
        <div>
          <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4">Последние новости</h3>
          <div className="space-y-3">
            {news.map((item) => (
              <Link
                key={item.id}
                to="/news"
                className="flex items-center gap-4 rounded-xl bg-surface border border-border/50 p-3 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-surface-warm flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-text-secondary/30" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-text-primary truncate group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-text-secondary mt-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.date)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/news"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-primary-light transition-colors"
          >
            Все новости
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Dzen column */}
        <div>
          <h3 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-4">На Дзене</h3>
          <div className="space-y-3">
            {dzenPreview.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-surface border border-border/50 p-3 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <img
                    src={article.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 right-0">
                    <Badge className="bg-orange-500/90 text-white text-[8px] px-1 py-0.5 rounded-tl-md rounded-br-lg">
                      <BookOpen className="w-2.5 h-2.5" />
                    </Badge>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-text-primary truncate group-hover:text-primary transition-colors">
                    {article.title}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-text-secondary mt-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.date)}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <a
            href={DZEN_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-primary-light transition-colors"
          >
            Все статьи на Дзен
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Section>
  );
}
