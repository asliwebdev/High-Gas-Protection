"use client";

import { useState } from "react";
import { BsCameraFill } from "react-icons/bs";

export default function ImgContainer() {
  const [profileImage, setProfileImage] = useState("/profile_img.webp");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative cursor-pointer w-[250px] h-[250px] group shrink-0">
      <img
        src={profileImage}
        alt="Profile"
        className="rounded-full w-full h-full group-hover:opacity-60 border-2 border-blue shadow-blue transition-all duration-300"
      />
      <div className="opacity-0 absolute inset-0 text-white group-hover:opacity-100 flex items-center justify-center rounded-2xl text-lg transition-all duration-300">
        <div className="flex flex-col items-center gap-2">
          <BsCameraFill className="text-center text-6xl" />
          <span>Change Image</span>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        onChange={handleImageChange}
      />
    </div>
  );
}
