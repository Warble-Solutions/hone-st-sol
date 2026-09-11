import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import FooterV2 from '@/components/FooterV2';

export const metadata: Metadata = {
  title: 'HoneST Solutions | Digital Transformation, Business Consulting & Executive Programs',
  description: 'Innovative digital solutions, AI workflows, premier business consulting in Ahmedabad, and signature Bhagavad Gita leadership programs. Founded in 2018.',
  keywords: [
    'HoneST Solutions',
    'Best Business Consultant in Ahmedabad',
    'AI Agents and Automation',
    'Digital Transformation Agency',
    'Discover the Arjuna in You',
    'Bhagavad Gita Chanting',
    'Corporate Training Ahmedabad',
    'Prasun Kundu'
  ],
  authors: [{ name: 'Prasun Kundu' }],
  icons: {
    icon: '/logo/hone-ST-logo.webp',
  },
  openGraph: {
    title: 'HoneST Solutions — Innovative Solutions for a Digital World',
    description: 'Empowering organizations with transformative digital solutions, business consulting, and ancient wisdom programs.',
    url: 'https://honestsol.com',
    siteName: 'HoneST Solutions',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hone ST Solutions',
    image: 'https://honestsol.com/logo/hone-ST-logo.webp',
    '@id': 'https://honestsol.com',
    url: 'https://honestsol.com',
    telephone: '+91 79 4000 0000',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'State-of-the-Art Training Centre',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380015',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FooterV2 />
      </body>
    </html>
  );
}
