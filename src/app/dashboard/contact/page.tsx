import { poppins } from "@/lib/fonts";
import type { Metadata } from "next";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import FormInput from "@/components/FormInput";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main
      className={`h-full bg-secondaryBg rounded-xl px-6 py-7 lg:px-14 ${poppins.className}`}
    >
      <ContactInfo />
      <ContactForm />
    </main>
  );
}

function ContactInfo() {
  return (
    <div className="relative max-w-[900px]">
      <h1 className="text-2xl sm:text-4xl leading-10 capitalize mb-7 font-semibold flex flex-wrap items-center gap-x-2.5">
        Contact Information
        <span className="text-[rgba(201,201,201,1)] text-lg sm:text-xl font-normal">
          Say something to start a live chat!
        </span>
      </h1>
      <div className="flex justify-between gap-4 flex-wrap w-full">
        <Link
          href="tel:+998932505255"
          className="flex items-center gap-4 sm:gap-8 text-lg sm:text-2xl"
        >
          <BiSolidPhoneCall />
          +998 93 250 52 55
        </Link>
        <Link
          href="mailto:tohirovquvonchbek89@gmail.com"
          className="flex items-center gap-4 sm:gap-8 text-lg sm:text-2xl break-all"
        >
          <MdMail />
          tohirovquvonchbek89@gmail.com
        </Link>
      </div>
      <address className="mt-8">
        <Link
          href="https://maps.app.goo.gl/6PSjzLobCdXTFZQW6"
          className="flex gap-4 sm:gap-8 text-lg sm:text-2xl"
          target="_blank"
        >
          <FaLocationDot />
          132 Dartmouth Street Boston, <br />
          Massachusetts 02156 United States
        </Link>
      </address>
    </div>
  );
}

function ContactForm() {
  return (
    <form action="" className="max-w-[900px] mt-16">
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
      <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-8">
        <FormInput
          type="email"
          name="email"
          placeholder="something@gmail.com"
          label="Email"
        />
        <FormInput
          type="tel"
          name="phoneNumber"
          placeholder="+998 99 123 45 67"
          label="Phone Number"
          minLength={9}
        />
      </div>
      <FormInput name="message" textarea label="Message" />
      <div className="flex justify-center items-center mt-8">
        <button
          type="submit"
          className="bg-blue rounded-md font-medium py-2 px-14 btn-shadow hover:opacity-85 transition-all duration-300"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
