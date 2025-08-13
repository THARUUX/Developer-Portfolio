"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "@/Components/Loader";
import LenisProvider from "@/Components/Smooth";
import Script from "next/script";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // First load
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  // Route change loader
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Tharusha Damsara",
            url: "https://your-portfolio.com",
            sameAs: [
              "https://github.com/Tharuux",
              "https://linkedin.com/in/tharuux",
            ],
            jobTitle: "Fullstack Developer",
            worksFor: {
              "@type": "Organization",
              name: "ZYNEX Developments",
            },
          }),
        }}
      />

      {/* Loader */}
      {loading && <LoadingScreen />}

      {/* Smooth scroll wrapper */}
      <LenisProvider>{children}</LenisProvider>
    </>
  );
}
