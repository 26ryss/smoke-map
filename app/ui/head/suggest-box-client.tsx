'use client';

import { IoIosClose } from "react-icons/io";

export default function SuggestBoxClient({
  areas,
} : {
  areas: string[];
}) {
  return (
    <div className="flex flex-wrap bg-white border-x border-b border-black px-2 py-2 z-10 relative">
      <button 
        className="absolute top-0 right-0"
      >
        <IoIosClose  size={24} color="#000"/>
      </button>
      {areas.map((area) => {
        return (
          <Tag area={area} />
        )
      })}
    </div>
  )
}

export function Tag({ area }:{ area: string }) {
  return (
    <button 
      className="bg-slate-200 px-3 py-1 rounded-sm hover:bg-slate-300 mx-2 my-1"
    >
      <p className="text-gray-900 text-xs">{area}</p>
    </button>
  )
}