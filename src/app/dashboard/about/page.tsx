import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const teamMembers = [
  {
    name: "Tohirov Quvonchbek",
    imgPath: "/quvonchbek.jpg",
    link: "https://www.linkedin.com/in/quvonchbek-tohirov-975458269"
  },
  {
    name: "Suvonov Nurbek",
    imgPath: "/nurbek.jpg",
    link: "https://t.me/nur_bek_k"
  },
  {
    name: "Yusupov Otabek",
    imgPath: "/otabek.jpg",
    link: "https://t.me/Inventor_Uzb"
  },
  {
    name: "Turg’unpo’latov Islom",
    imgPath: "/islom.jpg",
    link: "https://www.linkedin.com/in/islomTurgunpolatov"
  },
  {
    name: "Bozorov Asliddin",
    imgPath: "/asliddin.jpg",
    link: "https://www.linkedin.com/in/asliddin-bozorov"
  },
];

export default function About() {
  return (
    <main className="h-full flex flex-col items-center lg:px-5 py-5">
      <p className="text-center max-w-3xl">
      The HGP gas sensor was developed by a dedicated team from the TUIT Incubation Center and the INFINITY group. This project is the result of the hard work and collaboration of nearly 10 talented individuals who are passionate about making a positive impact. Our clients include mainly people, small and medium industries.
      </p>
        <div className="relative w-full h-[370px] mt-20 max-w-[750px]">
          <Image src="/placeholder.png" alt="placeholder image" width={301} height={193} className="absolute left-0 top-0 z-10" />
          <Image src="/placeholder.png" alt="placeholder image" width={301} height={193} className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2" />
          <Image src="/placeholder.png" alt="placeholder image" width={301} height={193} className="absolute right-0 top-0 z-30" />
        </div>
      <ul className="mt-10 grid sm:grid-cols-2 gap-4 lg:gap-x-[60px] gap-y-4">
        {teamMembers.map((member, index) => (
          <li
            key={index}
            className="bg-[rgba(96,96,96,1)] rounded-lg px-4 lg:px-[18px] py-[11px] flex items-center gap-3 lg:gap-6 text-lg"
          >
            <Link href={member.link} className="flex items-center gap-3 lg:gap-6" target="_blank">
            <img
              src={member.imgPath}
              alt="members avatar"
              className="rounded-full w-[60px] h-[60px] object-fit"
            />
            <span>{member.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
