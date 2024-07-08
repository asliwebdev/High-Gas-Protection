"use server";

import { cookies } from "next/headers";

const baseUrl = "https://1a8a-195-158-2-216.ngrok-free.app";

export async function registerUser(formData: FormData) {
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    password: formData.get("password"),
    passportSerialNumber: formData.get("passportSerialNumber"),
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
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    message: formData.get("message"),
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
