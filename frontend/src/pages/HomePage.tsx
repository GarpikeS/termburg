import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/home/HeroSection';
import AdvantagesSection from '@/components/sections/home/AdvantagesSection';
import ZonesPreviewSection from '@/components/sections/home/ZonesPreviewSection';
import PhotoStrip from '@/components/sections/home/PhotoStrip';
import SchedulePreviewSection from '@/components/sections/home/SchedulePreviewSection';
import PricingPreviewSection from '@/components/sections/home/PricingPreviewSection';
import TermlinyTeaser from '@/components/sections/home/TermlinyTeaser';
import Section from '@/components/ui/Section';

export default function HomePage() {
  return (
    <PageLayout description="Термбург — термальный комплекс в самом сердце Москвы. Бани, сауны, парения и SPA-процедуры.">
      <HeroSection />
      <div className="gold-separator" />
      <AdvantagesSection />
      <ZonesPreviewSection />
      <div className="gold-separator" />
      <PhotoStrip />
      <div className="gold-separator" />
      <Section dark ornament separator>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <TermlinyTeaser />
          <SchedulePreviewSection />
        </div>
      </Section>
      <PricingPreviewSection />
    </PageLayout>
  );
}
