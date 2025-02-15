import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_ui/Header";
import DataProvider from "./_context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast Pizza",
  description: "order your italian and american pizza types",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-dvh grid grid-rows-[auto_1fr]`}
      >
        <DataProvider>
          <Header />
          <main className="bg-stone-100">{children}</main>
        </DataProvider>
      </body>
    </html>
  );
}
