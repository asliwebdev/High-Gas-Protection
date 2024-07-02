"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="flex items-center justify-between header-shadow">
      <button
        type="button"
        className={`w-16 h-8 border-2 rounded-full border-borderColor flex items-center transition-all duration-300 bg-[rgba(0,0,0,0.6)]`}
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={`transform transition-transform duration-300 ${
            isActive ? "translate-x-8 bg-success" : "translate-x-0 bg-danger"
          } rounded-full w-7 h-7 block`}
        ></span>
      </button>
      <div
        className={`w-[300px] h-8 rounded-full py-2 px-4 ${
          isActive ? "bg-success" : "bg-danger"
        } flex items-center justify-center text-black`}
      >
        {isActive ? "On" : "Off"}
      </div>
      <Link href="/dashboard/profile">
        <Image
          src="/avatar.svg"
          alt="avatar image"
          width={35}
          height={35}
          className="rounded-full"
        />
      </Link>
    </header>
  );
}
