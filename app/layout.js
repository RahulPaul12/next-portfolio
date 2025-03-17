import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/custom.css";
import "@/public/icon/iconly.css";

import HeaderLayout from "@/layouts/HeaderLayout";
import MobileLayout from "@/layouts/MobileLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahul's Portfolio",
  description: "Rahul Paul. Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderLayout/>
        <MobileLayout/>
        {children}
      </body>
    </html>
  );
}
