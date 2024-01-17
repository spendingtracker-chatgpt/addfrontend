import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import SideNavbar from "@/components/SideNavBar/SideNavBar";
const inter = Inter({ subsets: ['latin'] })
import './globals.css'
export const metadata = {
  title: 'Spending Tracker - Dashboard',
  description: 'python project 2023/24',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="page">
            <div className="sidenavbar">
              <SideNavbar />
            </div>
            <div className="contenu">
            {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
