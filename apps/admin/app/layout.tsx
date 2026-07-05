import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmas Autos Admin",
  description: "Admin dashboard foundation",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
