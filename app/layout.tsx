import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import './globals.css';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const RootLayout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <html>
      <Head>
        <title>{title || 'PagePulse'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer> all rights reserved @pagepulse</footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
