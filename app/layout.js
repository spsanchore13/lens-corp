import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LENS Corporation | Biometrics & Computer Vision",
  description:
    "We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
