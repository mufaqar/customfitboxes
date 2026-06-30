import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import CartProviderClient from "@/context/CartProviderClient";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CustomFitBox",
  description: "Custom packaging solutions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if draft mode is enabled (for previewing unpublished content)
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProviderClient>
          <Header />
          {children}
          <Footer />
        </CartProviderClient>
        
        {/* Sanity features - only enabled in draft mode for Next.js 16 safety */}
        {isDraftMode && (
          <>
            <SanityLive />
            <VisualEditing />
            {/* Exit preview button */}
            <div className="fixed bottom-4 right-4 z-50">
              <a
                href="/api/draft-mode/disable"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition shadow-lg text-sm font-medium"
              >
                Exit Preview Mode
              </a>
            </div>
          </>
        )}
      </body>
    </html>
  );
}