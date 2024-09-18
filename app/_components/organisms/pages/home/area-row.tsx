'use client'

import clsx from "clsx"
import Link from "next/link"

type AreaRowProps = {
  prefecture: string;
  areas: { name: string }[];
}

export default function AreaRow({ prefecture, areas }: AreaRowProps) {
  function createUrl(areaName: string): string {
    return `/search/${areaName}`
  }

  return (
    <div className="w-full h-full flex px-10 py-4 items-center border">
      <h3 className="text-gray-700 font-semibold w-1/5">{prefecture}</h3>
      <div className="flex items-center">
        {areas.map((area, index) => {
          return(
            <Link key={index} href={createUrl(area.name)}>
              <p className={clsx(
                "text-blue-500 font-semibold px-5 hover:text-blue-400",
                {
                  "border-r border-gray-300": index !== areas.length - 1
                }
              )}
              >{area.name}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}