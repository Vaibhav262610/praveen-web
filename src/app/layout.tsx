import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Navbar from '@/components/Navbar';
import CustomCursor from './CustomCursor';

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
          href='https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <div>
          <Navbar />
          <CustomCursor />
          {children}
        </div>
      </body>
    </html>
  );
}
