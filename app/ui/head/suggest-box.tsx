'use client';

import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from 'react';
import { fetchFilteredArea } from "@/app/lib/data";
import { set } from "zod";

export default function SuggestBox({
  query,
} : {
  query: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [areas, setAreas] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAreas() {
      const data = await fetchFilteredArea(query);
      const areas = data.map((area) => area.name);
      setAreas(areas);
    }
    fetchAreas();
  }, [query]);

  useEffect(() => {
    if (areas.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [areas]);

  return (
    <>
      {isOpen ? (
        <div className="flex flex-wrap bg-white border-x border-b border-black px-2 py-2 z-10 relative">
        <button 
          className="absolute top-0 right-0"
          onClick={() => setIsOpen(false)}
        >
          <IoIosClose  size={24} color="#000"/>
        </button>
        {areas.map((area) => {
          return (
            <Tag area={area} key={area}/>
          )
        })}
      </div>
      ) : (
        <></>
      )}
    </>
  )
}

export function Tag({ area }:{ area: string }) {
  return (
    <button 
      className="bg-slate-200 px-3 py-1 rounded-sm hover:bg-slate-300 mx-2 my-2"
    >
      <p className="text-gray-900 text-xs">{area}</p>
    </button>
  )
}