import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YoMama CLI | Rent Mom Energy from Your Terminal",
  description:
    "Landing page for a startup building a CLI tool for renting your mama on demand.",
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
