import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fiyatı Ne",
  description: "Gerçek fiyat geçmişiyle alışveriş karar katmanı."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
