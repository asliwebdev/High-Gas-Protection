import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

const teamMembers = [
  {
    name: "Tohirov Quvonchbek",
    imgPath: "/male_avatar.jpg",
  },
  {
    name: "Suvonov Nurbek",
    imgPath: "/male_avatar.jpg",
  },
  {
    name: "Yusupov Otabek",
    imgPath: "/male_avatar.jpg",
  },
  {
    name: "Turg’unpo’latov Islom",
    imgPath: "/male_avatar.jpg",
  },
];

export default function About() {
  return (
    <main className="h-full flex flex-col items-center lg:px-5 py-5">
      <p className="text-center max-w-3xl">
        Lorem ipsum dolor sit amet consectetur. Tortor nibh pharetra odio nunc
        ipsum aenean feugiat tincidunt massa. At curabitur velit pellentesque
        egestas. Non diam at ornare felis sed. Arcu leo nec nec aliquet
        malesuada facilisis.
      </p>
      <ul className="mt-10 grid sm:grid-cols-2 gap-4 lg:gap-x-[60px] gap-y-4">
        {teamMembers.map((member, index) => (
          <li
            key={index}
            className="bg-[rgba(96,96,96,1)] rounded-lg px-4 lg:px-[18px] py-[11px] flex items-center gap-3 lg:gap-6 text-lg"
          >
            <Image
              src={member.imgPath}
              alt="members avatar"
              width={53}
              height={53}
              className="rounded-full"
            />
            <span>{member.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
