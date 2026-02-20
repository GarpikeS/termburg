import { useState } from 'react';
import { ShieldCheck, ListChecks, Users } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import ImageLightbox from '@/components/shared/ImageLightbox';
import Section from '@/components/ui/Section';

const visitRules = [
  'Вход с 8:00, последний вход в 22:00',
  'Дети до 3 лет — бесплатно, от 3 до 12 — детский билет',
  'Необходимо иметь сменную обувь (или приобрести на месте)',
  'В термальных зонах обязательно использование полотенца',
  'Максимальное время нахождения в горячих зонах — 15 минут',
  'Запрещено посещение в состоянии алкогольного опьянения',
];

const galleryPhotos = [
  { src: '/images/complex/pool.webp', alt: 'Бассейн' },
  { src: '/images/complex/gallery9.webp', alt: 'Зона отдыха' },
  { src: '/images/complex/herbal.webp', alt: 'Травяная парная' },
  { src: '/images/complex/gallery10.webp', alt: 'Термальная зона' },
  { src: '/images/complex/barrels.webp', alt: 'Бани-бочки' },
  { src: '/images/complex/gallery11.webp', alt: 'Парная с камнями' },
  { src: '/images/complex/gallery5.webp', alt: 'Интерьер' },
  { src: '/images/complex/gallery12.webp', alt: 'Парная' },
  { src: '/images/complex/gallery6.webp', alt: 'Каменка' },
  { src: '/images/complex/gallery13.webp', alt: 'Зона релаксации' },
  { src: '/images/complex/gallery4.webp', alt: 'Отдых' },
  { src: '/images/complex/gallery14.webp', alt: 'Термальный комплекс' },
];

const teamMembers = [
  {
    name: 'Алексей Морозов',
    role: 'Управляющий директор',
    description: 'Более 10 лет в сфере wellness и гостеприимства',
  },
  {
    name: 'Марина Волкова',
    role: 'SPA-директор',
    description: 'Сертифицированный специалист по термальным процедурам',
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Шеф-банщик',
    description: 'Мастер авторских парений, 15 лет опыта',
  },
  {
    name: 'Елена Соколова',
    role: 'Администратор',
    description: 'Заботится о комфорте каждого гостя',
  },
  {
    name: 'Андрей Петров',
    role: 'SPA-терапевт',
    description: 'Специалист по массажу и ароматерапии',
  },
  {
    name: 'Ольга Николаева',
    role: 'Шеф кафетерия',
    description: 'Создатель авторских травяных чаёв и меню',
  },
];

export default function AboutPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PageLayout title="О Термбурге" description="Узнайте больше о термальном комплексе Термбург в Москве.">
      <PageHero
        title="О Термбурге"
        backgroundImage="/images/complex/gallery5.webp"
      />

      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-4xl flex flex-col-reverse md:flex-row items-start gap-8">
          <div className="space-y-4 flex-1">
            <p className="text-sm font-medium text-primary italic">Рассказывает Банник-Яромир, хранитель бань Термбурга</p>
            <p className="text-lg leading-relaxed text-text-primary">
              Термбург — место, где сплелись термальные традиции со всего мира: римские термы, японское офуро, турецкий хаммам
              и скандинавские парения. Всё это — в одном пространстве в районе Печатники.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              15+ термальных зон, авторские парения, купели под открытым небом и тишина, в которую хочется возвращаться.
              Здесь каждый визит — не процедура, а ритуал.
            </p>
          </div>
          <img
            src="/images/termliny/yaromir.webp?v=2"
            alt="Банник-Яромир — хранитель Термбурга"
            className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover flex-shrink-0 mx-auto md:mx-0"
          />
        </div>
      </Section>

      {/* Gallery + Rules side by side */}
      <Section title="Наше пространство" warm>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT — Фотогалерея */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Фотогалерея</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={index}
                  type="button"
                  className="aspect-[4/3] overflow-hidden rounded-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Открыть фото: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Правила посещения */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Правила посещения</h3>
            <div className="mb-4 flex items-center gap-2 text-primary">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-medium">Для вашего комфорта и безопасности</span>
            </div>
            <div className="space-y-3">
              {visitRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl bg-surface p-4 border border-border/50"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-text-primary">{rule}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-text-secondary">
              <ListChecks className="h-4 w-4" />
              <span>Полный свод правил доступен на рецепции</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section title="Наша команда" subtitle="Профессионалы, которые делают Термбург особенным">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center rounded-2xl bg-surface p-6 border border-border/50"
            >
              <img
                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(member.name)}`}
                alt={member.name}
                className="w-20 h-20 rounded-full mb-4 bg-primary/5"
              />
              <h3 className="font-bold text-text-primary">{member.name}</h3>
              <p className="text-sm font-medium text-primary mt-1">{member.role}</p>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={galleryPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </PageLayout>
  );
}
