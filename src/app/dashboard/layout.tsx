import type { Metadata } from "next";
import ClientDashboardLayout from "./client-side-layout";
import { cookies } from "next/headers";
import { getUserProfile } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    template: "%s | HGP",
    default: "High Gas Protection",
  },
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accessStatus = cookies().get("accessStatus");
  return <ClientDashboardLayout accessStatus={accessStatus}>{children}</ClientDashboardLayout>;
}
