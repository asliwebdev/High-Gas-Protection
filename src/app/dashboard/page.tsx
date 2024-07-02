import { roboto } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const statistics = [
  {
    title: "TITLE 1",
    value: 1235,
  },
  {
    title: "TITLE 2",
    value: 1236,
  },
  {
    title: "TITLE 3",
    value: 1237,
  },
];

const emergencies = [
  {
    title: "OʻT OʻCHIRISH XIZMATI",
    number: 101,
  },
  {
    title: "ICHKI ISHLAR ORGANI",
    number: 102,
  },
  {
    title: "TEZ TIBBIY YORDAM",
    number: 103,
  },
  {
    title: "GAZ XIZMATI",
    number: 104,
  },
  {
    title: "QUTQARUV XIZMATI",
    number: 1050,
  },
];

export default function Dashboard() {
  return (
    <main className="h-full flex items-center justify-center py-5">
      <div>
        <Statistics />
        <h1 className="text-6xl mt-16">Welcome To The Dashboard! </h1>
        <p className="text-2xl mt-6">
          To Be able to access to this page you have to be authenticated!!!
        </p>
        <Emergencies />
      </div>
    </main>
  );
}

function Statistics() {
  return (
    <section className="mt-6">
      <h5 className="font-medium text-lg">Statistics</h5>
      <ul
        className={`mt-2 py-1.5 flex justify-between gap-4 flex-wrap ${roboto.className}`}
      >
        {statistics.map((stat, index) => {
          return (
            <li
              key={index}
              className="bg-[rgba(255,255,255,0.3)] rounded-xl py-[5px] px-10 flex flex-col items-center"
            >
              <p className="mb-4">{stat.title}</p>
              <span className="text-[rgba(166,166,166,1)]">{stat.value}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Emergencies() {
  return (
    <ul className={`mt-10 flex gap-4 flex-wrap ${roboto.className}`}>
      {emergencies.map((emergency, index) => {
        return (
          <li
            key={index}
            className="bg-[rgba(157,213,244,1)] rounded-lg py-[5px] px-2.5 flex flex-col items-center"
          >
            <p className="text-black mb-4">{emergency.title}</p>
            <span className="text-[rgba(0,102,29,1)]">{emergency.number}</span>
          </li>
        );
      })}
    </ul>
  );
}
