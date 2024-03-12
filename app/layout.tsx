import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIGA",
  description: "app for SIGA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
