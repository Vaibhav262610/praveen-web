import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Praveen Pasupuleti',
  description: 'Photographer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap'
          rel='stylesheet'
        ></link>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
