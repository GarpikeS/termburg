import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-background via-surface to-surface-warm overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
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
