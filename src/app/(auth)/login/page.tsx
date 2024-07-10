"use client";

import FormInput from "@/components/FormInput";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { login } from "@/lib/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  async function clientAction(formData: FormData) {
    const response = await login(formData);
    if (response.error) {
      toast.error(`${response.error}`);
    } else {
      toast.success("Successfully logged in!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  }

  return (
    <main
      className={`min-h-screen flex items-center justify-center bg-[rgba(8,8,8,1)] shadows py-10 ${poppins.className}`}
    >
      <form
        action={clientAction}
        className="bg-[#252525] rounded-xl px-8 py-10 lg:p-10 w-[90%] max-w-[600px]"
      >
        <h1 className="text-3xl text-center">
          <strong>Login</strong>
        </h1>
        <p className="mt-4 mb-8 text-sm text-center text-blue">
          Please use the login that sent to your email to access your dashboard.
        </p>
        <div className="flex flex-col gap-5 lg:gap-8">
          <FormInput
            type="text"
            name="login"
            placeholder="Enter your login"
            label="Login"
            width="w-full"
          />
          <FormInput
            type="password"
            name="password"
            placeholder="your password"
            label="Password"
            width="w-full"
          />
        </div>
        {/* <p aria-live="polite" role="status" className="text-danger">
          {state?.message}
        </p> */}
        <SubmitButton text="Login" cancel />
        <p className="mt-6 text-center">
          No account yet?{" "}
          <Link href="/registration" className="text-blue ml-3 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}
