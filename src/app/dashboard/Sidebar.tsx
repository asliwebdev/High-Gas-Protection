"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const navLinks = [
  {
    index: 1,
    title: "Home",
    imgPath: "/nine_circles.svg",
    href: "/dashboard",
  },
  {
    index: 2,
    title: "About Us",
    imgPath: "/menu_square.svg",
    href: "/dashboard/about",
  },
  {
    index: 3,
    title: "Contact Us",
    imgPath: "/contact.svg",
    href: "/dashboard/contact",
  },
  {
    index: 4,
    title: "FAQ",
    imgPath: "/faq.svg",
    href: "/dashboard/faq",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden h-screen w-[280px] p-4 md:flex flex-col justify-between border-r border-[rgba(255,255,255,0.1)]">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#494949]">
            <Image
              src="/dashboard_logo.svg"
              alt="dashboard logo"
              width={19}
              height={19}
            />
          </div>
          <span className="text-xl">
            <strong>Dashboard</strong>
          </span>
        </div>
        <ul>
          {navLinks.map((link) => {
            const { index, imgPath, title, href } = link;
            return (
              <li
                key={index}
                className={`mt-3 ${
                  pathname === href &&
                  "link-bg-gradient border-l border-[rgba(38,112,233,1)]"
                } px-5 py-2.5 text-lg font-medium hover-link-bg-gradient`}
              >
                <Link href={href} className="flex gap-2">
                  <Image src={imgPath} alt={title} width={19} height={19} />
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-5 pb-3 border-t border-[rgba(255,255,255,0.1)] font-medium">
        <Link
          href="/use-policy"
          className="flex items-center gap-2 px-5 py-2.5"
        >
          <FaRegQuestionCircle />
          <span>Using Policy</span>
        </Link>
        <button type="button" className="flex items-center gap-2 px-5 py-2.5">
          <BiLogOut /> Log out
        </button>
      </div>
    </aside>
  );
}
