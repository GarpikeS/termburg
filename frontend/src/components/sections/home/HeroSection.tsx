import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary via-primary-light/80 to-primary/90 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-20 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Термальный комплекс в&nbsp;сердце Москвы
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          Откройте мир термальных источников, парений и глубокого расслабления
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="accent" size="lg" href="/buy">
            Забронировать посещение
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/about"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Узнать больше
          </Button>
        </div>

        <p className="mt-12 text-sm text-white/60">
          Ежедневно с 8:00 до 23:00 &middot; м. Печатники
        </p>
      </Container>
    </section>
  );
}
