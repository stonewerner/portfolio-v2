import type { Metadata } from "next";

import { site } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — Software Engineer`,
  description: site.tagline,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
