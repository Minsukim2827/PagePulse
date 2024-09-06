import AnimateWrapper from '@/components/AnimateWrapper';
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '@/components/footer'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the weights you want to use
  style: ['normal', 'italic'], // Specify the styles you want to use
  display: 'swap', // Use the 'swap' display strategy for better performance
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
              
      <html lang="en">
      
      <body className={`${inter.className} flex flex-col bg-gray-200 dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 max-w-13`}>
        <ThemeProvider defaultTheme="dark" attribute="class">
<AnimateWrapper>
              <Navbar />
              {children}
            </AnimateWrapper>
            <Footer />
            </ThemeProvider>
        </body>
        
      </html>
      
    
    
    </ClerkProvider>
  )
}
