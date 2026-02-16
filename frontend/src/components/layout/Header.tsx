import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 hover:text-primary ${
      isActive ? 'text-primary' : 'text-text-primary'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <span className="font-heading text-xl font-bold tracking-wider text-primary md:text-2xl">
              ТЕРМБУРГ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClasses}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/buy"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
            >
              Забронировать
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-text-primary transition-colors hover:bg-surface-warm lg:hidden"
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
          className="fixed inset-0 top-16 z-40 bg-black/20 lg:hidden md:top-20"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 transform bg-white shadow-xl transition-transform duration-300 ease-in-out md:top-20 md:h-[calc(100vh-5rem)] lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-primary hover:bg-surface-warm'
                }`
              }
              onClick={closeMobileMenu}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="mt-4 border-t border-gray-100 pt-4">
            <Link
              to="/buy"
              className="block w-full rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
              onClick={closeMobileMenu}
            >
              Забронировать
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
