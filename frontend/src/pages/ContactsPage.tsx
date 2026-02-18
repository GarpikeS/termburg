import { Phone, MapPin, Train, Mail, Clock, Navigation } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import PageHero from '@/components/shared/PageHero';
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
];

export default function ContactsPage() {
  return (
    <PageLayout title="Контакты" description="Контактная информация термального комплекса Термбург. Адрес, телефон, email и схема проезда.">
      <PageHero
        title="Контакты"
        backgroundImage="/images/complex/barrels.webp"
      />

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

          {/* Right: Yandex Map */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border/50">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.715830%2C55.680707&z=17&l=map&pt=37.715830%2C55.680707%2Cpm2rdm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                title="Термбург на карте"
                loading="lazy"
              />
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
