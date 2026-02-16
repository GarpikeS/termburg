import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { thermalZones } from '@/data/thermalZones';

const zoneImages: Record<number, string> = {
  1: '/images/complex/barrels.webp',
  2: '/images/complex/gallery6.webp',
  3: '/images/complex/gallery8.webp',
  4: '/images/complex/sauna.webp',
};

export default function ZonesPreviewSection() {
  const previewZones = thermalZones.slice(0, 4);

  return (
    <Section
      warm
      title="Наши термальные зоны"
      subtitle="Путешествие по термальным традициям разных стран"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewZones.map((zone) => (
          <Card key={zone.id} className="p-0 overflow-hidden">
            <div className="relative h-44 overflow-hidden">
              <img
                src={zoneImages[zone.id]}
                alt={zone.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <Badge>{zone.temperature}</Badge>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                {zone.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                {zone.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
        >
          Все термальные зоны
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
