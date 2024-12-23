import "./styles.global.scss";
import type { Metadata } from "next";
import ReactQueryProvider from "@/providers/react-query";

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
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
