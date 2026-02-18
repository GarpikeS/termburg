import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { bathTypes } from '@/data/thermalZones';

export default function ZonesPreviewSection() {
  const previewBaths = bathTypes.slice(0, 4);

  return (
    <Section
      warm
      title="12 видов парных"
      subtitle="Бани и сауны по традициям разных стран и культур"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {previewBaths.map((bath) => (
          <Card key={bath.id} className="p-0 overflow-hidden">
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

      <div className="mt-10 text-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
        >
          Все 12 парных
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
