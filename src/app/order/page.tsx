"use client";

import FormInput from "@/components/FormInput";
import { order } from "@/lib/actions";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();

  async function clientAction(formData: FormData) {
    const response = await order(formData);
    if (response.error) {
      toast.error(`${response.error}`);
    } else {
      toast.success("Login sent to your email. Please check it!");
      setTimeout(() => {
        router.push("/login");
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
          <strong>Order</strong>
        </h1>
        <p className="mt-4 mb-8 text-sm text-center text-blue">
          You should order the hardware first to be able to use platform!
        </p>
        <div className="flex flex-col gap-5 lg:gap-8">
          <FormInput
            type="tel"
            name="userPhone"
            placeholder="+998 99 123 45 67"
            label="Phone Number"
            minLength={9}
            width="w-full"
          />
          <FormInput
            type="text"
            name="orderAddress"
            placeholder="your address"
            label="Address"
            width="w-full"
          />
          <FormInput
            type="text"
            name="passportSerialNumber"
            placeholder="your passport number"
            label="Passport Serial Number"
            minLength={9}
            width="w-full"
          />
        </div>
        {/* <p aria-live="polite" role="status" className="text-danger">
          {state?.message}
        </p> */}
        <SubmitButton text="Order" cancel />
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
