import type { Metadata } from 'next';
import Header from '@/app/ui/(client)/header'
import Footer from '@/app/ui/(client)/footer';

export const metadata: Metadata = {
  title: 'Immigration Connect',
  description: 'Connect you to immigration agent nearby',
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header />
        {children}
        <Footer />
      </>
  );
}
