import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Lock, User, Mail, Send, Eye, EyeOff } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import Container from '@/components/ui/Container';

type Mode = 'login' | 'register';

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageLayout title="Вход" description="Авторизация в личном кабинете Термбурга.">
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-12">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/complex/gallery2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50" />
        </div>

        <Container className="relative z-10 max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <img src="/images/termliny-symbol.svg" alt="" className="h-8 w-8 opacity-70" />
              <span className="font-heading text-2xl font-bold tracking-[0.2em] text-primary">
                ТЕРМБУРГ
              </span>
            </Link>
            <h1 className="font-heading text-2xl font-bold text-white">
              {mode === 'login' ? 'Вход в личный кабинет' : 'Регистрация'}
            </h1>
            <p className="mt-2 text-sm text-white/60">
              {mode === 'login'
                ? 'Управляйте абонементами и бонусами'
                : 'Создайте аккаунт для доступа к бонусам'}
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl bg-dark-surface/90 backdrop-blur-sm border border-dark-border p-6 sm:p-8">
            {/* Mode switcher */}
            <div className="flex rounded-xl bg-white/5 p-1 mb-6">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
                  mode === 'login'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-white/50 hover:text-white/70'
                }`}
              >
                Вход
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all duration-200 ${
                  mode === 'register'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-white/50 hover:text-white/70'
                }`}
              >
                Регистрация
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Name (register only) */}
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Имя</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-white/30" />
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full rounded-xl bg-white/5 border border-dark-border pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Phone */}
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Телефон</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-white/30" />
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-xl bg-white/5 border border-dark-border pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
              </div>

              {/* Email (register only) */}
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-white/30" />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full rounded-xl bg-white/5 border border-dark-border pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div>
                <label className="block text-xs font-medium text-white/50 mb-1.5">Пароль</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-white/30" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Введите пароль"
                    className="w-full rounded-xl bg-white/5 border border-dark-border pl-10 pr-10 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light mt-2"
              >
                {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dark-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-dark-surface/90 px-3 text-xs text-white/30">или</span>
              </div>
            </div>

            {/* Telegram login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-[#2AABEE]/10 border border-[#2AABEE]/20 py-3 text-sm font-medium text-[#2AABEE] transition-colors hover:bg-[#2AABEE]/20"
            >
              <Send className="h-4.5 w-4.5" />
              Войти через Telegram
            </button>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-white/30">
            Продолжая, вы соглашаетесь с&nbsp;
            <span className="text-white/50 underline cursor-pointer">условиями использования</span>
            {' '}и&nbsp;
            <span className="text-white/50 underline cursor-pointer">политикой конфиденциальности</span>
          </p>
        </Container>
      </section>
    </PageLayout>
  );
}
