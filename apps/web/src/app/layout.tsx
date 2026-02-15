import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YoMama | Rent Yo Mama From The Terminal",
  description:
    "The only on-demand mama platform built for developers. Motivation, accountability, and unconditional love — one CLI command away.",
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
