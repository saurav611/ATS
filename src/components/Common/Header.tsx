import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-grey50 p-4 shadow-md">
      <div className="text-xl">
        <span className="text-greenHead font-[600]">ATS</span>
        <span className="text-blue50 font-[400]">Track</span>
      </div>
    </header>
  );
}
