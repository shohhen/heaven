// src/app/layout.tsx
import { Inter } from 'next/font/google';
import Header from '@/app/components/layout/header';
import Footer from '@/app/components/layout/footer';
import '@/app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SVSC - Supporting Survivors in Uzbekistan',
  description: 'Empowering survivors of sexual violence across Uzbekistan with support, healing, and hope.'
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
      </body>
      </html>
  );
}