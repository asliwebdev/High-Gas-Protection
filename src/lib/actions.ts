"use server";

import { cookies } from "next/headers";
import { getUserProfile } from "./data";
import { revalidateTag } from "next/cache";

const baseUrl = "https://amused-bison-equipped.ngrok-free.app";

export async function registerUser(formData: FormData) {
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    password: formData.get("password"),
    passportSerialNumber: formData.get("passportSerialNumber"),
    gender: formData.get("gender")?.toString().toUpperCase(),
  };

  try {
    const response = await fetch(`${baseUrl}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { error: "Failed to register user" };
    }
    return {
      message: "Verification link sent to your email. Please check it!",
    };
  } catch (error) {
    return { error: "Failed to register user!" };
  }
}

export async function order(formData: FormData) {
  const data = {
    userPhone: formData.get("userPhone"),
    orderAddress: formData.get("orderAddress"),
    passportSerialNumber: formData.get("passportSerialNumber"),
  };

  try {
    const response = await fetch(`${baseUrl}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { error: "Failed to order hardware!" };
    }
    return {
      message: "Login sent to your email. Please check it!",
    };
  } catch (error) {
    return { error: "Failed to order hardware!" };
  }
}

export async function login(formData: FormData) {
  const data = {
    login: formData.get("login"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { error: "Failed to login user!" };
    }
    const responseData = await response.json();

    const cookieStore = cookies();
    cookieStore.set({
      name: "hgpToken",
      value: responseData?.token,
      path: "/",
      httpOnly: true,
      sameSite: "strict",
    });
    return {
      message: "Successfully logged in!",
    };
  } catch (error) {
    return { error: "Failed to login user!" };
  }
}

export async function sendMessage(formData: FormData) {
  const userData = await getUserProfile();
  const data = {
    title: formData.get("title"),
    message: formData.get("message"),
    email: userData?.email,
  };

  const token = cookies().get("hgpToken")?.value;
  if (!token) {
    return { error: "Token not found." };
  }

  try {
    const response = await fetch(`${baseUrl}/api/contact/send/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { error: "Failed to send your message!" };
    }
    return {
      message: "Your message successfully sent. We'll contact back soon!",
    };
  } catch (error) {
    return { error: "Failed to send your message!" };
  }
}

export async function deleteCookie() {
  try {
    cookies().delete("hgpToken");
    return { message: "You are logging out..." };
  } catch (error) {
    return { error: "Something went wrong" };
  }
}

export async function UploadImage(formData: FormData) {
  const token = cookies().get("hgpToken")?.value;
  if (!token) {
    return { error: "Token not found." };
  }

  try {
    const response = await fetch(`${baseUrl}/api/uploadImage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      return { error: "Failed to upload the new image!" };
    }
  } catch (error) {
    return { error: "Failed to upload the new image!" };
  }
  revalidateTag("userProfile");
}

export async function updateProfile(formData: FormData) {
  const userData = await getUserProfile();
  const token = cookies().get("hgpToken")?.value;
  const data = {
    id: userData.id,
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
  };

  if (!token) {
    return { error: "Token not found." };
  }

  try {
    const response = await fetch(`${baseUrl}/api/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { error: "Failed to edit the user info!" };
    }
  } catch (error) {
    return { error: "Failed to edit the user info!" };
  }
  revalidateTag("userProfile");
  return {
    message: "Profile infos updated successfully!",
  };
}

export async function updatePassword(formData: FormData) {
  const data = {
    newPass: formData.get("newPass"),
    email: formData.get("email"),
  };

  try {
    const response = await fetch(`${baseUrl}/api/reset-pass`, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { error: "Failed to reset the password!" };
    }
    return { message: "Password reset successfully!" };
  } catch (error) {
    return { error: "Failed to reset the password!" };
  }
}
