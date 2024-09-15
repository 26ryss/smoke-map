import { MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SideBar({ area }: { area:string }) {
  const url = `/map?area=${encodeURIComponent(area)}`;
  return(
    <div className="w-full h-full flex p-4 border border-gray-300">
      <div className="w-full h-full">
        <div className="flex text-md font-semibold text-gray-900 pb-2 space-x-3 border-b">
          <MapPinIcon className="w-5 text-[#9F9366]" />
          <p>{area}</p>
        </div>
        <div className="w-full py-4 justify-center">
          <Link href={url} className="text-blue-500 text-sm font-semibold">このエリアを地図で見る</Link>
        </div>
      </div>
    </div>
  )
}