import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "EAD Play",
  description: "Estude de forma divertida com EAD Play",
  applicationName: "EAD Play",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/icon/icon-198.png",
        sizes: "198x198",
        type: "image/png",
      },
      {
        url: "/icon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icon/icon-198.png",
        sizes: "198x198",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    title: "EAD Play",
    capable: true,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#A7E81C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
