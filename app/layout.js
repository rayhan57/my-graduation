import { Playball } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";

const pacifico = Playball({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "My Graduation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/de0d5c5a2a.js"
        crossOrigin="anonymous"
      ></Script>
      <body className={pacifico.className}>{children}</body>
    </html>
  );
}
