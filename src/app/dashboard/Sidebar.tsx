"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";

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

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const pathname = usePathname();
  return (
    <aside
      className={`${
        isOpen
          ? "max-md:translate-x-0 max-md:z-[100] max-md:bg-[#212121]"
          : "max-md:-translate-x-full"
      } absolute md:sticky top-0 left-0 h-screen w-[280px] p-4 flex flex-col justify-between border-r border-borderColor transition-all duration-300`}
    >
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
          <button
            type="button"
            className="absolute top-4 right-4 md:hidden text-lg transform transition-all duration-300 hover:rotate-90"
            onClick={toggleSidebar}
          >
            <LiaTimesSolid />
          </button>
        </div>
        <ul>
          {navLinks.map((link) => {
            const { index, imgPath, title, href } = link;
            return (
              <li
                key={index}
                className={`mt-3 ${
                  pathname === href && "link-bg-gradient border-l border-blue"
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
      <div className="pt-5 pb-3 border-t border-borderColor font-medium">
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
