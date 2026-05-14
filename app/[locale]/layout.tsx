import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Cormorant_Garamond, DM_Sans, IBM_Plex_Sans_Arabic} from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import '../globals.css';

// Primary fonts: Hacen Algeria (HD for headings, regular for body).
// Font files go in /public/fonts/ — see public/fonts/.gitkeep.
// Google Fonts below serve as fallbacks until Hacen files are placed.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${ibmPlexArabic.variable} ${isRTL ? 'font-arabic' : 'font-body'} bg-brand-offwhite text-brand-dark antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
