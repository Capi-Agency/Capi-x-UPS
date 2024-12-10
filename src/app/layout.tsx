import type { Metadata } from 'next';

import './globals.css';

import { SETTINGS } from '@/utils/settings';
import MainLayout from './MainLayout';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`,
  ),
  title: SETTINGS.GENERAL.NAME_PROJECT,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/assets/logo/favicon.svg" sizes="any" />
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
