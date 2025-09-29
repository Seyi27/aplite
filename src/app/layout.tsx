import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aplite",
  description: "Aplite - Your trusted platform for connections",
  icons: {
    icon: "/aplitelogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex w-full">
          <Sidebar />

          <div className="flex-1 ml-0 sm:ml-[247px]">
            <Navbar />

            <div className="flex-1 mt-[90px] px-5">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
