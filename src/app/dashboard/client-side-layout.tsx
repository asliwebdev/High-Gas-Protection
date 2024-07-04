"use client";

import { inter } from "@/lib/fonts";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./header";

export default function ClientDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <main
      className={`${inter.className} min-h-screen bg-[rgba(8,8,8,1)] shadows flex gap-4`}
    >
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 p-4 flex flex-col gap-7">
        <Header toggleSidebar={toggleSidebar} />
        <div className="border-t border-borderColor pt-10">{children}</div>
      </div>
    </main>
  );
}
