import type { Metadata } from "next";
import localFont from "next/font/local";
import { WatchlistProvider } from "./providers";
import "./globals.css";

import Nav from '@/app/components/Navbar'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Movie Watchlist",
  description: "Collect movies you've seen and find new movies to watch!",
};

export default function RootLayout(
  { children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <WatchlistProvider>
          {children}
        </WatchlistProvider>
      </body>
    </html>
  );
}
