"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SlMenu } from "react-icons/sl";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-10 p-4">
      <div className="py-2 px-[2.6rem] container w-full lg:w-[90%] mx-auto flex justify-between items-center h-[90px] rounded-[100vw] bg-[#323232]">
        <div className="flex gap-4 items-center">
          <Image src="/logo.png" alt="logo" width={48} height={48} />
          <span className="font-bold text-[22.4px]">HGP</span>
        </div>
        <ul className="hidden sm:flex items-center font-medium text-[22.4px]">
          <li className="p-4 rounded-2xl hover:bg-[#252525] transition-colors duration-300">
            <Link href="#reception">Reception</Link>
          </li>
          <li className="p-4 rounded-2xl hover:bg-[#252525] transition-colors duration-300">
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
        <button
          type="button"
          className="text-xl sm:hidden"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <SlMenu />
        </button>
        <ul
          className={`bg-secondaryBg p-2 ${
            isSidebarOpen ? "sidebar-open" : "sidebar-closed"
          } sm:hidden flex-col font-medium absolute right-10 top-[90px] rounded-lg text-lg transition-all duration-300`}
        >
          <li className="py-2 px-4 rounded-lg hover:bg-[#252525] transition-colors duration-300">
            <Link href="#reception">Reception</Link>
          </li>
          <li className="py-2 px-4 rounded-lg hover:bg-[#252525] transition-colors duration-300">
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
