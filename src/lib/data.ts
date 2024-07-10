import { cookies } from "next/headers";

const baseUrl = "https://1a8a-195-158-2-216.ngrok-free.app";

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
