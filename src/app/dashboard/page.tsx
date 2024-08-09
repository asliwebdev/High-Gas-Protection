import { Battery } from "@/components/Battery";
import { livvic, roboto, sen } from "@/lib/fonts";
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
      <div className="flex flex-col justify-between h-full gap-y-10">
        <Statistics />
        <div className="px-6">
          <div className="bg-[#3a3a3a] rounded-lg py-7 px-[29px] flex justify-between gap-2 flex-wrap">
           <Temperature />
           <GasPressure />
           <Battery />
          </div>   
        </div>           
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
              className="bg-[rgba(255,255,255,0.3)] rounded-xl py-[5px] px-10 flex flex-1 flex-col items-center"
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
            className="bg-[rgba(157,213,244,1)] rounded-lg py-[5px] px-2.5 flex max-sm:flex-1 flex-col items-center"
          >
            <p className="text-black mb-4">{emergency.title}</p>
            <span className="text-[rgba(0,102,29,1)]">{emergency.number}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Temperature() {
  return <div className="bg-[#323232] rounded-xl p-8 flex justify-center self-start">
   <div>
    <p className="text-xs font-[300] my-[13px]">Tue | Dec 15</p>
    <h3 className={`font-bold text-[42px] leading-[50px] ${sen.className}`}>25º C</h3>
   </div>
  </div>
}

function GasPressure() {
  return <div className="bg-[#323232] rounded-xl p-8 flex justify-center self-start">
   <div>
   <h5 className={`text-lg ${livvic.className} font-semibold text-center mb-3`}>Battery Power</h5>
    <div className={`radial-progress ${roboto.className} font-bold text-2xl`} style={{ "--value": "30", "--size": "12rem", "--thickness": "2rem" } as React.CSSProperties} role="progressbar">70</div>
   </div>
  </div>
}
