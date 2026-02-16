import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'О Термбурге' },
  { to: '/schedule', label: 'Расписание' },
  { to: '/pricing', label: 'Прайс' },
  { to: '/services', label: 'Услуги' },
  { to: '/promotions', label: 'Акции' },
  { to: '/buy', label: 'Купить' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Column 1: Logo & Description */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-heading text-xl font-bold tracking-[0.2em] text-primary">
                ТЕРМБУРГ
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Термальный комплекс в самом сердце Москвы
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary/70">
              Навигация
            </h3>
            <nav className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary/70">
              Контакты
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+74959220222"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                +7 (495) 922-02-22
              </a>
              <p className="text-sm text-text-secondary">
                ул. Гурьянова 30, Москва
              </p>
              <a
                href="mailto:info@termburg.ru"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary"
              >
                info@termburg.ru
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-sm text-text-secondary/60">
            &copy; 2024&ndash;2026 Термбург. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
