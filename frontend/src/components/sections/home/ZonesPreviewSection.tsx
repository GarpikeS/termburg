import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { bathTypes } from '@/data/thermalZones';
import { useBooking } from '@/context/BookingContext';

export default function ZonesPreviewSection() {
  const { openBathDetail } = useBooking();

  return (
    <Section
      warm
      title="12 видов парных"
      subtitle="Бани и сауны по традициям разных стран и культур"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bathTypes.map((bath) => (
          <Card
            key={bath.id}
            className="p-0 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            onClick={() => openBathDetail(bath)}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={bath.image}
                alt={bath.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <Badge>{bath.temperature}</Badge>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                {bath.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                {bath.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
