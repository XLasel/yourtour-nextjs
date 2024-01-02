import 'normalize.css/normalize.css'
import "./globals.scss"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export const metadata = {
  title: 'YourTour | Авторские путешествия',
  description: 'Авторские путешествия по России и всему миру. Насыщенные туры в малых группах с небанальными маршрутами. Продуманная программа, забота о каждом путешественнике.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className='wrapper'>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
