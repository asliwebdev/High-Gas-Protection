import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function LearnMore() {
  return (
    <main className="min-h-screen flex justify-center bg-[rgba(8,8,8,1)] shadows px-4 py-10 md:py-20">
      <div>
        <p className="flex items-center gap-2 text-[rgba(201,201,201,1)] mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <IoIosArrowForward />
          <Link href="/learn-more" className="hover:underline">
            Learn-more
          </Link>
        </p>
        <h1 className="text-4xl md:text-5xl uppercase mb-6 md:mb-12 text-center">
          <strong>Learn More</strong>
        </h1>
        <p className="max-w-3xl text-lg">
          The HGP gas sensor was developed by a dedicated team from the TUIT
          Incubation Center and the INFINITY group. This project is the result
          of the hard work and collaboration of nearly 10 talented individuals
          who are passionate about making a positive impact. The device was
          designed and brought to fruition in less than six months, showcasing
          our team's commitment and efficiency.
          <span className="block mt-5">
            The primary objective of developing the HGP gas sensor is to
            safeguard human lives. Our device is specifically designed to
            prevent incidents of gas poisoning, providing an essential safety
            measure for households and businesses alike. By continuously
            monitoring air quality and promptly alerting users to hazardous gas
            levels, our sensor plays a crucial role in averting potential
            disasters.
          </span>
          <span className="block my-5">
            We are optimistic that the HGP gas sensor will save countless lives
            in the future, contributing to a safer living environment for many.
            Our project represents a significant step forward in promoting
            health and safety through innovative technology.
          </span>
          Our team remains dedicated to the advancement of society, continually
          striving to develop solutions that enhance the quality of life. We
          believe that our efforts today will lead to a better, safer tomorrow
          for everyone.
        </p>
        <Image
          src="/learn_more.png"
          alt="learn more image"
          width={300}
          height={300}
          className="mt-10 rounded-md hover:scale-105 transition-all duration-300"
        />
      </div>
    </main>
  );
}
