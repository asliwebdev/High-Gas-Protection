"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { IoPersonCircleOutline } from "react-icons/io5";
import { getUserProfile } from "@/lib/data";

export default function Header({
  toggleSidebar,
  accessStatus,
}: {
  toggleSidebar: () => void;
  accessStatus: any;
}) {
  const [isActive, setIsActive] = useState(false);
  const [userData, setUserData] = useState({firstname: "", lastname: ""});

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUserProfile()
      setUserData(userData)
    }
    getUserData()
  }, []);

  return (
    <header className="flex items-center justify-between header-shadow lg:px-10">
      <div className="flex gap-5 items-center">
      <button
          type="button"
          className="text-xl block md:hidden"
          onClick={toggleSidebar}
        >
          <SlMenu />
        </button>
      <button
        type="button"
        disabled={!accessStatus}
        className={`w-16 h-8 border-2 rounded-full border-borderColor flex items-center transition-all duration-300  ${
          isActive ? "bg-[rgba(255,255,255,0.6)]" : "bg-[rgba(0,0,0,0.6)]"
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={`transform transition-transform duration-300 ${
            isActive ? "translate-x-8 bg-success" : "translate-x-0 bg-danger"
          } rounded-full w-7 h-7 block`}
        ></span>
      </button>
      </div>
      <div className={`w-[300px] h-8 rounded-full py-2 px-4 ${accessStatus ? "bg-success" : "bg-danger"}  hidden md:flex items-center justify-center text-black`}>
        {accessStatus ? "On" : "Off"}
      </div>
        <div className="flex items-center gap-x-2 text-xs font-bold leading-3 uppercase">
         <span>{userData?.firstname} <br /> {userData?.lastname}</span>
         <Link href="/dashboard/profile">
          <IoPersonCircleOutline className="text-4xl" />
         </Link>
        </div>
    </header>
  );
}
