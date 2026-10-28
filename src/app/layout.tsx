import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artibooks | Publishing & Digital Marketing",
  description:
    "Your reliable publishing production partner. Professional typesetting, layout, digital artwork and production support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className={`${outfit.className} min-h-full`}>
        {children}
      </body>
    </html>
  );
}
