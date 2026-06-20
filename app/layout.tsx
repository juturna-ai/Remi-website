import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://remi-website.vercel.app"),
  title: "Remi — Reminders & notes, kept simple",
  description:
    "Remi is a clean, private reminder and notes app. Offline, no account, no tracking. Your reminders stay on your device.",
  icons: { icon: "/remi-icon.png" },
  openGraph: {
    title: "Remi — Reminders & notes, kept simple",
    description:
      "A clean, private reminder and notes app. Offline, no account, no tracking.",
    images: ["/remi-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
