import AnimateWrapper from '@/components/AnimateWrapper';
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '@/components/footer'
import { ClerkProvider } from '@clerk/nextjs'

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
              
      <html lang="en">
      
      <body className={`${nunito.className} max-w-p13 flex flex-col m-auto dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900`}>
        <ThemeProvider defaultTheme="dark" attribute="class">
<AnimateWrapper>
              <Navbar />
              {children}
            </AnimateWrapper>
            {/* <Footer /> */}
            </ThemeProvider>
        </body>
        
      </html>
      
    
    
    </ClerkProvider>
  )
}
