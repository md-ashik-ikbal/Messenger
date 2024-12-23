import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Messenger",
  description: "Generated by Anonymous!",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} antialiased dark:bg-gray-950 bg-gray-200 dark:text-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}