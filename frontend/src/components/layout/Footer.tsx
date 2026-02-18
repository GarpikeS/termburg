import { Link } from 'react-router-dom';
import { contactInfo } from '@/data/contacts';

const navCol1 = [
  { to: '/about', label: 'О Термбурге' },
  { to: '/termliny', label: 'Термлины' },
  { to: '/services', label: 'Услуги' },
  { to: '/schedule', label: 'Расписание' },
  { to: '/pricing', label: 'Прайс-лист' },
];

const navCol2 = [
  { to: '/promotions', label: 'Акции' },
  { to: '/news', label: 'Новости' },
  { to: '/cafe', label: 'Кафетерий' },
  { to: '/buy', label: 'Купить онлайн' },
  { to: '/contacts', label: 'Контакты' },
];

const bottomLinks = [
  { to: '/partners', label: 'Сотрудничество' },
  { to: '/careers', label: 'Вакансии' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-surface ornament-pattern">
      <div className="gold-separator" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Logo + Social */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img src="/images/termliny-symbol.svg" alt="" className="h-8 w-8 opacity-70" />
              <span className="font-heading text-xl font-bold tracking-[0.2em] text-primary">
                ТЕРМБУРГ
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Термальный комплекс в Москве, район Печатники
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              <a
                href={contactInfo.social.vk}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.188 1.366 1.259 2.18 1.815.616.42 1.084.328 1.084.328l2.175-.03s1.14-.07.599-.964c-.044-.073-.314-.661-1.618-1.869-1.366-1.265-1.183-1.06.462-3.248.502-.667.882-1.356 1.002-1.626.168-.37-.026-.54-.026-.54l-2.33.017s-.175-.024-.304.053c-.126.075-.207.25-.207.25s-.37.99-.865 1.833c-1.044 1.778-1.46 1.872-1.63 1.762-.397-.256-.298-1.028-.298-1.576 0-1.713.26-2.427-.505-2.612-.254-.061-.44-.102-1.09-.108-.832-.009-1.536.003-1.934.198-.265.13-.47.42-.345.436.154.02.504.094.689.346.238.325.23 1.054.23 1.054s.137 2.015-.32 2.264c-.314.171-.744-.178-1.669-1.774-.473-.817-.83-1.722-.83-1.722s-.07-.17-.192-.261c-.149-.112-.357-.147-.357-.147l-2.214.015s-.332.009-.454.154c-.109.129-.009.396-.009.396s1.74 4.07 3.706 6.12c1.804 1.882 3.853 1.758 3.853 1.758h.929z" />
                </svg>
              </a>
              <a
                href={contactInfo.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                Навигация
              </h3>
              <nav className="flex flex-col gap-2">
                {navCol1.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                &nbsp;
              </h3>
              <nav className="flex flex-col gap-2">
                {navCol2.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              Контакты
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contactInfo.phone.replace(/[\s()-]/g, '')}`}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-primary"
              >
                {contactInfo.phone}
              </a>
              <p className="text-sm text-white/60">{contactInfo.address}</p>
              <p className="text-sm text-white/60">{contactInfo.metro}</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-white/60 transition-colors duration-200 hover:text-primary"
              >
                {contactInfo.email}
              </a>
              <p className="text-xs text-white/40">{contactInfo.workingHours}</p>
            </div>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              На карте
            </h3>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-dark-border">
              <iframe
                src={`https://yandex.ru/map-widget/v1/?ll=${contactInfo.coordinates.lng}%2C${contactInfo.coordinates.lat}&z=16&l=map&pt=${contactInfo.coordinates.lng}%2C${contactInfo.coordinates.lat}%2Cpm2rdm`}
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

        {/* Bottom Row */}
        <div className="mt-10 border-t border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; 2024&ndash;{new Date().getFullYear()} Термбург. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            {bottomLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-white/40 transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
