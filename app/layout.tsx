import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShiokFlavour | Discover Singapore's Best Hawker & Restaurant Food",
  description:
    "Your guide to the best hawker centres and restaurants across Singapore. Search by location or craving and plan your next flavour trail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="hOrmAuFgbn4LT9H61eIJYNJi2sDlszQbEp-RaeBX6U0"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZHCGRS70VN"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZHCGRS70VN');
`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-sf-bg text-sf-cream">
        {children}
      </body>
    </html>
  );
}
