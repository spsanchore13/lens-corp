import { Poppins, Raleway } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-poppins",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata = {
  title: "LENS Corporation | Biometrics & Computer Vision",
  description:
    "We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
