"use client"

export default function StaticLogo() {
  return (
    <div className="relative w-12 h-6">
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full" style={{ top: "1px", left: "0px" }}></div>
      <div className="absolute w-2 h-2 bg-white rounded-full" style={{ top: "0px", left: "4px" }}></div>
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ top: "1px", left: "7px" }}></div>
      <div className="absolute w-1 h-1 bg-white rounded-full" style={{ top: "3px", left: "9px" }}></div>
      <div className="absolute w-1 h-1 bg-white rounded-full" style={{ top: "3px", left: "11px" }}></div>
      <div className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ top: "1px", left: "13px" }}></div>
      <div className="absolute w-2 h-2 bg-white rounded-full" style={{ top: "0px", left: "16px" }}></div>
      <div className="absolute w-2.5 h-2.5 bg-white rounded-full" style={{ top: "1px", left: "20px" }}></div>
    </div>
  )
}
