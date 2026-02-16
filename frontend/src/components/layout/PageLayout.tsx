import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}

export default function PageLayout({ children, title, description, ogImage }: PageLayoutProps) {
  const fullTitle = title ? `${title} | Термбург` : 'Термбург — термальный комплекс в Москве';

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta property="og:image:width" content="1200" />}
        {ogImage && <meta property="og:image:height" content="630" />}
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
