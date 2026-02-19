import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { useBooking } from '@/context/BookingContext';
import EventCarousel from './TariffCarousel';

export default function HeroSection() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/complex/pool.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <Container className="relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-heading text-sm md:text-base tracking-[0.3em] text-primary mb-6 uppercase">
              Термальный комплекс
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
              Пространство тепла и&nbsp;гармонии
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Откройте мир термальных источников, парений и глубокого расслабления
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" onClick={openBooking}>
                Забронировать посещение
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/about"
              >
                Узнать больше
              </Button>
            </div>

            <p className="mt-12 text-sm text-white/60">
              Ежедневно с 9:00 до 23:00 &middot; м. Печатники
            </p>
          </div>

          {/* Right: tariff carousel */}
          <div className="hidden lg:block flex-shrink-0">
            <EventCarousel />
          </div>
        </div>
      </Container>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
