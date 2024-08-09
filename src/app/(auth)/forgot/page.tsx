"use client";

import FormInput from "@/components/FormInput";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { updatePassword } from "@/lib/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Forgot() {
  const router = useRouter();

  async function clientAction(formData: FormData) {
    const response = await updatePassword(formData);
    if (response.error) {
      toast.error(`${response.error}`);
    } else {
      toast.success(`${response.message}`);
      router.push("/login");
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
        <h1 className="text-3xl text-center mb-8">
          <strong>Forgot Password</strong>
        </h1>
        <div className="flex flex-col gap-5 lg:gap-8">
          <FormInput
            type="text"
            name="email"
            placeholder="Enter your email"
            label="Email"
            width="w-full"
          />
          <FormInput
            type="password"
            name="newPass"
            placeholder="your password"
            label="New Password"
            width="w-full"
          />
        </div>
        <SubmitButton text="Send" cancel />
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
