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
        <body className={`${nunito.className} min-h-screen flex flex-col bg-theme10-900 dark:bg-theme1`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
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
