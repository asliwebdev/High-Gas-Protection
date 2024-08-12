"use client";

import { Battery } from "@/components/Battery";
import { livvic, roboto, sen } from "@/lib/fonts";
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { useEffect, useState } from "react";

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
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    var socket = new SockJS('https://amused-bison-equipped.ngrok-free.app/websocket-connection');
    var stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame: any) {
        stompClient.subscribe("/topic/message", function (payload) {
            if (payload.isBinaryBody) {
                const binaryData = new TextDecoder().decode(payload.binaryBody);
                const data = JSON.parse(binaryData);
                setData(data);
            } else {
                console.log(payload.body);
            }
        });
    });
  }, []);
  

  return (
    <main className="h-full flex items-center justify-center py-5">
      <div className="flex flex-col justify-between h-full gap-y-10">
        <Statistics data={data} />
        <div className="sm:px-6">
          <div className="bg-[#3a3a3a] rounded-lg py-7 sm:px-[29px] flex justify-center lg:justify-between gap-2 gap-y-8 flex-wrap">
           <Temperature temperature={data?.temperature} />
           <GasPressure gasPressure={data?.gasPressure} />
           <Battery battery={data?.battery} />
          </div>   
        </div>           
        <Emergencies />
      </div>
    </main>
  );
}

function Statistics({data}: {data: any}) {
  return (
    <section className="mt-6 flex justify-center">
      <div>
      <h5 className="font-medium text-lg">Statistics</h5>
      <ul
        className={`mt-2 py-1.5 flex justify-center gap-10 flex-wrap font-extrabold`}
      >
        <li className="bg-[rgba(255,255,255,0.3)] rounded-xl py-[5px] px-20 flex flex-col items-center">
            <p className="mb-4 text-xl opacity-80">Air Humidity</p>
            <span className="text-xl">{data?.airHumidity}</span>
        </li>
        <li className="bg-[rgba(255,255,255,0.3)] rounded-xl py-[5px] px-20 flex flex-col items-center">
            <p className="mb-4 text-xl opacity-80">Price</p>
            <span className="text-xl">{data?.price}</span>
        </li>
      </ul>
      </div>
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

function Temperature({temperature}: {temperature: number}) {
  return <div className="bg-[#323232] rounded-xl p-8 flex justify-center self-start">
   <div>
    <p className="text-xs font-[300] my-[13px]">Tue | Dec 15</p>
    <h3 className={`font-bold text-[42px] leading-[50px] ${sen.className}`}>{temperature}º C</h3>
   </div>
  </div>
}

function GasPressure({gasPressure}: {gasPressure: number}) {
  const status = () => {
    if (0 < gasPressure && gasPressure <= 40) {
      return "success";
    } else if (40 < gasPressure && gasPressure <= 60) {
      return "warning";
    } else if(60 < gasPressure && gasPressure <= 75) {
      return "darkWarning";
    } else if (75 < gasPressure && gasPressure <= 100) {
      return "danger";
  }
}
  return <div className="bg-[#323232] rounded-xl p-8 flex justify-center self-start">
   <div>
   <h5 className={`text-lg font-semibold text-center mb-3`}>Gas Pressure</h5>
    <div className={`radial-progress ${roboto.className} font-bold text-2xl`} data-value={gasPressure || 0} data-status={status()} style={{ "--value": gasPressure, "--size": "12rem", "--thickness": "2rem" } as React.CSSProperties} role="progressbar">{gasPressure || 0}</div>
   </div>
  </div>
}
