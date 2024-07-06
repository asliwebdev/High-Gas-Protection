"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type State = {
  error?: string;
  message?: string;
};

const baseUrl = "https://315b-195-158-2-216.ngrok-free.app";

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
    cookies().set("hgpToken", responseData?.token);
    return {
      message: "Successfully logged in!",
    };
  } catch (error) {
    return { error: "Failed to login user!" };
  }
}
