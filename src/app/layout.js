import './globals.scss';

import { Footer } from '@/section/Footer';
import { Header } from '@/section/Header';

import { DeviceTypeProvider } from '@/shared/context/DeviceTypeContext';

export const metadata = {
  title: 'YourTour | Авторские путешествия',
  description:
    'Авторские путешествия по России и всему миру. Насыщенные туры в малых группах с небанальными маршрутами. Продуманная программа, забота о каждом путешественнике.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <DeviceTypeProvider>
          <div className="wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </DeviceTypeProvider>
      </body>
    </html>
  );
}
