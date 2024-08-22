import React from 'react';
import Navbar from '../components/navbar';
import './globals.css';

export const metadata = {
  title: 'PagePulse',
  description: 'Your site description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer>all rights reserved @pagepulse</footer>
        </div>
      </body>
    </html>
  );
}
