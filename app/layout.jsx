import "./globals.css";
import { Manrope } from "next/font/google";
import ClientLayout from "./ClientLayout";

// ✅ Google Fonts
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

// ✅ SEO Metadata
export const metadata = {
  title: "Tharusha Damsara | Fullstack Developer Portfolio",
  description:
    "Portfolio of Tharusha Damsara (Tharuux), a skilled fullstack developer building modern web apps with Next.js, React, and Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        {/* This is the only place we call the client layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
