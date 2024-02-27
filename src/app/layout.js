import { Inter } from "next/font/google";
import "./globals.css";
import "../output.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js history blog",
  description: "Simple next js blog",
  url: "https://next-intro-ruddy-ten.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
