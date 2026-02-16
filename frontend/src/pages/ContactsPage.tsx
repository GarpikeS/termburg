import { Phone, MapPin, Train, Mail, Clock, Navigation } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { contactInfo } from '@/data/contacts';

const socialLinks = [
  {
    name: 'ВКонтакте',
    href: contactInfo.social.vk,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.366 1.259 2.18 1.815.616.42 1.084.328 1.084.328l2.175-.03s1.14-.07.599-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.248.502-.667.882-1.356 1.002-1.626.168-.37-.026-.54-.026-.54l-2.33.017s-.175-.024-.304.053c-.126.075-.207.25-.207.25s-.37.99-.865 1.833c-1.044 1.778-1.46 1.872-1.63 1.762-.397-.256-.298-1.028-.298-1.576 0-1.713.26-2.427-.505-2.612-.254-.061-.44-.102-1.09-.108-.832-.009-1.536.003-1.934.198-.265.13-.47.42-.345.436.154.02.504.094.689.346.238.325.23 1.054.23 1.054s.137 2.015-.32 2.264c-.314.171-.744-.178-1.669-1.774-.473-.817-.83-1.722-.83-1.722s-.07-.17-.192-.261c-.149-.112-.357-.147-.357-.147l-2.214.015s-.332.009-.454.154c-.109.129-.009.396-.009.396s1.74 4.07 3.706 6.12c1.804 1.882 3.853 1.758 3.853 1.758h.929z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: contactInfo.social.telegram,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: contactInfo.social.instagram,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function ContactsPage() {
  return (
    <PageLayout title="Контакты" description="Контактная информация термального комплекса Термбург. Адрес, телефон, email и схема проезда.">
      {/* Hero */}
      <section className="relative section-padding bg-gradient-to-b from-surface-warm to-background overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <Container>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary text-center">
            Контакты
          </h1>
        </Container>
      </section>

      {/* Contact info + map */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Телефон</p>
                <a
                  href={`tel:${contactInfo.phone.replace(/[\s()-]/g, '')}`}
                  className="text-2xl font-bold text-text-primary hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Адрес</p>
                <p className="text-lg font-medium text-text-primary">{contactInfo.address}</p>
              </div>
            </div>

            {/* Metro */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Train className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Метро</p>
                <p className="text-lg font-medium text-text-primary">{contactInfo.metro}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-medium text-primary hover:text-primary-light transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Working hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Часы работы</p>
                <p className="text-lg font-medium text-text-primary">{contactInfo.workingHours}</p>
              </div>
            </div>

            {/* Social media */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-text-secondary mb-4">Мы в социальных сетях</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="w-12 h-12 rounded-full bg-surface-warm flex items-center justify-center text-text-secondary hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-80 lg:h-full min-h-[320px] rounded-2xl bg-surface border border-border/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-text-secondary/40 mx-auto mb-3" />
                <p className="text-text-secondary text-lg font-medium">Яндекс.Карты</p>
                <p className="text-text-secondary/60 text-sm mt-1">Карта будет добавлена позже</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How to get */}
      <Section title="Как добраться" warm>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {contactInfo.howToGet.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <p className="text-text-primary text-lg leading-relaxed pt-1.5">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageLayout>
  );
}
