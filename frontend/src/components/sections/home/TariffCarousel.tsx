import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Heart, Sun, Star, Bell } from 'lucide-react';
import { termliny } from '@/data/termliny';

const INTERVAL = 6000;

interface Slide {
  type: 'termlin' | 'announcement';
  image: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  termlinName: string;
}

const slides: Slide[] = [
  // Важное объявление
  {
    type: 'announcement',
    title: 'Важное объявление',
    subtitle: 'Добро пожаловать!',
    description: 'Термбург — место, где забота о здоровье становится удовольствием. Мы рады видеть вас!',
    icon: Bell,
    image: termliny[0].image,
    termlinName: termliny[0].name,
  },
  // Termliny with wishes
  {
    type: 'termlin',
    title: 'Доброго дня и лёгкого пара!',
    subtitle: 'Пожелание от Яромира',
    description: 'Пусть тепло Термбурга согреет вашу душу и подарит гармонию',
    icon: Sun,
    image: termliny[0].image,
    termlinName: termliny[0].name,
  },
  {
    type: 'termlin',
    title: 'Крепкого здоровья!',
    subtitle: 'Пожелание от Валькирии',
    description: 'Заботьтесь о себе — вы этого достойны. Травы исцелят тело и душу',
    icon: Heart,
    image: termliny[1].image,
    termlinName: termliny[1].name,
  },
  {
    type: 'termlin',
    title: 'Гармонии и спокойствия!',
    subtitle: 'Пожелание от Ведагора',
    description: 'Найдите свой баланс в наших парных и обретите внутренний покой',
    icon: Sparkles,
    image: termliny[4].image,
    termlinName: termliny[4].name,
  },
  {
    type: 'termlin',
    title: 'Сил и энергии!',
    subtitle: 'Пожелание от Переслава',
    description: 'Пусть каждый день будет наполнен светом и радостью жизни',
    icon: Star,
    image: termliny[2].image,
    termlinName: termliny[2].name,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const Icon = slide.icon;
  const isAnnouncement = slide.type === 'announcement';

  return (
    <div className="w-full max-w-md">
      {/* Slide */}
      <div className={`group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border ${
        isAnnouncement
          ? 'bg-gradient-to-br from-rose-900 to-rose-950 border-rose-700/50'
          : 'bg-dark-surface border-dark-border'
      }`}>
        <div className="flex h-[280px]">
          {/* Left side - Text */}
          <div className="flex-1 p-5 flex flex-col justify-between animate-fade-in">
            <div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                isAnnouncement ? 'bg-white/20' : 'bg-primary/20'
              }`}>
                <Icon className={`w-5 h-5 ${isAnnouncement ? 'text-white' : 'text-primary'}`} />
              </div>
              <p className={`text-xs uppercase tracking-wider mb-1 ${
                isAnnouncement ? 'text-rose-300' : 'text-primary'
              }`}>
                {slide.subtitle}
              </p>
              <h3 className="font-heading text-lg text-white font-bold mb-2 leading-tight">
                {slide.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {slide.description}
              </p>
            </div>
            {!isAnnouncement && (
              <p className="text-xs text-white/40 mt-2">— {slide.termlinName}</p>
            )}
          </div>

          {/* Right side - Termlin Image */}
          <div className="w-[42%] relative flex-shrink-0">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.termlinName}
              className="absolute inset-0 w-full h-full object-cover object-top animate-fade-in"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${
              isAnnouncement
                ? 'from-rose-900 via-rose-900/60 to-transparent'
                : 'from-dark-surface via-dark-surface/60 to-transparent'
            }`} />
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5 text-white/80" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5 text-white/80" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current
                ? s.type === 'announcement'
                  ? 'bg-rose-400 w-6'
                  : 'bg-primary w-6'
                : 'bg-white/30 hover:bg-white/50 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
