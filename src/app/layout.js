import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Ranade-Regular.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Ranade-Regular.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Edumorph",
  description: "Edumorph NFT minting website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
