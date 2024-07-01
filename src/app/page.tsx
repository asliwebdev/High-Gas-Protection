import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#252525]">
      <Navbar />
      <Hero />
      <Reception />
      <Contacts />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-10 p-4">
      <div className="py-2 px-[2.6rem] container w-full lg:w-[90%] mx-auto flex justify-between items-center h-[90px] rounded-[100vw] bg-[#323232]">
        <div className="flex gap-4 items-center">
          <Image src="/logo.png" alt="logo" width={48} height={48} />
          <span className="font-bold text-[22.4px]">HGP</span>
        </div>
        <ul className="flex items-center font-medium text-[22.4px]">
          <li className="p-4 rounded-2xl hover:bg-[#252525] transition-colors duration-300">
            <Link href="#reception">Reception</Link>
          </li>
          <li className="p-4 rounded-2xl hover:bg-[#252525] transition-colors duration-300">
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="pt-24 flex justify-center items-center max-sm:px-4">
      <div className="max-w-[800px] py-6 lg:py-12">
        <h1 className="text-center text-[clamp(2.25rem,5vw,4.5rem)]">
          <strong>High Gas Protection</strong>
        </h1>
        <p className="text-center mt-5 max-w-3xl text-[22.4px]">
          This is the project made by TUIT students group. This system allow you
          to manage gas condition. If you want to get information about the
          protector, please click the bottom below
        </p>
        <div className="flex justify-center mt-10">
          <Link
            href="/learn-more"
            className="bg-[rgba(67,238,125,1)] rounded-[100px] py-5 px-8 text-black font-semibold text-[22.4px] hover:opacity-80 transition-all duration-300"
          >
            Learn more
          </Link>
        </div>
        <div className="flex justify-center mt-16">
          <Image
            src="/hgp.jpg"
            alt="hgp logo"
            width={549}
            height={500}
            quality={100}
            className="rounded-[2rem]"
          />
        </div>
      </div>
    </div>
  );
}

const receptions = [
  {
    index: "01",
    title: "Register",
    description: "You have to register before ordering and log in our system.",
    link: "/registration",
  },
  {
    index: "02",
    title: "Order",
    description: "After having registered, you can order gas detector.",
    link: "/order",
  },
  {
    index: "03",
    title: "Login",
    description:
      "Once your order, you will be given login to access the system but you have to use your password!",
    link: "/login",
  },
];

function Reception() {
  return (
    <section id="reception" className="py-12 px-4">
      <div className="container lg:w-[90%] mx-auto">
        <h2 className="text-center text-[64px]">
          <strong>Reception</strong>
        </h2>
        <ul className="mt-8 flex gap-6 flex-wrap tracking-tight items-stretch">
          {receptions.map((reception) => {
            const { index, title, description, link } = reception;
            return (
              <li
                key={index}
                className="bg-[#404040] rounded-[2rem] flex-1 flex flex-col flex-nowrap relative min-w-[320px]"
              >
                <div className="mt-8 p-[36px] pt-0 h-full flex flex-col flex-grow">
                  <h5 className="text-[80px] leading-none text-[rgba(97,232,15,1)]">
                    <strong>{index}</strong>
                  </h5>
                  <h4 className="mt-5 text-[32px]">
                    <strong>{title}</strong>
                  </h4>
                  <p className="my-3 text-[22.4px]">{description}</p>
                  <div className="mt-auto flex">
                    <Link
                      href={link}
                      className="mt-4 bg-[rgba(67,238,125,1)] rounded-[100px] py-5 px-8 text-black font-semibold text-[22.4px] hover:opacity-80 transition-all duration-300"
                    >
                      {title}
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="py-12 px-4">
      <div className="container lg:w-[90%] mx-auto">
        <h2 className="text-center text-[64px]">
          <strong>Contacts</strong>
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          <div className="p-[36px] bg-[#404040] rounded-[2rem] flex-1">
            <h5 className="text-[32px] leading-[1.5] mb-3">
              <strong>Get in touch</strong>
            </h5>
            <ul className="flex flex-col gap-2 text-[22.4px]">
              <li>
                Phone:{" "}
                <Link
                  href="tel:+998 71 238 64 15"
                  className="text-[rgba(67,238,125,1)]"
                >
                  +998 71 238 64 15
                </Link>
              </li>
              <li>
                Whatsapp:{" "}
                <Link
                  href="https://wa.me/+998712386415"
                  target="_blank"
                  className="text-[rgba(67,238,125,1)]"
                >
                  +998 71 238 64 15
                </Link>
              </li>
              <li>
                Email:{" "}
                <Link
                  href="mailto:info@tuit.uz"
                  className="text-[rgba(67,238,125,1)]"
                >
                  info@tuit.uz
                </Link>
              </li>
            </ul>
            <ul className="mt-10 text-[22.4px]">
              <li>
                <span>
                  Address: <br />
                </span>
                Tashkent 100084, Amir Temur avenue 108
              </li>
              <li>
                <span>
                  Working hours: <br />
                </span>
                9:00AM - 6:00PM
              </li>
            </ul>
          </div>
          <div className="flex-[1.5] min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48025.8379813608!2d69.19522338136711!3d41.3391037924045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8a0bfe27d9%3A0x29bcda9dd27c336a!2sTATU!5e0!3m2!1sen!2s!4v1719681203682!5m2!1sen!2s"
              className="h-full w-full rounded-[2rem] max-lg:h-[400px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

const socialLinks = [
  {
    index: 1,
    url: "/",
    icon: <FaFacebookF />,
  },
  {
    index: 2,
    url: "/",
    icon: <FaXTwitter />,
  },
  {
    index: 3,
    url: "/",
    icon: <FaInstagram />,
  },
  {
    index: 4,
    url: "/",
    icon: <FaYoutube />,
  },
];

function Footer() {
  return (
    <footer className="bg-[#323232] py-16 px-4 flex items-center justify-center">
      <div className="flex flex-col gap-8">
        <ul className="flex justify-center items-center font-medium text-[32px]">
          <li className="p-4 rounded-2xl hover:bg-[#252525] transition-colors duration-300">
            <Link href="#reception">Reception</Link>
          </li>
          <li className="p-4 rounded-2xl hover:bg-[#252525] transition-colors duration-300">
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => {
            return (
              <li
                key={link.index}
                className="bg-[#252525] w-[72px] h-[72px] rounded-full hover:opacity-85 transition-all duration-300"
              >
                <Link
                  href={link.url}
                  target="_blank"
                  className="w-full h-full flex items-center justify-center text-[32px]"
                >
                  {link.icon}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-[22.4px] mt-4 text-center">
          © Copyright {new Date().getFullYear()}{" "}
          <span className="text-[rgba(67,238,125,1)]">HGP</span> - All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
