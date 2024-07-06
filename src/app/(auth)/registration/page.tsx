"use client";

import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import { registerUser } from "@/lib/actions";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  async function clientAction(formData: FormData) {
    const response = await registerUser(formData);
    if (response.error) {
      toast.error(`${response.error}`);
    } else {
      toast.success("Verification link sent to your email. Please check it!");
      setTimeout(() => {
        router.push("/order");
      }, 2000);
    }
  }

  return (
    <main
      className={`min-h-screen flex items-center justify-center bg-[rgba(8,8,8,1)] shadows py-10 ${poppins.className}`}
    >
      <form
        action={clientAction}
        className="bg-[#252525] rounded-xl px-8 py-10 lg:p-10 w-[90%] max-w-[900px]"
      >
        <h1 className="text-3xl text-center mb-8">
          <strong>Register</strong>
        </h1>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full">
          <FormInput
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            label="First Name"
          />
          <FormInput
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            label="Last Name"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-5 lg:my-8">
          <FormInput
            type="email"
            name="email"
            placeholder="something@gmail.com"
            label="Email"
          />
          <FormInput
            type="tel"
            name="phone"
            placeholder="+998 99 123 45 67"
            label="Phone Number"
            minLength={9}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-5 lg:my-8">
          <FormInput
            type="text"
            name="address"
            placeholder="your address"
            label="Address"
          />
          <FormInput
            type="password"
            name="password"
            placeholder="your password"
            label="Password"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-5 lg:my-8">
          <FormInput
            type="text"
            name="passportSerialNumber"
            placeholder="your passport number"
            label="Passport Serial Number"
            minLength={9}
          />
          <FormSelect />
        </div>
        {/* <p aria-live="polite" role="status" className="text-danger">
          {state?.message}
        </p> */}
        <SubmitButton text="Register" />
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue ml-3 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
