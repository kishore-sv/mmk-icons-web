import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ['latin'] })
// const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  metadataBase: new URL("https://icons.kishore-sv.me"),
  title: {
    default: "MMK Icons - Premium React & Next.js Icon Library",
    template: "%s | MMK Icons"
  },
  description: "A high-quality, open-source icon library for React and Next.js featuring 70+ modern web icons with full TypeScript support.",
  keywords: ["icons", "react", "nextjs", "svg", "typescript", "library", "mmk icons", "web design", "frontend"],
  authors: [{ name: "Kishore" }],
  creator: "Kishore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icons.kishore-sv.me",
    title: "MMK Icons - Premium React & Next.js Icon Library",
    description: "70+ modern web icons for React and Next.js. Fully customizable, tree-shakable, and TypeScript ready.",
    siteName: "MMK Icons",
    images: [
      {
        url: "/mmk.svg",
        width: 1200,
        height: 630,
        alt: "MMK Icons Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMK Icons - Premium React & Next.js Icon Library",
    description: "70+ modern web icons for React and Next.js. Fully customizable, tree-shakable, and TypeScript ready.",
    images: ["/mmk.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="google-site-verification" content="jCZEMBZli1xqreUKnEgoNvrmaQ2RnHp56pSpl_bbPo4" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
            }}
          />
        </head>
        <body
          className={`${inter.className} bg-[#fff] dark:bg-[#000] antialiased text-neutral-900 dark:text-neutral-100 selection:bg-blue-600 selection:text-neutral-200 preload`}
        >
          <Header />

          <div className="w-[100vw]  h-full flex-col lg:flex-row flex  justify-center  lg:px-40 " >
            <SideMenu />
            <div className="min-h-[80vh] w-[100%] lg:w-[80%] pl-5  scroll-smooth pt-10 px-2  " >
              {children}
            </div>
          </div>

        </body>
      </html>
    </ViewTransitions>
  );
}
