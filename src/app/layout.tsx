import "./styles.global.scss";
import type { Metadata } from "next";
import { AppStoreProvider } from "@/providers/app";

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
        <AppStoreProvider>{children}</AppStoreProvider>
      </body>
    </html>
  );
}
