import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/global.css";

const poppins = Poppins({
  weight: ["700", "400"],
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
