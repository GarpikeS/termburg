import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, UserCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

interface NavItem {
  label: string;
  to?: string;
  children?: { to: string; label: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'О комплексе',
    children: [
      { to: '/about', label: 'О Термбурге' },
      { to: '/termliny', label: 'Термлины' },
    ],
  },
  {
    label: 'Услуги',
    children: [
      { to: '/pricing', label: 'Прайс-лист' },
      { to: '/services', label: 'Парения и SPA' },
      { to: '/swimming-school', label: 'Школа плавания' },
      { to: '/steam-school', label: 'Школа парения' },
      { to: '/cafe', label: 'Кафетерий' },
    ],
  },
  { label: 'Расписание', to: '/schedule' },
  { label: 'Акции', to: '/promotions' },
  { label: 'Новости', to: '/news' },
  { label: 'Контакты', to: '/contacts' },
];

// Мобильное меню — группировка по разделам
const mobileGroups = [
  {
    title: 'Основное',
    links: [
      { to: '/', label: 'Главная' },
      { to: '/about', label: 'О Термбурге' },
      { to: '/termliny', label: 'Термлины' },
    ],
  },
  {
    title: 'Услуги и цены',
    links: [
      { to: '/pricing', label: 'Прайс-лист' },
      { to: '/services', label: 'Парения и SPA' },
      { to: '/swimming-school', label: 'Школа плавания' },
      { to: '/steam-school', label: 'Школа парения' },
      { to: '/cafe', label: 'Кафетерий' },
      { to: '/schedule', label: 'Расписание' },
    ],
  },
  {
    title: 'Ещё',
    links: [
      { to: '/promotions', label: 'Акции' },
      { to: '/news', label: 'Новости' },
      { to: '/contacts', label: 'Контакты' },
      { to: '/contacts#careers', label: 'Вакансии' },
    ],
  },
];

const cities = [
  { name: 'Москва', active: true },
  { name: 'Санкт-Петербург', active: false },
  { name: 'Казань', active: false },
];

function DropdownMenu({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isChildActive = item.children?.some((c) => location.pathname === c.to) ?? false;

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-primary ${
          isChildActive ? 'text-primary' : 'text-white/80'
        }`}
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-dark-surface border border-dark-border shadow-xl shadow-black/30 py-1 z-50">
          {item.children!.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm transition-colors ${
                  isActive ? 'text-primary bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function CitySelector() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white/80 transition-colors"
      >
        <MapPin className="w-3.5 h-3.5 text-primary" />
        <span>Москва</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-44 rounded-xl bg-dark-surface border border-dark-border shadow-xl shadow-black/30 py-1 z-50">
          {cities.map((city) => (
            <button
              key={city.name}
              type="button"
              onClick={() => { if (city.active) setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                city.active
                  ? 'text-primary bg-white/5'
                  : 'text-white/40 cursor-default'
              }`}
            >
              {city.name}
              {!city.active && (
                <span className="text-[10px] bg-white/10 text-white/40 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Скоро
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { openBooking } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCityOpen, setMobileCityOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-dark-surface ${
        scrolled ? 'shadow-lg shadow-black/25' : ''
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 gold-separator" />

      <div className="mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo + City */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2.5" onClick={closeMobileMenu}>
              <img src="/favicon.ico" alt="" className="h-7 w-7 md:h-8 md:w-8" />
              <span className="font-heading text-xl font-bold tracking-[0.2em] text-primary md:text-2xl">
                ТЕРМБУРГ
              </span>
            </Link>
            <div className="hidden lg:block">
              <CitySelector />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label} item={item} />
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to!}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 hover:text-primary ${
                      isActive ? 'text-primary' : 'text-white/80'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Desktop CTA + Account */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/account"
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/60 hover:text-primary transition-colors duration-200"
              aria-label="Личный кабинет"
            >
              <UserCircle className="h-5.5 w-5.5" />
            </Link>
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
            >
              Купить билет
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 transition-colors hover:text-white lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/60 lg:hidden md:top-20"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-80 transform bg-dark-surface border-l border-dark-border shadow-2xl shadow-black/40 transition-transform duration-300 ease-in-out overflow-y-auto md:top-20 md:h-[calc(100vh-5rem)] lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* City selector */}
          <button
            type="button"
            onClick={() => setMobileCityOpen(!mobileCityOpen)}
            className="w-full mb-4 rounded-xl bg-white/5 border border-dark-border px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Москва</span>
              <ChevronDown className={`ml-auto w-3.5 h-3.5 text-white/40 transition-transform ${mobileCityOpen ? 'rotate-180' : ''}`} />
            </div>
            <p className="mt-1 text-xs text-white/40">ул. Гурьянова, д. 30</p>
          </button>

          {mobileCityOpen && (
            <div className="mb-4 rounded-xl bg-white/5 border border-dark-border overflow-hidden">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className={`px-4 py-2.5 text-sm flex items-center justify-between ${
                    city.active ? 'text-primary' : 'text-white/40'
                  }`}
                >
                  {city.name}
                  {!city.active && (
                    <span className="text-[10px] bg-white/10 text-white/40 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      Скоро
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Grouped navigation */}
          <nav aria-label="Мобильная навигация">
            {mobileGroups.map((group) => (
              <div key={group.title} className="mb-4">
                <p className="px-3 mb-1 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                  {group.title}
                </p>
                <div className="flex flex-col gap-0.5">
                  {group.links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? 'bg-primary/15 text-primary'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`
                      }
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Account + CTA */}
          <div className="border-t border-dark-border pt-4 space-y-2">
            <NavLink
              to="/account"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <UserCircle className="h-4.5 w-4.5" />
              Личный кабинет
            </NavLink>
            <button
              type="button"
              onClick={() => { closeMobileMenu(); openBooking(); }}
              className="block w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
            >
              Купить билет
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
