import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ไปไหนดี - ท่องเที่ยวไทย 6 ภาค",
  description: "ค้นพบความงามของประเทศไทย 6 ภาค เชียงราย เพชรบุรี หนองคาย ชลบุรี กาญจนบุรี สตูล",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${prompt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
