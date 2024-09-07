import AnimateWrapper from '@/components/AnimateWrapper';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { ThemeProvider } from "@/components/theme-provider";
import Footer from '@/components/footer';
import { ClerkProvider } from '@clerk/nextjs';
import {SWRProvider} from '@/lib/swr-provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SWRProvider>
    <ClerkProvider>
      
      <html lang="en">
        <body className={`${inter.className} bg-gray-200 dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900`}>
          <ThemeProvider defaultTheme="dark" attribute="class">
            <div className="flex flex-col min-h-screen">
              {/* Navbar at the top */}
              <Navbar />
              
              {/* Main content grows to fill space between Navbar and Footer */}
              <main className="flex-grow">
                <AnimateWrapper>
                  {children}
                </AnimateWrapper>
              </main>
              
              {/* Footer stays at the bottom */}
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
      
    </ClerkProvider></SWRProvider>
  );
}
