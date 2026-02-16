import Container from '@/components/ui/Container';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative py-16 text-center md:py-20 overflow-hidden">
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-surface-warm to-background" />
      )}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <Container className="relative z-10">
        <h1 className="font-heading text-4xl font-bold md:text-5xl text-text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
