import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Juliancio Carvalho",
  description: "Desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
