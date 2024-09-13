import { Inter } from "next/font/google";
import "./globals.css";
// import Warnings from "./components/warnings";
// import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afasimakker",
  description: "Træn forskellige sprogøvelser",
  icons: {
    icon: "/conversation.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>
        {children}
        <img className="logo" src="/conversation.svg" alt="SVG Repo Logo" />
      </body>
    </html>
  );
}