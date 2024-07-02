import { inter } from "@/lib/fonts";
import type { Metadata } from "next";
import Sidebar from "./Sidebar";
import Header from "./header";

export const metadata: Metadata = {
  title: {
    template: "%s | HGP",
    default: "High Gas Protection",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${inter.className} min-h-screen bg-[rgba(8,8,8,1)] shadows flex gap-4`}
    >
      <Sidebar />
      <div className="flex-1 p-4 flex flex-col gap-7">
        <Header />
        <div className="border-t border-borderColor pt-10">{children}</div>
      </div>
    </main>
  );
}
