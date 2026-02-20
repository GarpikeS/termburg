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
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text — 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
              Добро пожаловать в Термбург
            </h2>
            <p className="text-lg leading-relaxed text-text-primary">
              Представьте себе уголок, где время течет иначе. Где жар русской бани с ароматным веником сменяется нежной лаской хаммама, а целебный воздух соляной сауны наполняет легкие свежестью. Это не просто термальный комплекс. Термбург — это портал в мир истинного отдыха, созданный для вашей семьи.
            </p>

            <div>
              <h3 className="text-lg font-bold text-text-primary mb-3">Здесь каждый найдет свою историю:</h3>
              <ul className="space-y-2 text-text-secondary leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>Почувствуйте силу предков в русской, сибирской или шаманской парной под руководством лучших пармастеров.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>Позвольте коже дышать в травяной сауне, а ногам — мягко согреваться в песчаной, которая так нравится нашим самым маленьким гостям.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>Окунитесь в прохладу уличной купели, в тепло большого бассейна или расслабьтесь в гидромассажной ванне, пока малыши плещутся в своем, безопасном уголке.</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed text-text-secondary">
              Но Термбург — это больше, чем вода и пар. Это место встречи с душой славянства. Пока вы будете пить травяной чай на уютной террасе (летом — ловить лучи загара, а зимой — париться в бане-бочке и наслаждаться в теплой купели с гидромассажем под открытым небом), вас окружат древние легенды. Здесь живут термлины — добрые духи, которые хранят уют и рассказывают истории о наших корнях.
            </p>
            <p className="text-lg leading-relaxed text-text-primary">
              Мы приглашаем вас не просто поправить здоровье, а восстановить душевное равновесие, прикоснуться к культуре и увезти с собой тепло в сердце.
            </p>
            <p className="text-lg leading-relaxed text-text-primary font-medium">
              Подарите себе этот день — яркий, теплый и немного волшебный. Термбург ждет вас, чтобы подарить человеческое счастье!
            </p>
            <p className="text-primary font-medium italic">
              Тепло пожаловать в гости — за новыми силами и старыми традициями!
            </p>
          </div>

          {/* Image — 2 columns */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/images/termliny/yaromir.webp"
                alt="Яромир — главный термлин Термбурга"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-heading font-bold text-lg">Яромир</p>
                <p className="text-white/70 text-sm">Главный термлин Термбурга</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-primary/5 border border-primary/15 p-4 text-center">
              <p className="text-sm text-text-secondary italic leading-relaxed">
                «Я храню тепло этого места и встречаю каждого гостя как родного»
              </p>
            </div>
          </div>
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
