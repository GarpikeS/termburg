import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/complex/pool.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <Container className="relative z-10 py-20 text-center">
        <p className="font-heading text-sm md:text-base tracking-[0.3em] text-primary mb-6 uppercase">
          Термальный комплекс
        </p>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight max-w-4xl mx-auto">
          Пространство тепла и&nbsp;гармонии в&nbsp;сердце Москвы
        </h1>

        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Откройте мир термальных источников, парений и глубокого расслабления
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/buy">
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

        <p className="mt-12 text-sm text-text-secondary/60">
          Ежедневно с 8:00 до 23:00 &middot; м. Печатники
        </p>
      </Container>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
