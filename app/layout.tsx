import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Remember Me App",
  description: "Aplicacion de recordatorios",
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
