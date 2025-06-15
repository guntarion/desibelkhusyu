import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { APP_INFO } from "@/lib/constants/app.constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: APP_INFO.name,
    template: `%s | ${APP_INFO.name}`,
  },
  description: APP_INFO.description,
  keywords: [...APP_INFO.keywords],
  authors: [{ name: APP_INFO.author }],
  creator: APP_INFO.author,
  metadataBase: new URL('https://desibelkhusyu.app'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://desibelkhusyu.app',
    title: APP_INFO.name,
    description: APP_INFO.description,
    siteName: APP_INFO.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_INFO.name,
    description: APP_INFO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-1 pb-16 md:pb-0">
            {children}
          </main>
          
          <Footer />
          <Navigation />
        </div>
      </body>
    </html>
  );
}
