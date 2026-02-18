import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Термбург',
  description: 'Термальный комплекс в Москве. 12 видов парных, SPA-процедуры, бассейн, школа плавания.',
  url: 'https://termburg.ru',
  telephone: '+7 (909) 167-47-46',
  email: 'info@termburg.ru',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Гурьянова, д. 30, 2 этаж',
    addressLocality: 'Москва',
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.680707,
    longitude: 37.71583,
  },
  openingHours: 'Mo-Su 09:00-23:00',
  priceRange: 'от 540₽',
};

export default function PageLayout({ children, title, description, ogImage }: PageLayoutProps) {
  const fullTitle = title ? `${title} | Термбург` : 'Термбург — термальный комплекс в Москве';

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Термбург" />
        <meta property="og:locale" content="ru_RU" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta property="og:image:width" content="1200" />}
        {ogImage && <meta property="og:image:height" content="630" />}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
