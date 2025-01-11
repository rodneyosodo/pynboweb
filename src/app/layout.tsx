import type { Metadata } from "next";
import { Mali } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const mali = Mali({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PyConKE 2025",
  description: "Africa's largest Python conference, held in Nairobi, Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Welcome to PyCon Kenya 2025" />
        <meta
          property="og:description"
          content="Africa's largest Python conference, held in Nairobi, Kenya. Join us for a weekend of inspiring talks, informative workshops, and fun networking events."
        />
        <meta property="og:url" content={`${baseUrl}/opengraph.png`} />

        <meta property="og:image" content={`${baseUrl}/opengraph.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to PyCon Kenya 2025" />
        <meta
          name="twitter:description"
          content="Africa's largest Python conference, held in Nairobi, Kenya. Join us for a weekend of inspiring talks, informative workshops, and fun networking events."
        />
        <meta name="twitter:image" content={`${baseUrl}/opengraph.png`} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </head>
      <body className={`${mali.className} antialiased`}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
