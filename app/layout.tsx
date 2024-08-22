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
      <body className="">
          <Navbar />
          <main className="flex flex-col min-h-screen max-w-md items-center justify-center m-auto p-20">{children}</main>
          <footer>all rights reserved @pagepulse</footer>
      </body>
    </html>
  );
}
