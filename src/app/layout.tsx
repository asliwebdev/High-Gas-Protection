import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "High Gas Protection",
  description: "The system that allow you to manage gas condition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
