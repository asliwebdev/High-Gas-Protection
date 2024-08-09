"use client";

import { UploadImage } from "@/lib/actions";
import { fetchProfileImage } from "@/lib/data";
import { useState, useEffect } from "react";
import { BsCameraFill } from "react-icons/bs";

export default function ImgContainer({
  imgUrl,
  userId,
}: {
  imgUrl: string;
  userId: number;
}) {
  const [profileImage, setProfileImage] = useState(
    imgUrl || "/profile_img.webp"
  );

  useEffect(() => {
    async function getImage() {
      const imageUrl = await fetchProfileImage(imgUrl);
      if (imageUrl) {
        setProfileImage(imageUrl);
        console.log("imageUrl", imageUrl);
        localStorage.setItem("profileImage", imageUrl);
        window.dispatchEvent(new Event("profileImageUpdated"));
      }
    }
    if (imgUrl) {
      getImage();
    }
  }, [imgUrl, profileImage]);

  async function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", userId.toString());
      await UploadImage(formData);
    }
  }

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
