import type { Metadata } from "next";
import ClientDashboardLayout from "./client-side-layout";

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
  return <ClientDashboardLayout>{children}</ClientDashboardLayout>;
}
