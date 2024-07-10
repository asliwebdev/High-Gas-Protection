"use client";

import { useState } from "react";
import ImgContainer from "./ImgContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type UserType = {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  password: string;
  passportSerialNumber: string;
  phone: string;
  gender: "MALE" | "FEMALE";
};

export default function ProfileInfos({
  profileData: initialProfileData,
}: {
  profileData: UserType;
}) {
  const [profileData, setProfileData] = useState<UserType>(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const editableFields = ["email", "address", "phone", "password"];
  const btnClasses = "px-6 lg:px-14 py-2 rounded-md font-medium";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditing = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      // Send changes to the backend
      setIsEditing(false);
    }
  };

  return (
    <section className="w-full flex flex-col gap-8 items-center lg:flex-row justify-center lg:items-start lg:gap-10 xl:gap-20 pb-12">
      <div className="p-6 rounded-2xl w-full flex-[2] bg-[#252525] flex flex-col items-center justify-center">
        <ImgContainer />
        <h1 className="text-4xl font-semibold mt-6 text-center">
          {profileData.firstname}{" "}
          <span className="text-blue">{profileData.lastname}</span>
        </h1>
        <p className="mt-3 font-medium text-[rgba(201,201,201,1)]">
          {profileData.email}
        </p>
      </div>
      <div className="w-full flex-[3] bg-[#252525] rounded-2xl p-4 lg:p-6">
        <div className="space-y-4">
          {Object.keys(profileData).map((field) => (
            <div
              key={field}
              className="grid grid-cols-2  gap-4 lg:gap-10 border-b border-borderColor pb-2"
            >
              <label className="font-semibold capitalize text-xl flex items-center mr-3">
                {field === "passportSerialNumber" ? "login" : field}
              </label>
              <div className="flex gap-2 items-center justify-between">
                {isEditing && editableFields.includes(field) ? (
                  <input
                    type={
                      field === "password" && !showPassword
                        ? "password"
                        : "text"
                    }
                    name={field}
                    value={profileData[field as keyof UserType]}
                    onChange={handleInputChange}
                    className="p-2 bg-transparent border rounded-lg w-full outline-none focus:border-blue"
                  />
                ) : (
                  <span className="text-[rgba(201,201,201,1)] max-w-48 overflow-hidden">
                    {field === "password" && !showPassword
                      ? "•".repeat(initialProfileData.password.length)
                      : initialProfileData[field as keyof UserType]}
                  </span>
                )}
                {field === "password" && (
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 lg:gap-12 mt-4 justify-center">
          {isEditing && (
            <button
              type="button"
              className={`${btnClasses} bg-danger`}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            className={`${btnClasses} bg-blue`}
            onClick={handleEditing}
          >
            {isEditing ? "Save changes" : "Edit"}
          </button>
        </div>
      </div>
    </section>
  );
}
