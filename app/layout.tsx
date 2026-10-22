import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brookfield International School | Anantnag",
  description:
    "Brookfield International School, Anantnag - an international curriculum with project-based learning, coding & robotics and Islamic theology. Admissions open for 2026-27.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
