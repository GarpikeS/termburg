import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { thermalZones } from '@/data/thermalZones';

const zoneGradients = [
  'from-primary/40 to-primary-light/30',
  'from-accent/40 to-warm-gold/30',
  'from-primary-light/40 to-info/30',
  'from-warm-gold/40 to-accent/30',
];

export default function ZonesPreviewSection() {
  const previewZones = thermalZones.slice(0, 4);

  return (
    <Section
      warm
      title="Наши термальные зоны"
      subtitle="Путешествие по термальным традициям разных стран"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewZones.map((zone, index) => (
          <Card key={zone.id} className="p-0 overflow-hidden">
            {/* Colored placeholder instead of image */}
            <div
              className={`h-44 bg-gradient-to-br ${zoneGradients[index % zoneGradients.length]} flex items-end p-4`}
            >
              <Badge>{zone.temperature}</Badge>
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
