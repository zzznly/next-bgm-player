import "./styles.global.scss";
import type { Metadata } from "next";
import AppProviders from "@/providers";

export const metadata: Metadata = {
  title: "Truetones Player",
  description: "Truetones BGM Player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
