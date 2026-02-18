import { Ticket, Package } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import TicketButton from '@/components/ui/TicketButton';
import Badge from '@/components/ui/Badge';
import Container from '@/components/ui/Container';
import { useBooking } from '@/context/BookingContext';
import { weekdayPricing } from '@/data/pricing';

const minAdult = weekdayPricing[0].adultPrice;
const minChild = weekdayPricing[0].childPrice;

const tickets = [
  {
    title: 'Взрослый билет',
    description: 'Полный доступ ко всем термальным зонам, бассейнам и зонам отдыха.',
    price: `от ${minAdult.toLocaleString('ru-RU')} \u20BD`,
  },
  {
    title: 'Взрослый + ребёнок',
    description: 'Совместное посещение: один взрослый и один ребёнок (3\u201312 лет).',
    price: `от ${(minAdult + minChild).toLocaleString('ru-RU')} \u20BD`,
  },
];

const certificates = [
  {
    value: '3 000 ₽',
    description: 'Идеально для первого знакомства с Термбургом.',
    image: '/images/certificates/standard.jpg',
  },
  {
    value: '5 000 ₽',
    description: 'Комплексное посещение с дополнительными процедурами.',
    image: '/images/certificates/birthday.jpg',
  },
  {
    value: '10 000 ₽',
    description: 'Премиальный подарок с полным набором SPA-услуг.',
    image: '/images/certificates/valentine.jpg',
  },
];

const giftBoxes = [
  {
    title: 'Бокс Релакс',
    contents: 'Сертификат + халат + набор чая',
    price: '7 500 ₽',
  },
  {
    title: 'Бокс Премиум',
    contents: 'Сертификат + халат + SPA-набор + шампанское',
    price: '15 000 ₽',
  },
];

export default function BuyPage() {
  const { openBooking, openPurchase } = useBooking();

  return (
    <PageLayout title="Купить онлайн" description="Купить билет, подарочный сертификат или бокс в термальный комплекс Термбург.">
      <PageHero
        title="Купить онлайн"
        subtitle="Билеты, подарочные сертификаты и боксы — всё можно приобрести не выходя из дома"
        backgroundImage="/images/complex/gallery6.webp"
      />

      {/* Билеты */}
      <Section title="Билеты">
        <div className="grid md:grid-cols-2 gap-8">
          {tickets.map((ticket) => (
            <Card key={ticket.title} className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Ticket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                {ticket.title}
              </h3>
              <p className="mt-3 text-text-secondary">{ticket.description}</p>
              <p className="mt-4 text-2xl font-bold text-primary">{ticket.price}</p>
              <div className="mt-6">
                <TicketButton onClick={openBooking}>Купить билет</TicketButton>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-text-secondary text-sm">
          Дети до 3 лет — бесплатно
        </p>
      </Section>

      {/* Подарочные сертификаты */}
      <Section title="Подарочные сертификаты" warm>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card key={cert.value} className="flex flex-col items-center text-center p-0 overflow-hidden">
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={`Сертификат на ${cert.value}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col items-center">
                <Badge variant="gold">{cert.value}</Badge>
                <p className="mt-4 text-text-secondary">{cert.description}</p>
                <div className="mt-6">
                  <TicketButton onClick={() => openPurchase({ name: `Подарочный сертификат на ${cert.value}`, price: cert.value })}>
                    Купить сертификат
                  </TicketButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Подарочные боксы */}
      <Section title="Подарочные боксы">
        <div className="grid md:grid-cols-2 gap-8">
          {giftBoxes.map((box) => (
            <Card key={box.title} className="flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-warm-gold/10 flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-warm-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                {box.title}
              </h3>
              <p className="mt-3 text-text-secondary">{box.contents}</p>
              <p className="mt-4 text-2xl font-bold text-primary">{box.price}</p>
              <div className="mt-6">
                <TicketButton onClick={() => openPurchase({ name: box.title, price: box.price })}>
                  Купить бокс
                </TicketButton>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Примечание */}
      <section className="relative bg-dark-surface ornament-pattern py-8">
        <div className="gold-separator absolute top-0 left-0 right-0" />
        <Container>
          <p className="text-center text-white/70 text-sm">
            После оплаты вы получите электронный билет на указанный email
          </p>
        </Container>
      </section>
    </PageLayout>
  );
}
