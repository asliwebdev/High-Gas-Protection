"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SlMenu } from "react-icons/sl";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(
    localStorage.getItem("profileImage") || "/profile_img.webp"
  );

  useEffect(() => {
    function updateProfileImage() {
      const newImageUrl = localStorage.getItem("profileImage");
      if (newImageUrl) {
        setProfileImage(newImageUrl);
      }
    }

    window.addEventListener("profileImageUpdated", updateProfileImage);

    return () => {
      window.removeEventListener("profileImageUpdated", updateProfileImage);
    };
  }, []);

  return (
    <header className="flex items-center justify-between header-shadow">
      <button
        type="button"
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
      <div className="w-[300px] h-8 rounded-full py-2 px-4 bg-success hidden md:flex items-center justify-center text-black">
        On
      </div>
      <div className="flex gap-5 items-center">
        <button
          type="button"
          className="text-xl block md:hidden"
          onClick={toggleSidebar}
        >
          <SlMenu />
        </button>
        <Link href="/dashboard/profile">
          <Image
            src={profileImage}
            alt="avatar image"
            width={35}
            height={35}
            className="rounded-full"
          />
        </Link>
      </div>
    </header>
  );
}
