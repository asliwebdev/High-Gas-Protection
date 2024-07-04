import FormInput from "@/components/FormInput";
import { poppins } from "@/lib/fonts";
import Link from "next/link";

export default function Login() {
  return (
    <main
      className={`min-h-screen flex items-center justify-center bg-[rgba(8,8,8,1)] shadows py-10 ${poppins.className}`}
    >
      <form
        action=""
        className="bg-[#252525] rounded-xl px-8 py-10 lg:p-10 w-[90%] max-w-[600px]"
      >
        <h1 className="text-3xl text-center mb-8">
          <strong>Login</strong>
        </h1>
        <div className="flex flex-col gap-5 lg:gap-8">
          <FormInput
            type="password"
            placeholder="your password"
            label="Password"
            width="w-full"
          />
          <FormInput
            type="text"
            placeholder="Enter your login"
            label="Login"
            width="w-full"
          />
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
          No account yet?{" "}
          <Link href="/registration" className="text-blue ml-3">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
}
