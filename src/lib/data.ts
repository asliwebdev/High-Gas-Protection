"use server";

import { cookies } from "next/headers";

const baseUrl = "https://amused-bison-equipped.ngrok-free.app";

export async function getUserProfile() {
  const token = cookies().get("hgpToken")?.value;
  if (!token) {
    return { error: "Token not found." };
  }
  try {
    const response = await fetch(`${baseUrl}/api/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["userProfile"] },
    });

    if (!response.ok) {
      throw new Error("Couldn't get the user informations");
    }

    return response.json();
  } catch (error) {
    throw new Error("Couldn't get the user informations");
  }
}

export async function fetchProfileImage(imgUrl: string) {
  const token = cookies().get("hgpToken")?.value;
  if (!token) {
    return { error: "Token not found." };
  }
  try {
    const response = await fetch(imgUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch image data");
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error("Error fetching image data:", error);
    return null;
  }
}
