import Navbar from "@/components/navbar/navbarNoAuth";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: 'any',
      url: '/auvexis.ico',
    },
  ],
  title: "Auvexis",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}