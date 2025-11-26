import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Archetype Wars Prompt Generator",
  description:
    "Twenty anime-ready prompt concepts blending cyberpunk mecha, fantasy dragons, and public domain legends."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
