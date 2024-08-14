import { poppins } from "@/lib/fonts";
import type { Metadata } from "next";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main
      className={`h-full bg-secondaryBg rounded-xl px-6 py-7 lg:px-14 ${poppins.className} flex flex-col items-center justify-center`}
    >
      <ContactInfo />
      <ContactForm />
    </main>
  );
}

function ContactInfo() {
  return (
    <div className="relative max-w-[900px] w-full">
      <h1 className="text-2xl sm:text-4xl leading-10 capitalize mb-7 font-semibold flex flex-wrap items-center gap-x-2.5">
        Contact Information
      </h1>
      <div className="flex justify-between gap-4 flex-wrap w-full">
        <Link
          href="tel:+998932505255"
          className="flex items-center gap-4 sm:gap-8 text-lg sm:text-2xl hover:underline"
        >
          <BiSolidPhoneCall />
          +998 93 250 52 55
        </Link>
        <Link
          href="mailto:tohirovquvonchbek89@gmail.com"
          className="flex items-center gap-4 sm:gap-8 text-lg sm:text-2xl break-all hover:underline"
        >
          <MdMail />
          tohirovquvonchbek89@gmail.com
        </Link>
      </div>
      <address className="mt-8">
        <Link
          href="https://maps.app.goo.gl/h8NMc91Sdwncnt6Z6"
          className="flex gap-4 sm:gap-8 text-lg sm:text-2xl hover:underline"
          target="_blank"
        >
          <FaLocationDot />
          Tashkent 100084, Amir Temur avenue 108
        </Link>
      </address>
    </div>
  );
}
