import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { promotions } from '@/data/promotions';

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % promotions.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + promotions.length) % promotions.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = promotions[current];

  return (
    <div className="w-full max-w-md">
      {/* Slide */}
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
        <img
          key={slide.id}
          src={slide.banner}
          alt={slide.title}
          className="w-full aspect-[560/400] object-cover animate-fade-in"
        />
        {/* Navigation arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-4 h-4 text-white/70" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-4 h-4 text-white/70" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {promotions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
