import "./styles.global.scss";
import type { Metadata } from "next";
import Providers from "@/utils/provider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
