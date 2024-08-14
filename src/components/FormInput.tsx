"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputTypes = {
  type?: string;
  name: string;
  placeholder?: string;
  label: string;
  minLength?: number;
  textarea?: boolean;
  width?: string;
};

export default function FormInput({
  type,
  name,
  placeholder,
  label,
  minLength,
  textarea,
  width,
}: InputTypes) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputProps: { [key: string]: any } = {
    className:
      "block w-full py-[9px] placeholder:text-[rgba(201,201,201,1)] bg-transparent border-b outline-none sm:text-lg",
    type: showPassword && type === "password" ? "text" : type,
    name,
    id: name,
    placeholder,
    required: true,
    minLength: minLength || 0,
  };

  if (type === "tel") {
    inputProps.pattern = "\\+998[0-9]{9}";
  }

  return (
    <div
      className={`w-full ${
        !textarea && !width && "lg:w-1/2"
      } flex flex-col gap-y-1 relative`}
    >
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="font-medium sm:text-lg">{label}</label>
        {placeholder === "your login password" && (
          <Link href="/forgot" className="text-blue hover:underline">
            Forgot password
          </Link>
        )}
      </div>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          className="focus:outline-none placeholder:text-[rgba(201,201,201,1)] bg-transparent border-b py-2.5 placeholder:font-medium"
          placeholder="Write your message..."
          required
          rows={4}
        />
      ) : (
        <div className="relative">
          <input {...inputProps} />
          {type === "password" && (
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
