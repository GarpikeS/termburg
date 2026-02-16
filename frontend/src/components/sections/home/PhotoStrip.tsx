const photos = [
  { src: '/images/complex/gallery5.webp', alt: 'Травяная парная с тёплым освещением' },
  { src: '/images/complex/herbal.webp', alt: 'Травяная парная' },
  { src: '/images/complex/gallery4.webp', alt: 'Парная с каменкой и травами' },
  { src: '/images/complex/barrels.webp', alt: 'Бани-бочки на террасе' },
  { src: '/images/complex/gallery8.webp', alt: 'Парная с вениками' },
  { src: '/images/complex/gallery6.webp', alt: 'Каменка в парной' },
];

export default function PhotoStrip() {
  return (
    <section className="py-6 overflow-hidden">
      <div className="flex gap-3 animate-scroll">
        {[...photos, ...photos].map((photo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
