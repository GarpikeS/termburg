import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/shared/ScrollToTop';
import BookingModal from '@/components/shared/BookingModal';
import PurchaseModal from '@/components/shared/PurchaseModal';
import BathDetailModal from '@/components/shared/BathDetailModal';

const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const SchedulePage = lazy(() => import('@/pages/SchedulePage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const PromotionsPage = lazy(() => import('@/pages/PromotionsPage'));
const ContactsPage = lazy(() => import('@/pages/ContactsPage'));
const CafePage = lazy(() => import('@/pages/CafePage'));
const TermlinyPage = lazy(() => import('@/pages/TermlinyPage'));
const NewsPage = lazy(() => import('@/pages/NewsPage'));
const PartnersPage = lazy(() => import('@/pages/PartnersPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));
const OfferPage = lazy(() => import('@/pages/OfferPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const AccountPage = lazy(() => import('@/pages/AccountPage'));
const SwimmingSchoolPage = lazy(() => import('@/pages/SwimmingSchoolPage'));
const SteamSchoolPage = lazy(() => import('@/pages/SteamSchoolPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <BookingModal />
      <PurchaseModal />
      <BathDetailModal />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/swimming-school" element={<SwimmingSchoolPage />} />
          <Route path="/steam-school" element={<SteamSchoolPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/cafe" element={<CafePage />} />
          <Route path="/termliny" element={<TermlinyPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
