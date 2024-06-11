import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-lavender`}>
          <div className="min-h-screen min-w-screen place-content-center">
            <div className={`${inter.className} flex-grow w-3/5 h-9/12 m-auto p-12 overflow-y-auto border-black border-2 bg-white rounded-lg`}>{children}</div>
          </div>
      </body>
    </html>
  );
}
