import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/home/HeroSection';
import AdvantagesSection from '@/components/sections/home/AdvantagesSection';
import ZonesPreviewSection from '@/components/sections/home/ZonesPreviewSection';
import PromotionsCarousel from '@/components/sections/home/PromotionsCarousel';
import SchedulePreviewSection from '@/components/sections/home/SchedulePreviewSection';
import PricingPreviewSection from '@/components/sections/home/PricingPreviewSection';
import ContactsPreviewSection from '@/components/sections/home/ContactsPreviewSection';

export default function HomePage() {
  return (
    <PageLayout description="Термбург — термальный комплекс в самом сердце Москвы. Бани, сауны, парения и SPA-процедуры.">
      <HeroSection />
      <AdvantagesSection />
      <ZonesPreviewSection />
      <PromotionsCarousel />
      <SchedulePreviewSection />
      <PricingPreviewSection />
      <ContactsPreviewSection />
    </PageLayout>
  );
}
