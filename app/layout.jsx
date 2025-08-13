import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "@/Components/Loader";
import "./globals.css";
import { Manrope } from "next/font/google";
import LenisProvider from "@/Components/Smooth";
import Script from "next/script";

// ✅ Google Fonts
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope"
});

// ✅ SEO Metadata
export const metadata = {
  title: "Tharusha Damsara | Fullstack Developer Portfolio",
  description:
    "Portfolio of Tharusha Damsara (Tharuux), a skilled fullstack developer building modern web apps with Next.js, React, and Tailwind.",
  keywords:
    "Tharusha Damsara, Tharuux, Fullstack Developer, Next.js, React, Tailwind, Web Developer Sri Lanka, Tharux, THARUUX, Developer",
  openGraph: {
    title: "Tharusha Damsara | Fullstack Developer",
    description: "Modern fullstack web development with Next.js and React.",
    url: "https://tharuux.click",
    siteName: "Tharusha Damsara Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/THARUUX/tharuux.github.io/refs/heads/main/tharuux/Images/2.webp",
        width: 1048,
        height: 812,
        alt: "Tharusha Damsara's Developer Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharusha Damsara | Fullstack Developer",
    description: "Portfolio of Tharusha Damsara, building modern web applications.",
    images: ["https://raw.githubusercontent.com/THARUUX/tharuux.github.io/refs/heads/main/tharuux/Images/6.webp"],
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // First load
  useEffect(() => {
    setTimeout(() => setLoading(false), 800); // fake delay for smoothness
  }, []);

  // Route change loader
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // short delay
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Tharusha Damsara" />
      </head>
      <body>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tharusha Damsara",
              url: "https://tharuux.click",
              sameAs: [
                "https://github.com/Tharuux",
                "https://linkedin.com/in/tharuux"
              ],
              jobTitle: "Fullstack Developer",
              worksFor: {
                "@type": "Organization",
                name: "ZYNEX Developments"
              }
            }),
          }}
        />

        {loading && <LoadingScreen />}

        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
