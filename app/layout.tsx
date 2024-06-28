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
            <div className={`${inter.className} md:w-3/5 sm:w-4/5 max-w-screen sm:h-9/12 sm:m-auto sm:mt-5 sm:mb-5 m-5 p-12 border-black border-[3px] bg-white rounded-2xl`}>{children}</div>
          </div>
      </body>
    </html>
  );
}
