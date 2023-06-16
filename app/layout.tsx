import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
