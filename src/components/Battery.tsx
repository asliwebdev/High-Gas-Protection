export function Battery({battery}: {battery: number}) {
  return <div className="flex flex-col items-center justify-center bg-[#323232] rounded-xl p-4 gap-3 w-[200px]">
    <h5 className={`text-lg font-semibold`}>Battery Power</h5>
    <p className={`text-lg font-semibold`}>{battery}%</p>
    <div className="h-[134px] w-[64px] bg-[#8f8f8f] rounded-lg flex items-end">
     <div className={`${battery >= 20 ? "bg-success" : "bg-danger"} w-full rounded-b-lg ${battery === 100 && "rounded-lg"}`} style={{ height: `${battery}%` }}></div>
  </div>
    </div>;
}