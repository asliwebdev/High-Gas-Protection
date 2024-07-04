import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import { poppins } from "@/lib/fonts";
import Link from "next/link";

export default function Register() {
  return (
    <main
      className={`min-h-screen flex items-center justify-center bg-[rgba(8,8,8,1)] shadows py-10 ${poppins.className}`}
    >
      <form
        action=""
        className="bg-[#252525] rounded-xl px-8 py-10 lg:p-10 w-[90%] max-w-[900px]"
      >
        <h1 className="text-3xl text-center mb-8">
          <strong>Register</strong>
        </h1>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full">
          <FormInput
            type="text"
            placeholder="Enter your first name"
            label="First Name"
          />
          <FormInput
            type="text"
            placeholder="Enter your last name"
            label="Last Name"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-5 lg:my-8">
          <FormInput
            type="email"
            placeholder="something@gmail.com"
            label="Email"
          />
          <FormInput
            type="tel"
            placeholder="+998 99 123 45 67"
            label="Phone Number"
            minLength={9}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-5 lg:my-8">
          <FormInput type="text" placeholder="your address" label="Address" />
          <FormInput
            type="password"
            placeholder="your password"
            label="Password"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-5 lg:my-8">
          <FormInput
            type="text"
            placeholder="your passport number"
            label="Passport Serial Number"
            minLength={9}
          />
          <FormSelect />
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            type="submit"
            className="bg-blue rounded-md font-medium py-2 px-14 btn-shadow hover:opacity-85 transition-all duration-300"
          >
            Register
          </button>
        </div>
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue ml-3">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
