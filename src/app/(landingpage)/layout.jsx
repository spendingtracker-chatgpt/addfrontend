import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spending Tracker',
  description: 'python project 2023/24',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container_1'>
            <div className='navbar'>
              <Navbar />
            </div>
            <div className='body-footer'>
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
